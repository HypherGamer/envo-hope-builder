import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { programs } from "./programs-data";

export function Programs() {
  return (
    <section
      id="programs"
      className="scroll-mt-24 bg-secondary/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Core Pillars
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Five focus areas. <span className="text-primary">One mission.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Each program is designed to deliver lasting impact—not just
            short-term relief.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc }, i) => (
            <Link
              key={title}
              to="/programs/$slug"
              params={{ slug: programs[i].slug }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-soft opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                    Pillar 0{i + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}