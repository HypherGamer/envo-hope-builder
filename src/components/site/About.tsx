import { Quote } from "lucide-react";
import founderImg from "@/assets/about-founder.jpg";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-accent-soft" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-primary-soft" />
            <img
              src={founderImg}
              alt="Founder Alh Nasir Ernest Nwagwu Nwaze with community members"
              loading="lazy"
              width={1200}
              height={1400}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-card p-5 shadow-soft md:left-auto md:right-6 md:max-w-xs">
              <Quote className="h-6 w-6 text-accent" />
              <p className="mt-2 text-sm font-medium text-foreground">
                "Empower the underserved. Create opportunities. Restore hope."
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Alh Nasir Ernest Nwagwu Nwaze (PhD), Founder
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
              Purpose-driven. <span className="text-primary">People-first.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Envo Peace and Development Foundation is a purpose-driven
              Non-profit and Non-governmental organization committed to
              improving lives by striving to create peaceful environments and
              restoring hope in our communities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Founded by <strong className="text-foreground">Alh Nasir Ernest Nwagwu Nwaze (PhD)</strong>,
              our mission is to empower the underserved, and create sustainable
              opportunities for growth.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Mission", v: "Restore hope through tangible, sustainable action." },
                { k: "Vision", v: "Peaceful, thriving communities across Africa and beyond." },
              ].map((b) => (
                <div
                  key={b.k}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {b.k}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground">{b.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}