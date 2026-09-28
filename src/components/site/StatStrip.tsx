import { cn } from "@/lib/utils";

export interface StatItem {
  value: string;
  label: string;
  asOf?: string;
  subtext?: string;
}

export interface StatStripProps {
  stats: StatItem[];
  variant?: "light" | "dark" | "card";
  columns?: 3 | 4;
  className?: string;
}

export function StatStrip({ stats, variant = "light", columns = 3, className }: StatStripProps) {
  const colClass =
    columns === 4
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      : "grid grid-cols-1 sm:grid-cols-3 gap-6";

  return (
    <div className={cn("w-full", className)}>
      <dl className={colClass}>
        {stats.map((s) => (
          <div
            key={s.label}
            className={cn(
              "rounded-2xl p-6 transition-all duration-200",
              variant === "dark" &&
                "bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground",
              variant === "light" && "bg-card border border-border text-foreground shadow-soft",
              variant === "card" && "bg-secondary/70 border border-border/80 text-foreground",
            )}
          >
            <dt className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {s.value}
            </dt>
            <dd className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {s.label}
            </dd>
            {s.subtext && (
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground/90">{s.subtext}</dd>
            )}
            {s.asOf && (
              <dd className="mt-3 text-xs font-medium text-muted-foreground/75">
                Verified as of {s.asOf}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
