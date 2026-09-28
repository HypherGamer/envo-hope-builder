import React from "react";

/**
 * Safely converts plain text / markdown into React elements without dangerous HTML execution.
 * Supports headings (#, ##, ###), bold (**text**), italics (*text*), bullet lists (- item),
 * blockquotes (> text), and paragraphs.
 */
export function renderSafeMarkdown(content: string | undefined | null): React.ReactNode {
  if (!content || !content.trim()) return null;

  // Split content by paragraphs/blocks
  const blocks = content.replace(/\r\n/g, "\n").split(/\n\n+/);

  return (
    <div className="space-y-4 text-foreground/85 leading-relaxed">
      {blocks.map((block, bIdx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Headings
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={bIdx} className="text-xl font-bold text-foreground tracking-tight pt-2">
              {formatInlineText(trimmed.slice(4))}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={bIdx} className="text-2xl font-bold text-foreground tracking-tight pt-3">
              {formatInlineText(trimmed.slice(3))}
            </h2>
          );
        }
        if (trimmed.startsWith("# ")) {
          return (
            <h1 key={bIdx} className="text-3xl font-extrabold text-foreground tracking-tight pt-4">
              {formatInlineText(trimmed.slice(2))}
            </h1>
          );
        }

        // Blockquotes
        if (trimmed.startsWith("> ")) {
          const quoteLines = trimmed
            .split("\n")
            .map((l) => (l.startsWith("> ") ? l.slice(2) : l.startsWith(">") ? l.slice(1) : l))
            .join(" ");
          return (
            <blockquote
              key={bIdx}
              className="border-l-4 border-primary/50 bg-primary/5 py-2.5 px-4 rounded-r-xl italic text-foreground/90 my-3"
            >
              {formatInlineText(quoteLines)}
            </blockquote>
          );
        }

        // Bullet lists
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.startsWith("- ") || line.startsWith("* "))
            .map((line) => line.slice(2));

          return (
            <ul key={bIdx} className="list-disc list-outside pl-5 space-y-1.5 my-2">
              {items.map((it, idx) => (
                <li key={idx}>{formatInlineText(it)}</li>
              ))}
            </ul>
          );
        }

        // Numbered lists
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => /^\d+\.\s/.test(line))
            .map((line) => line.replace(/^\d+\.\s+/, ""));

          return (
            <ol key={bIdx} className="list-decimal list-outside pl-5 space-y-1.5 my-2">
              {items.map((it, idx) => (
                <li key={idx}>{formatInlineText(it)}</li>
              ))}
            </ol>
          );
        }

        // Standard paragraph with linebreaks
        const lines = trimmed.split("\n");
        return (
          <p key={bIdx}>
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {formatInlineText(line)}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Parses bold (**bold**), italic (*italic* or _italic_), and safe links ([text](url))
 */
function formatInlineText(text: string): React.ReactNode[] {
  // Strip any dangerous HTML tags
  const sanitized = text.replace(/<[^>]*>?/gm, "");

  // Match markdown links [text](url), bold **text**, italics *text*
  const pattern = /(\[.*?\]\(https?:\/\/[^\s)]+\)|\*\*.*?\*\*|\*.*?\*)/g;
  const parts = sanitized.split(pattern);

  return parts.map((part, index) => {
    if (!part) return null;

    // Link [label](url)
    const linkMatch = part.match(/^\[(.*?)\]\((https?:\/\/[^\s)]+)\)$/);
    if (linkMatch) {
      const label = linkMatch[1];
      const href = linkMatch[2];
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold underline underline-offset-2 hover:text-primary-deep transition-colors"
        >
          {label}
        </a>
      );
    }

    // Bold **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={index} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
    }

    // Italic *text*
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={index} className="italic">{part.slice(1, -1)}</em>;
    }

    return part;
  }).filter(Boolean);
}

export function isValidHttpUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}
