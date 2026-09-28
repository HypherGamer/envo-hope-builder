import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Quote,
  MapPin,
  Calendar,
  Heart,
  Shield,
  Award,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { buildSeoMeta } from "@/lib/seo";
import { getPublicTeamList, getPublicSiteData } from "@/lib/content.server";
import { siteConfig } from "@/content/site";
import founderPhoto from "@/assets/about-founder.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    buildSeoMeta({
      path: "/about",
      title: "About Our Foundation — Envo Peace & Development",
      description:
        "Learn about the mission, leadership, and community history of Envo Peace Foundation, founded by Alh Nasir Ernest Nwagwu Nwaze in Abakaliki, Nigeria.",
    }),
  loader: async () => {
    const [team, siteData] = await Promise.all([
      getPublicTeamList(),
      getPublicSiteData(),
    ]);
    return { team, siteData };
  },
  component: AboutPage,
});

function AboutPage() {
  const { team, siteData } = Route.useLoaderData();

  const milestones = [
    {
      year: "2021",
      title: "Foundation Establishment in Abakaliki",
      desc: "Alh Nasir Ernest Nwagwu Nwaze (PhD) established the foundation secretariat at Hilltop Road to organize structured support for underserved rural hamlets.",
    },
    {
      year: "2022",
      title: "First Educational Sponsorship Cohort",
      desc: "Launched our classroom retention program across 8 public primary schools in Afikpo and Ishielu, keeping 180 vulnerable pupils enrolled.",
    },
    {
      year: "2023",
      title: "Mobile Health Clinic Deployments",
      desc: "Formed alliances with volunteer physicians and nurses to conduct quarterly free rural clinics providing malaria diagnosis and blood pressure management.",
    },
    {
      year: "2024",
      title: "Solar Water Points & Peace Dialogues",
      desc: "Rehabilitated community water systems in Ishielu and mediated bilateral farmland border discussions between traditional councils.",
    },
    {
      year: "2025",
      title: "Youth Enterprise Starter Grants",
      desc: "Graduated our first vocational trade cohorts in tailoring and technical trades, awarding 85 startup toolkits and seed grants.",
    },
    {
      year: "2026",
      title: "10,000+ Direct Beneficiaries Milestone",
      desc: "Surpassed 10,000 verified individuals served across healthcare, education, outreach relief, and sustainable water installations.",
    },
  ];

  const operatingLocations = [
    {
      lga: "Abakaliki LGA",
      focus: "State Secretariat, Vocational Academies, and Urban Relief Desks",
    },
    {
      lga: "Ishielu LGA",
      focus: "Solar Boreholes, Farmland Peace Dialogues, and Seasonal Food Outreach",
    },
    {
      lga: "Afikpo North & South LGAs",
      focus: "Primary School Scholarships, WAEC Sponsorships, and Youth Apprenticeships",
    },
    {
      lga: "Ezza South LGA",
      focus: "Mobile Health Clinics, Hypertension Screenings, and Senior Care",
    },
    {
      lga: "Ohaukwu LGA",
      focus: "Displaced Household Relief, Clean Water Storage, and Sanitation Kits",
    },
    {
      lga: "Izzi & Ikwo LGAs",
      focus: "Rural Reading Clubs, Agrarian Community Consultations, and Malaria Control",
    },
  ];

  return (
    <SiteLayout
      siteData={siteData?.site}
      announcement={siteData?.announcement}
    >
      <PageHero
        breadcrumbs={[{ label: "About Us" }]}
        eyebrow="Our Mission & Origins"
        title="Building Peaceful Communities and Sustainable Livelihoods"
        description="Envo Peace and Development Foundation was created to deliver tangible, transparent relief, healthcare, and educational opportunities across Ebonyi State."
        actions={
          <>
            <Button asChild variant="hero">
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              <Link to="/contact">Contact Leadership</Link>
            </Button>
          </>
        }
      />

      {/* Our Story & Founder Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant">
                <img
                  src={founderPhoto}
                  alt="Founder Alh Nasir Ernest Nwagwu Nwaze (PhD) conferring with community elders"
                  width={1200}
                  height={1400}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="p-6 bg-card border-t border-border">
                  <Quote className="h-6 w-6 text-primary mb-2" aria-hidden="true" />
                  <p className="text-sm font-semibold italic text-foreground">
                    &ldquo;Sustainable community peace requires clean water, healthy mothers, educated
                    children, and young people who have the means to build honest livelihoods.&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Alh Nasir Ernest Nwagwu Nwaze (PhD), Founder & Chairman
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
                Our Foundation Story
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Founded on Practical Action in Abakaliki
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                In 2021, Alh Nasir Ernest Nwagwu Nwaze (PhD) convened community leaders, teachers,
                and healthcare workers in Abakaliki to address a recurring dilemma: while
                humanitarian donations frequently arrived in Ebonyi urban centers, deeper agrarian
                hamlets remained underserved during critical moments.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Envo Peace and Development Foundation was created as an institutional answer. We
                operate with a permanent local presence on Hilltop Road, maintaining continuous
                contact with ward heads, parent-teacher associations, and primary health workers.
              </p>

              {/* Only render CAC line if set in site.ts */}
              {siteConfig.cacRegistrationNumber && (
                <div className="mt-4 rounded-xl border border-border bg-secondary/50 p-4 text-sm font-medium text-foreground">
                  Registered Non-Governmental Organization: CAC/IT No.{" "}
                  {siteConfig.cacRegistrationNumber}
                </div>
              )}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-base font-bold text-foreground">Our Core Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    To restore human dignity and foster peaceful coexistence through verifiable
                    educational sponsorships, mobile medical assistance, clean water infrastructure,
                    and youth vocational skills.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-base font-bold text-foreground">Our Long-term Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Resilient, self-sustaining Nigerian communities where no child drops out of
                    school due to terminal levies and every farming village enjoys access to clean
                    drinking water and primary medical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Core Values
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Principles That Govern Every Initiative
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              How our coordinators, volunteers, and partners operate across every ward and project.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">Integrity & Verification</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Aid is delivered directly to verified recipients, with transparent disbursement
                records and local council attestations.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">Dignity in Giving</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We treat every elder, mother, and child as equal partners in development, listening
                carefully before executing any project.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Award className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">Local Ownership</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Water kiosks and peace pacts are managed by elected community committees, ensuring
                projects continue long into the future.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">Neutral Facilitation</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We operate as an impartial bridge builder in communal disputes, maintaining trust
                across ethnic, political, and religious backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Governance & Staff
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Meet the directors, medical officers, and field coordinators guiding foundation
              activities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="h-16 w-16 rounded-full object-cover border-2 border-primary"
                      />
                    ) : (
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary-deep text-lg font-bold border-2 border-primary/20"
                        aria-label={`Initials: ${member.initials}`}
                      >
                        {member.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-xs text-muted-foreground">{member.department}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-20 md:py-28 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Progress Over Time
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Our Journey of Service
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Key milestones since our founding in Abakaliki, Ebonyi State.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 ml-4 sm:ml-12 space-y-12 max-w-3xl mx-auto">
            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                <span className="absolute -left-[35px] sm:-left-[43px] top-1 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background">
                  <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                </span>
                <div>
                  <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary-deep uppercase tracking-wider">
                    {m.year}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Geographic Focus
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Communities We Serve Across Ebonyi State
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Our coordinators and volunteers maintain active project clusters in six principal
              local government areas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {operatingLocations.map((loc) => (
              <div
                key={loc.lga}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex items-center gap-2.5 text-primary font-bold">
                  <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <h3 className="text-lg text-foreground">{loc.lga}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{loc.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
