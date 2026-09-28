import { Quote, MapPin, CheckCircle2 } from "lucide-react";
import type { ImpactStory } from "@/content/impact";

export interface StoryCardProps {
  story: ImpactStory;
  featured?: boolean;
}

export function StoryCard({ story, featured = false }: StoryCardProps) {
  return (
    <article
      className={`relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft transition-all duration-300 hover:shadow-elegant ${
        featured ? "lg:col-span-2 border-primary/30 bg-primary-soft/30" : ""
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <Quote className="h-8 w-8 text-primary/60" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {story.location}
          </span>
        </div>

        <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          {story.title}
        </h3>

        <blockquote className="mt-4 text-base italic text-foreground/90 leading-relaxed border-l-2 border-primary/40 pl-4 py-1">
          "{story.quote}"
        </blockquote>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{story.summary}</p>

        {story.outcomes && story.outcomes.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-border pt-4">
            {story.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-xs text-foreground/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{story.beneficiary}</span>
        <span>{story.program}</span>
      </div>
    </article>
  );
}
