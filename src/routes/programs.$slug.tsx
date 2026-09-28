import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Heart,
  Quote,
  MapPin,
  HelpCircle,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { StatStrip } from "@/components/site/StatStrip";
import { FaqList } from "@/components/site/FaqList";
import { Button } from "@/components/ui/button";
import { buildSeoMeta } from "@/lib/seo";
import { getProgramBySlug, programsContent, type ProgramContent } from "@/content/programs";

export const Route = createFileRoute("/programs/$slug")({
  head: ({ params }) => {
    const program = getProgramBySlug(params.slug);
    if (!program) {
      return buildSeoMeta({
        path: `/programs/${params.slug}`,
        title: "Program Not Found — Envo Peace Foundation",
        description: "The requested program initiative could not be found.",
      });
    }

    return buildSeoMeta({
      path: `/programs/${program.slug}`,
      title: `${program.title} — Envo Peace Foundation`,
      description: program.summary.slice(0, 150),
    });
  },
  loader: ({ params }) => {
    const program = getProgramBySlug(params.slug);
    if (!program) {
      throw notFound();
    }
    return { program };
  },
  notFoundComponent: () => (
    <SiteLayout navbarForceSolid>
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Notice</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
            Program Not Found
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            The program slug you requested is not recognized. Please browse our program directory.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild variant="default">
              <Link to="/programs">
                <ArrowLeft className="h-4 w-4" /> View All Programs
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  ),
  component: ProgramDetailsPage,
});

function ProgramDetailsPage() {
  const { program } = Route.useLoaderData() as { program: ProgramContent };

  const relatedPrograms = programsContent
    .filter(
      (p) =>
        program.relatedSlugs?.includes(p.slug) ||
        (p.slug !== program.slug && program.relatedSlugs?.length === 0),
    )
    .slice(0, 3);

  return (
    <SiteLayout>
      <PageHero
        breadcrumbs={[{ label: "Programs", to: "/programs" }, { label: program.title }]}
        eyebrow="Program Overview"
        title={program.title}
        description={program.tagline}
        actions={
          <Button asChild variant="hero">
            <Link to="/donate">
              <Heart className="h-4 w-4" /> Support This Program
            </Link>
          </Button>
        }
      />

      {/* Stat Strip */}
      {program.stats && program.stats.length > 0 && (
        <section className="border-b border-border bg-card py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <StatStrip stats={program.stats} variant="card" />
          </div>
        </section>
      )}

      {/* Main Content Layout with Sticky Aside */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16">
              {/* 1. The Need (Problem) */}
              {program.problem && program.problem.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    The Challenge We Address
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    Understanding the Need on the Ground
                  </h2>
                  <div className="mt-5 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {program.problem.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. What We Do (Activities) */}
              {program.activities && program.activities.length > 0 && (
                <div className="border-t border-border pt-12">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    <Layers className="h-4 w-4" aria-hidden="true" />
                    Key Activities
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    What Our Teams Deliver
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {program.activities.map((act) => (
                      <div
                        key={act.title}
                        className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                      >
                        <h3 className="font-bold text-base text-foreground">{act.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {act.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. How It Works (Numbered Steps) */}
              {program.approach && program.approach.length > 0 && (
                <div className="border-t border-border pt-12">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Execution Strategy
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    How the Initiative Works
                  </h2>
                  <div className="mt-6 space-y-4">
                    {program.approach.map((step) => (
                      <div
                        key={step.step}
                        className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft items-start"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep font-bold text-base">
                          {step.step}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Who We Serve & How to Apply */}
              {(program.whoWeServe || program.howToApply) && (
                <div className="border-t border-border pt-12">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6">
                    Beneficiary Scope & Referrals
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {program.whoWeServe && (
                      <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                        <h3 className="text-base font-bold text-foreground">
                          Target Beneficiaries
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {program.whoWeServe}
                        </p>
                      </div>
                    )}

                    {program.howToApply && (
                      <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                        <h3 className="text-base font-bold text-foreground">
                          How to Nominate or Apply
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {program.howToApply}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 5. Gallery */}
              {program.gallery && program.gallery.length > 0 && (
                <div className="border-t border-border pt-12">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6">
                    Field Photographs
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {program.gallery.map((img, idx) => (
                      <figure
                        key={idx}
                        className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          width={800}
                          height={550}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover"
                        />
                        <figcaption className="p-4 text-xs text-muted-foreground leading-relaxed">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Story Block */}
              {program.stories && program.stories.length > 0 && (
                <div className="border-t border-border pt-12">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6">
                    Beneficiary Testimonial
                  </h2>
                  {program.stories.map((story) => (
                    <div
                      key={story.title}
                      className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {story.location}
                        </span>
                      </div>
                      <blockquote className="text-base sm:text-lg italic text-foreground leading-relaxed border-l-2 border-primary/40 pl-4 py-1">
                        "{story.quote}"
                      </blockquote>
                      <div className="mt-4 pt-4 border-t border-border text-sm flex flex-wrap items-center justify-between gap-2">
                        <span className="font-bold text-foreground">{story.author}</span>
                        <span className="text-xs text-muted-foreground">{story.outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 7. What Your Gift Does (Naira Unit Costs) */}
              {program.unitCosts && program.unitCosts.length > 0 && (
                <div className="border-t border-border pt-12">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    What Your Support Achieves
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Transparent cost breakdowns priced directly in Nigerian Naira (NGN).
                  </p>
                  <div className="mt-6 space-y-4">
                    {program.unitCosts.map((cost) => (
                      <div
                        key={cost.amount}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                      >
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Contribution Impact
                          </p>
                          <p className="mt-1 text-sm font-medium text-foreground">{cost.gives}</p>
                        </div>
                        <div className="shrink-0 text-right sm:text-left">
                          <span className="text-xl sm:text-2xl font-extrabold text-foreground">
                            ₦{cost.amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 8. FAQs (Accordion) */}
              {program.faqs && program.faqs.length > 0 && (
                <div className="border-t border-border pt-12">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    <HelpCircle className="h-4 w-4" aria-hidden="true" />
                    Frequently Asked Questions
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6">
                    Program Questions Answered
                  </h2>
                  <FaqList faqs={program.faqs} />
                </div>
              )}
            </div>

            {/* Right Sticky Aside: Donate / Referral Card */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-border bg-gradient-hero p-6 sm:p-8 text-primary-foreground shadow-elegant">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    <Heart className="h-3.5 w-3.5 text-accent" /> Support Initiative
                  </span>
                  <h3 className="mt-4 text-xl sm:text-2xl font-bold">Partner With This Program</h3>
                  <p className="mt-2 text-sm text-primary-foreground/85 leading-relaxed">
                    Contributions directly fund materials, field travel, health tests, and
                    scholarship disbursements across verified rural hamlets.
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <Button asChild variant="hero" size="lg" className="w-full">
                      <Link to="/donate">
                        <Heart className="h-4 w-4" /> Donate to Program
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    >
                      <Link to="/contact">Request Nomination</Link>
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    Have Questions?
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Contact our secretariat desk at No. 1 Hilltop Rd, Abakaliki or reach our
                    coordination team by phone.
                  </p>
                  <p className="mt-3 text-xs font-bold text-primary">+234 806 356 3604</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 9. Other Programs Links */}
      {relatedPrograms.length > 0 && (
        <section className="py-20 md:py-24 bg-secondary/50 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground text-center mb-12">
              Explore Our Other Program Pillars
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPrograms.map((p) => (
                <div
                  key={p.slug}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-3">
                      {p.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border">
                    <Link
                      to="/programs/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      Read Program Details
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
