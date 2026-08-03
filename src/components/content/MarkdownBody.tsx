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
  return {
    text: trimmed ? [...rest, trimmed] : rest,
    id: match[2],
  };
}

interface MarkdownBodyProps {
  markdown: string;
  lightMode: boolean;
  /** Called when the reader follows a cross-reference to another doc id. */
  onNavigate?: (id: string) => void;
}

/**
 * Renders SOP markdown with the app's styling.
 *
 * Docs cross-reference each other by id in backticks (`sop.csm.greeting`).
 * Those are turned into working links — that indirection is the whole reason
 * the content layer uses ids instead of file paths.
 */
export const MarkdownBody: React.FC<MarkdownBodyProps> = ({
  markdown,
  lightMode,
  onNavigate,
}) => {
  const border = lightMode ? "hsl(0,0%,88%)" : "hsl(0,0%,100%,0.14)";
  const subtleBg = lightMode ? "hsl(0,0%,97%)" : "hsl(0,0%,100%,0.04)";
  const codeBg = lightMode ? "hsl(0,0%,94%)" : "hsl(0,0%,100%,0.08)";
  const accent = "hsl(15,90%,55%)";
  const strongText = lightMode ? "text-gray-900" : "text-white";
  const bodyText = lightMode ? "text-gray-700" : "text-white/75";
  const mutedText = lightMode ? "text-gray-500" : "text-white/55";

  const components: Components = {
    // The doc title is rendered by the accordion trigger, so H1 is redundant.
    h1: () => null,
    h2: ({ children }) => {
      const { text, id } = splitAnchor(children);
      return (
        <h3 id={id} className={`text-sm font-semibold mt-5 mb-2 scroll-mt-20 ${strongText}`}>
          {text}
        </h3>
      );
    },
    h3: ({ children }) => {
      const { text, id } = splitAnchor(children);
      return (
        <h4
          id={id}
          className={`text-xs font-semibold uppercase tracking-wide mt-4 mb-1.5 scroll-mt-20 ${mutedText}`}
        >
          {text}
        </h4>
      );
    },
    p: ({ children }) => <p className={`my-2 ${bodyText}`}>{children}</p>,
    ul: ({ children }) => (
      <ul className={`list-disc pl-5 space-y-1 my-2 ${bodyText}`}>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className={`list-decimal pl-5 space-y-1 my-2 ${bodyText}`}>{children}</ol>
    ),
    strong: ({ children }) => (
      <strong className={`font-semibold ${strongText}`}>{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-3 pl-3 py-1 italic"
        style={{ borderLeft: `2px solid ${accent}` }}
      >
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-4" style={{ borderColor: border }} />,
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
        style={{ color: accent }}
      >
        {children}
      </a>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-3">
        <table className="w-full text-xs border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th
        className={`text-left font-semibold py-1.5 pr-3 ${strongText}`}
        style={{ borderBottom: `1px solid ${border}` }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className={`py-1.5 pr-3 align-top ${bodyText}`}
        style={{ borderBottom: `1px solid ${border}` }}
      >
        {children}
      </td>
    ),
    code: ({ children }) => {
      const text = String(children);
      const target = docsById[text];

      // A cross-reference to a real document becomes a link.
      if (target) {
        return (
          <button
            onClick={() => onNavigate?.(target.id)}
            className="rounded px-1 py-0.5 text-[11px] font-medium transition-opacity hover:opacity-70"
            style={{ background: `${accent}22`, color: accent }}
            title={target.title}
          >
            {target.title}
          </button>
        );
      }

      return (
        <code
          className="rounded px-1 py-0.5 text-[11px]"
          style={{ background: codeBg }}
        >
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre
        className="rounded-lg p-3 my-3 overflow-x-auto text-xs"
        style={{ background: subtleBg, border: `1px solid ${border}` }}
      >
        {children}
      </pre>
    ),
  };

  return (
    <div className="text-sm leading-relaxed">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
