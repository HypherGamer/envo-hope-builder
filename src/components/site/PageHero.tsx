import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-gradient-hero pt-28 pb-16 md:pt-36 md:pb-24 text-primary-foreground",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} variant="dark" />
          </div>
        )}

        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-4xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            {description}
          </p>
        )}

        {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}

        {children}
      </div>
    </section>
  );
}
