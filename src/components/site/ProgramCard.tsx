import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Users,
  Sprout,
} from "lucide-react";
import type { ProgramContent } from "@/content/programs";

const iconMap = {
  outreach: HeartHandshake,
  education: GraduationCap,
  healthcare: Stethoscope,
  youth: Users,
  community: Sprout,
};

export interface ProgramCardProps {
  program: ProgramContent;
  index?: number;
}

export function ProgramCard({ program, index }: ProgramCardProps) {
  const Icon = iconMap[program.slug as keyof typeof iconMap] || HeartHandshake;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <div>
        <div className="flex items-center justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          {typeof index === "number" && (
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              0{index + 1}
            </span>
          )}
        </div>

        <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {program.title}
        </h3>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground line-clamp-3">
          {program.summary}
        </p>

        {program.stats.length > 0 && (
          <div className="mt-6 border-t border-border pt-4">
            <p className="text-lg font-bold text-foreground">
              {program.stats[0].value}{" "}
              <span className="text-xs font-normal uppercase tracking-wider text-muted-foreground">
                {program.stats[0].label}
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-border/60">
        <Link
          to="/programs/$slug"
          params={{ slug: program.slug }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:translate-x-1"
        >
          View Program Details
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
