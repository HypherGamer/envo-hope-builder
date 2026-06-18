import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Heart } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { getProgram, programs } from "@/components/site/programs-data";

export const Route = createFileRoute("/programs/$slug")({
  head: ({ params }) => {
    const p = getProgram(params.slug);
    const title = p ? `${p.title} — Envo Peace and Development Foundation` : "Program — Envo Peace";
    const desc = p?.desc ?? "Explore our programs at Envo Peace and Development Foundation.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Program not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Back to home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="flex min-h-screen items-center justify-center">
      <Button onClick={reset}>Try again</Button>
    </div>
  ),
  component: ProgramPage,
});

function ProgramPage() {
  const { program } = Route.useLoaderData();
  const Icon = program.icon;
  const others = programs.filter((p) => p.slug !== program.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 -z-10 bg-gradient-hero" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
          <div className="mx-auto max-w-5xl px-4 md:px-8 text-primary-foreground">
            <Link
              to="/"
              hash="programs"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All Programs
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/15 backdrop-blur">
                <Icon className="h-8 w-8" />
              </span>
              <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                Our Programs
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              {program.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              {program.tagline}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {program.overview}
              </p>

              <h3 className="mt-12 text-xl font-bold text-foreground md:text-2xl">What we do</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                  >
                    <h4 className="font-semibold text-foreground">{h.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {h.body}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-12 text-xl font-bold text-foreground md:text-2xl">Impact so far</h3>
              <ul className="mt-4 space-y-3">
                {program.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-28 self-start">
              <div className="rounded-3xl border border-border bg-gradient-hero p-7 text-primary-foreground shadow-elegant">
                <h3 className="text-xl font-bold">Help fund this program</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Every contribution directly supports families and communities through {program.title.toLowerCase()}.
                </p>
                <Button asChild variant="secondary" className="mt-5 w-full">
                  <Link to="/" hash="donate">
                    <Heart className="h-4 w-4" /> Donate Now
                  </Link>
                </Button>
                <Button asChild variant="outline" className="mt-2 w-full bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link to="/" hash="contact">Get Involved</Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/50 py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Explore other programs</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => {
                const OIcon = p.icon;
                return (
                  <Link
                    key={p.slug}
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero">
                      <OIcon className="h-6 w-6 text-primary-foreground" />
                    </span>
                    <h3 className="mt-4 font-bold text-foreground group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}