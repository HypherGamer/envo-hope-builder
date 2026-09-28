import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { ProgramCard } from "@/components/site/ProgramCard";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { buildSeoMeta } from "@/lib/seo";
import { programsContent } from "@/content/programs";

export const Route = createFileRoute("/programs/")({
  head: () =>
    buildSeoMeta({
      path: "/programs",
      title: "Our Five Programs — Envo Peace & Development",
      description:
        "Explore Envo Peace Foundation's five core initiatives: rural outreach, school scholarships, mobile healthcare, youth vocational skills, and clean water development.",
    }),
  component: ProgramsIndexPage,
});

function ProgramsIndexPage() {
  const connectionSteps = [
    {
      num: "01",
      title: "Immediate Stabilization (Outreach & Healthcare)",
      desc: "Emergency relief packages and mobile clinic missions resolve acute nutritional and health crises in hard-to-reach hamlets.",
    },
    {
      num: "02",
      title: "Foundational Security (Education & Water)",
      desc: "Termly school scholarships and solar borehole installations ensure children stay in classrooms with clean drinking water at home.",
    },
    {
      num: "03",
      title: "Sustainable Independence (Youth & Peace)",
      desc: "Vocational apprenticeships, micro-enterprise toolkits, and inter-community peace dialogues empower communities to guide their own growth.",
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        breadcrumbs={[{ label: "Programs" }]}
        eyebrow="Core Framework"
        title="Five Interconnected Pillars for Lasting Community Uplift"
        description="We combine direct relief, basic education retention, mobile medical clinics, youth livelihoods, and clean water infrastructure across Ebonyi communities."
        actions={
          <Button asChild variant="hero">
            <Link to="/donate">Support Our Programs</Link>
          </Button>
        }
      />

      {/* How the programs connect */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Integrated Model
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              How Our Five Initiatives Connect
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We do not treat poverty as a single symptom. Our five focus areas reinforce one
              another to build resilient families.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {connectionSteps.map((step) => (
              <div
                key={step.num}
                className="relative rounded-2xl border border-border bg-card p-8 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-primary/40 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Full Program Directory
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Explore Individual Program Details
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Select any program below to view verified statistics, field activities, unit
              sponsorship costs, and application procedures.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programsContent.map((program, idx) => (
              <ProgramCard key={program.slug} program={program} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Communities Served Strip */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-soft">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Target Coverage
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">
                  Active Reach Across Ebonyi Local Government Councils
                </h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  Our mobile teams, scholarship monitors, and peace facilitators operate across
                  Abakaliki, Ezza South, Ishielu, Afikpo North & South, Ohaukwu, Izzi, and Ikwo
                  local government areas.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Button asChild variant="default" size="lg" className="w-full">
                  <Link to="/contact">Request Outreach for Your Ward</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link to="/impact">View Verified Impact Records</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
