// Local-only store for rubrics & live sessions (localStorage)
export type ChecklistItem = {
  id: string;
  label: string;
  weight: number; // points
  category?: string;
  critical?: boolean; // failing a critical item caps overall score
  notes?: string;
};

export type Rubric = {
  id: string;
  name: string;
  type: "sales" | "dispatch" | "custom";
  passThreshold: number; // 0-100 percentage
  items: ChecklistItem[];
  createdAt: number;
  updatedAt: number;
};

export type SessionState = {
  id: string;
  rubricId: string;
  rubricName: string;
  customer?: string;
  rep?: string;
  startedAt: number;
  endedAt?: number;
  // itemId -> 1 (yes), 0 (no), -1 (n/a)
  responses: Record<string, 1 | 0 | -1>;
  itemNotes: Record<string, string>;
  generalNotes?: string;
};

const RUBRICS_KEY = "homets.checklist.rubrics.v1";
const SESSIONS_KEY = "homets.checklist.sessions.v1";
const ACTIVE_KEY = "homets.checklist.activeSession.v1";

export const uid = () => Math.random().toString(36).slice(2, 10);

export const loadRubrics = (): Rubric[] => {
  try {
    return JSON.parse(localStorage.getItem(RUBRICS_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveRubrics = (rubrics: Rubric[]) => {
  localStorage.setItem(RUBRICS_KEY, JSON.stringify(rubrics));
};

export const loadSessions = (): SessionState[] => {
  try {
    return JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveSessions = (sessions: SessionState[]) => {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
};

export const loadActiveSession = (): SessionState | null => {
  try {
    const raw = localStorage.getItem(ACTIVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const saveActiveSession = (s: SessionState | null) => {
  if (!s) localStorage.removeItem(ACTIVE_KEY);
  else localStorage.setItem(ACTIVE_KEY, JSON.stringify(s));
};

export type Score = {
  earned: number;
  possibleAnswered: number;
  possibleAll: number;
  pctAnswered: number; // % of answered items
  pctOverall: number; // % of all items (treats unanswered as 0)
  answeredCount: number;
  totalCount: number;
  yesCount: number;
  noCount: number;
  naCount: number;
  criticalFailed: boolean;
  passed: boolean;
};

export const computeScore = (rubric: Rubric, session: SessionState): Score => {
  let earned = 0;
  let possibleAnswered = 0;
  let possibleAll = 0;
  let yesCount = 0;
  let noCount = 0;
  let naCount = 0;
  let answered = 0;
  let criticalFailed = false;

  for (const item of rubric.items) {
    const w = Number(item.weight) || 0;
    const r = session.responses[item.id];
    if (r === -1) {
      naCount++;
      answered++;
      continue; // N/A excluded entirely
    }
    possibleAll += w;
    if (r === 1) {
      earned += w;
      possibleAnswered += w;
      yesCount++;
      answered++;
    } else if (r === 0) {
      possibleAnswered += w;
      noCount++;
      answered++;
      if (item.critical) criticalFailed = true;
    }
  }

  const pctAnswered = possibleAnswered > 0 ? (earned / possibleAnswered) * 100 : 0;
  const pctOverall = possibleAll > 0 ? (earned / possibleAll) * 100 : 0;
  const passed = !criticalFailed && pctOverall >= rubric.passThreshold;

  return {
    earned,
    possibleAnswered,
    possibleAll,
    pctAnswered,
    pctOverall,
    answeredCount: answered,
    totalCount: rubric.items.length,
    yesCount,
    noCount,
    naCount,
    criticalFailed,
    passed,
  };
};
