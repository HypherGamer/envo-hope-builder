import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, Megaphone, ArrowRight } from "lucide-react";

export interface AnnouncementProps {
  announcement?: {
    enabled: boolean;
    text: string;
    linkLabel?: string;
    linkUrl?: string;
  };
}

export function AnnouncementBanner({ announcement }: AnnouncementProps) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in session
    if (typeof sessionStorage !== "undefined" && announcement?.text) {
      const isDismissed = sessionStorage.getItem(`announcement_${announcement.text.slice(0, 20)}`);
      if (isDismissed) setDismissed(true);
    }
  }, [announcement]);

  if (!announcement?.enabled || !announcement.text || dismissed) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(`announcement_${announcement.text.slice(0, 20)}`, "true");
    }
  };

  const isInternal = announcement.linkUrl?.startsWith("/");

  return (
    <div className="relative z-[60] bg-primary-deep text-primary-foreground px-4 py-2 text-xs md:text-sm font-medium shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            <Megaphone className="h-3 w-3" />
          </span>
          <span className="truncate">{announcement.text}</span>
          {announcement.linkLabel && announcement.linkUrl && (
            isInternal ? (
              <Link
                to={announcement.linkUrl}
                className="inline-flex items-center gap-0.5 text-accent font-bold hover:underline shrink-0 ml-2"
              >
                {announcement.linkLabel} <ArrowRight className="h-3 w-3" />
              </Link>
            ) : (
              <a
                href={announcement.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-accent font-bold hover:underline shrink-0 ml-2"
              >
                {announcement.linkLabel} <ArrowRight className="h-3 w-3" />
              </a>
            )
          )}
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="rounded p-1 text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
