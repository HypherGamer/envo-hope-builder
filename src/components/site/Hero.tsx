import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div
        className="absolute inset-0 -z-10 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Peace · Hope · Development
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Restoring Hope,<br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Building Peaceful Communities
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 md:text-xl">
            We don't just give—we uplift, inspire, and build pathways for a
            better future.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#programs">
                Explore Our Programs <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#contact">Get Involved</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8">
            {[
              { v: "5+", l: "Core Programs" },
              { v: "10k+", l: "Lives Touched" },
              { v: "100%", l: "Purpose Driven" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-3xl font-bold md:text-4xl">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="Joyful community members in a Nigerian village at sunset"
              width={1600}
              height={1100}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant ring-1 ring-primary-foreground/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}