import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Download, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { StatStrip } from "@/components/site/StatStrip";
import { StoryCard } from "@/components/site/StoryCard";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { buildSeoMeta } from "@/lib/seo";
import { impactContent } from "@/content/impact";

export const Route = createFileRoute("/impact")({
  head: () =>
    buildSeoMeta({
      path: "/impact",
      title: "Verified Community Impact — Envo Peace Foundation",
      description:
        "Review verified field outcomes from Envo Peace Foundation across Ebonyi State: over 10,000 individuals served in healthcare, education, and relief.",
    }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <SiteLayout>
      <PageHero
        breadcrumbs={[{ label: "Impact" }]}
        eyebrow="Accountability & Evidence"
        title="Verified Results Across Ebonyi Rural Communities"
        description="Every project we execute is documented, verified with village councils, and monitored to ensure lasting social and economic value."
        actions={
          <Button asChild variant="hero">
            <Link to="/donate">
              <Heart className="h-4 w-4" /> Support Ongoing Impact
            </Link>
          </Button>
        }
      />

      {/* Headline Metric Strip */}
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Consolidated Field Data
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Headline Figures Across All Focus Areas
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Single-source verifiable metrics reported directly from field coordinators.
            </p>
          </div>
          <StatStrip stats={impactContent.metrics} columns={3} variant="card" />
        </div>
      </section>

      {/* Community Impact Stories Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Field Testimonials
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Stories of Transformed Lives
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Read personal experiences from farmers, school children, elders, and young
              entrepreneurs in Ebonyi State.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {impactContent.stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section (Hidden if empty array per instructions) */}
      {impactContent.reports && impactContent.reports.length > 0 && (
        <section className="py-20 md:py-28 bg-secondary/40 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
                Public Accountability Reports
              </h2>
              <p className="mt-3 text-muted-foreground">
                Download formal operational audits, community surveys, and financial disclosures.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {impactContent.reports.map((report) => (
                <div
                  key={report.id}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold text-sm text-foreground">{report.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {report.year} · PDF ({report.fileSize})
                      </p>
                    </div>
                  </div>
                  <a
                    href={report.downloadUrl}
                    className="p-2 rounded-lg bg-secondary text-primary hover:bg-primary-soft transition-colors"
                    aria-label={`Download ${report.title}`}
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </SiteLayout>
  );
}
