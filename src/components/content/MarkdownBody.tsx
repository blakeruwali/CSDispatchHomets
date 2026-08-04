import React from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { docsById } from "@/lib/content";

/**
 * Headings carry `{#anchor}` markers so the QA rubric can deep-link to an
 * exact standard. Strip the marker from the visible text and use it as the
 * element id.
 */
function splitAnchor(children: React.ReactNode): { text: React.ReactNode; id?: string } {
  const nodes = React.Children.toArray(children);
  const last = nodes[nodes.length - 1];
  if (typeof last !== "string") return { text: children };

  const match = /^([\s\S]*?)\s*\{#([a-z0-9-]+)\}\s*$/.exec(last);
  if (!match) return { text: children };

  const trimmed = match[1];
  const rest = nodes.slice(0, -1);
  return { text: trimmed ? [...rest, trimmed] : rest, id: match[2] };
}

/** Plain text of a node tree, for detecting callout markers. */
function textOf(node: React.ReactNode): string {
  return React.Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (React.isValidElement(child)) return textOf((child.props as { children?: React.ReactNode }).children);
      return "";
    })
    .join("");
}

interface MarkdownBodyProps {
  markdown: string;
  lightMode: boolean;
  /** Called when the reader follows a cross-reference to another doc id. */
  onNavigate?: (id: string) => void;
}

/**
 * Long-form rendering for SOP documents.
 *
 * Tuned for sustained reading rather than scanning: a wider type size than the
 * surrounding app, generous line-height, and vertical rhythm that gives each
 * heading room. Blockquotes carry most of the weight in these documents —
 * verbatim scripts and hard warnings — so they get real treatment rather than
 * a thin left border.
 */
export const MarkdownBody: React.FC<MarkdownBodyProps> = ({
  markdown,
  lightMode,
  onNavigate,
}) => {
  const border = lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,100%,0.13)";
  const subtleBg = lightMode ? "hsl(0,0%,97%)" : "hsl(0,0%,100%,0.035)";
  const codeBg = lightMode ? "hsl(0,0%,93%)" : "hsl(0,0%,100%,0.08)";
  const accent = "hsl(15,90%,55%)";
  const warn = "hsl(40,90%,55%)";
  const strong = lightMode ? "text-gray-900" : "text-white";
  const body = lightMode ? "text-gray-700" : "text-white/80";
  const muted = lightMode ? "text-gray-500" : "text-white/50";

  const components: Components = {
    // The document title is rendered by the layout header.
    h1: () => null,

    h2: ({ children }) => {
      const { text, id } = splitAnchor(children);
      return (
        <h2
          id={id}
          className={`scroll-mt-24 text-[1.35rem] font-semibold tracking-tight mt-12 mb-3 pb-2 ${strong}`}
          style={{ borderBottom: `1px solid ${border}` }}
        >
          {text}
        </h2>
      );
    },

    h3: ({ children }) => {
      const { text, id } = splitAnchor(children);
      return (
        <h3 id={id} className={`scroll-mt-24 text-[1.05rem] font-semibold mt-8 mb-2 ${strong}`}>
          {text}
        </h3>
      );
    },

    p: ({ children }) => <p className={`my-4 leading-[1.75] ${body}`}>{children}</p>,

    ul: ({ children }) => (
      <ul className={`list-disc pl-6 space-y-2 my-4 leading-[1.7] marker:text-current/40 ${body}`}>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className={`list-decimal pl-6 space-y-2 my-4 leading-[1.7] marker:font-medium ${body}`}>
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,

    strong: ({ children }) => <strong className={`font-semibold ${strong}`}>{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,

    /**
     * Two kinds of quote in these documents, and they should not look alike:
     * a warning that stops the reader, and a verbatim script they must say.
     */
    blockquote: ({ children }) => {
      const isWarning = /⚠️|never|do not|stop —/i.test(textOf(children).slice(0, 160));
      const tone = isWarning ? warn : accent;
      return (
        <blockquote
          className="my-6 rounded-r-lg py-3 pl-5 pr-4"
          style={{
            borderLeft: `3px solid ${tone}`,
            background: lightMode ? `${tone}0f` : `${tone}14`,
          }}
        >
          <div className={`[&>p]:my-1.5 [&>p]:leading-[1.7] ${body}`}>{children}</div>
        </blockquote>
      );
    },

    hr: () => <hr className="my-10" style={{ borderColor: border }} />,

    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 decoration-1"
        style={{ color: accent }}
      >
        {children}
      </a>
    ),

    table: ({ children }) => (
      <div
        className="my-6 overflow-x-auto rounded-lg"
        style={{ border: `1px solid ${border}` }}
      >
        <table className="w-full border-collapse text-[0.9rem]">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead style={{ background: subtleBg }}>{children}</thead>
    ),
    th: ({ children }) => (
      <th
        className={`text-left font-semibold px-4 py-2.5 ${strong}`}
        style={{ borderBottom: `1px solid ${border}` }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className={`px-4 py-2.5 align-top leading-[1.6] ${body}`}
        style={{ borderTop: `1px solid ${border}` }}
      >
        {children}
      </td>
    ),

    code: ({ children }) => {
      const text = String(children);
      const target = docsById[text];

      // A cross-reference to a real document becomes a link to it.
      if (target && onNavigate) {
        return (
          <button
            onClick={() => onNavigate(target.id)}
            className="rounded px-1.5 py-0.5 text-[0.85em] font-medium transition-opacity hover:opacity-70"
            style={{ background: `${accent}1f`, color: accent }}
            title={`Go to ${target.title}`}
          >
            {target.title}
          </button>
        );
      }

      return (
        <code
          className={`rounded px-1.5 py-0.5 text-[0.85em] ${muted}`}
          style={{ background: codeBg }}
        >
          {children}
        </code>
      );
    },

    pre: ({ children }) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg p-4 text-[0.85rem] leading-relaxed"
        style={{ background: subtleBg, border: `1px solid ${border}` }}
      >
        {children}
      </pre>
    ),
  };

  return (
    <div className="text-[1.0625rem]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
