import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Building2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StatStrip } from "@/components/site/StatStrip";
import { ProgramCard } from "@/components/site/ProgramCard";
import { StoryCard } from "@/components/site/StoryCard";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { buildSeoMeta, getOrganizationJsonLd } from "@/lib/seo";
import { programsContent } from "@/content/programs";
import { getPublicSiteData, getPublicStories, getPublicOutreachList } from "@/lib/content.server";
import { useDonationDialog } from "@/lib/donation-context";
import heroImg from "@/assets/hero-community.jpg";
import founderImg from "@/assets/about-founder.jpg";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildSeoMeta({
      path: "/",
      title: "Envo Peace & Development Foundation — Ebonyi State NGO",
      description:
        "Envo Peace Foundation advances grassroots community development, rural healthcare clinics, child education support, and youth livelihoods across Ebonyi State.",
    });

    const jsonLd = getOrganizationJsonLd();

    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ],
    };
  },
  loader: async () => {
    const [siteData, stories, outreach] = await Promise.all([
      getPublicSiteData(),
      getPublicStories(),
      getPublicOutreachList(),
    ]);
    return { siteData, stories, outreach };
  },
  component: HomePage,
});

function HomePage() {
  const { siteData, stories, outreach } = Route.useLoaderData();
  const { openDonationModal, donationSettings } = useDonationDialog();

  const featuredStory = stories && stories.length > 0 ? stories[0] : undefined;

  const defaultHeroHeadline =
    "Practical Community Support and Peace Advocacy in Ebonyi State";
  const defaultHeroSubline =
    "We partner with rural communities across Ebonyi State to improve healthcare access, keep children in school, deliver emergency relief, and equip youth with sustainable livelihoods.";

  const heroHeadline = siteData?.home?.heroHeadline?.trim() || defaultHeroHeadline;
  const heroSubline = siteData?.home?.heroSubline?.trim() || defaultHeroSubline;

  const proofStats =
    siteData?.home?.headlineStats && siteData.home.headlineStats.length > 0
      ? siteData.home.headlineStats.map((s) => ({
          value: s.value,
          label: s.label,
          subtext: "Verified through foundation field programs and community registries.",
          asOf: s.asOf,
        }))
      : [
          {
            value: "10,000+",
            label: "People Reached Directly",
            subtext: "Across verified community outreaches and local ward initiatives.",
            asOf: "June 2026",
          },
          {
            value: "5,200",
            label: "Households Supported",
            subtext: "Delivered food staples and water hygiene kits in farming settlements.",
            asOf: "April 2026",
          },
          {
            value: "14",
            label: "Water Points Restored",
            subtext: "Clean drinking water access points serving remote villages daily.",
            asOf: "February 2026",
          },
        ];

  const handleDonateClick = (e: React.MouseEvent) => {
    if (donationSettings?.accountNumber) {
      e.preventDefault();
      openDonationModal();
    }
  };

  return (
    <SiteLayout
      siteData={siteData?.site}
      announcement={siteData?.announcement}
    >
      {/* 1. Full-bleed Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-hero text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                Non-Governmental Organization · Abakaliki, Nigeria
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                {heroHeadline}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                {heroSubline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="cursor-pointer"
                  onClick={handleDonateClick}
                >
                  <Link to="/donate">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                >
                  <Link to="/programs">
                    See Our Work
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/20 shadow-elegant">
                <img
                  src={heroImg}
                  alt="Community members and volunteers gathering during a field outreach program in Ebonyi State"
                  width={1600}
                  height={1100}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof Strip */}
      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Verified Program Reach
            </p>
          </div>
          <StatStrip stats={proofStats} variant="card" />
        </div>
      </section>

      {/* 3. The Problem and Our Response */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant">
                <img
                  src={founderImg}
                  alt="Founder Alh Nasir Ernest Nwagwu Nwaze with community elders in Abakaliki"
                  width={1200}
                  height={1400}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">
                    Leadership on the Ground
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Alh Nasir Ernest Nwagwu Nwaze (PhD), Founder & Chairman
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
                Our Context & Commitment
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Addressing Root Challenges in Agrarian Settlements
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                In many agrarian settlements across Ebonyi State, families confront seasonal hunger
                gaps, long distances to public primary health clinics, and financial strain that
                pulls children out of primary schools. When regional disputes over farm borders
                arise, whole communities can face displacement.
              </p>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Envo Peace and Development Foundation was created by Alh Nasir Ernest Nwagwu Nwaze
                (PhD) to respond with practical, ongoing interventions. Rather than sporadic
                charity, we establish long-term relationships with village heads, headteachers, and
                local healthcare workers to ensure every project produces lasting community
                stability.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    <span>Direct Community Consultation</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Every distribution and medical clinic begins with meetings with village councils
                    to confirm exact local priorities.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    <span>Locally Sourced Aid</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Food rations and materials are purchased from Ebonyi farmers and merchants,
                    strengthening the domestic economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Five Program Image Tiles */}
      <section className="py-20 md:py-28 bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Core Pillars
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Our Five Operating Programs
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Explore how each program is organized to provide tangible support across Ebonyi State.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programsContent.map((program, idx) => (
              <ProgramCard key={program.slug} program={program} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recent Outreach Mission Spotlight */}
      {outreach && outreach.length > 0 && (
        <section className="py-20 md:py-24 bg-background border-b border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
                  Latest Field Updates
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Recent Community Outreaches
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link to="/outreach" className="inline-flex items-center gap-1.5">
                  View All Field Reports <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {outreach.slice(0, 3).map((item) => {
                const cover = item.images && item.images.length > 0 ? item.images[0].url : heroImg;
                return (
                  <article
                    key={item.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={cover}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span className="font-semibold text-primary uppercase text-[10px]">{item.program}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                        <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          <Link to="/outreach/$slug" params={{ slug: item.slug }}>
                            {item.title}
                          </Link>
                        </h3>
                        <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/60">
                        <Link
                          to="/outreach/$slug"
                          params={{ slug: item.slug }}
                          className="text-xs text-primary font-bold inline-flex items-center gap-1 hover:underline"
                        >
                          Read Report <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. Featured Story */}
      {featuredStory && (
        <section className="py-20 md:py-28 bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
                Community Voices
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Real Impact from the Field
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Verified accounts from families and individuals participating in our foundation
                initiatives.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <StoryCard story={featuredStory} featured />
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline">
                <Link to="/impact">
                  Read All Community Impact Stories
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* 7. Three Ways to Help */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
              Collaborate With Us
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Three Meaningful Ways to Participate
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Join hands with our team to strengthen rural education, healthcare, and peacebuilding.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-deep">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-foreground">Donate to Programs</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Fund classroom scholarship kits, primary medical clinic pharmaceuticals, or water
                  point rehabilitation in verified rural communities.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <Button
                  asChild
                  variant="hero"
                  className="w-full cursor-pointer"
                  onClick={handleDonateClick}
                >
                  <Link to="/donate">Donate Funds</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-deep">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-foreground">Volunteer in Ebonyi</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Volunteer doctors, nurses, teachers, and field organizers contribute their time
                  directly during scheduled outreach missions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/get-involved">Sign Up to Volunteer</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-deep">
                  <Building2 className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-foreground">Institutional Partner</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Partner with our foundation on CSR initiatives, clean water infrastructure,
                  vocational tool donations, or agricultural development.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/get-involved">Submit Partnership Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Credibility Row */}
      <section className="py-16 md:py-20 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4 p-4">
              <ShieldCheck className="h-8 w-8 text-primary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-foreground">Direct Accountability</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Financial tracking and direct disbursement to verified beneficiaries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <MapPin className="h-8 w-8 text-primary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-foreground">Ebonyi Rooted</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Permanent secretariat located on Hilltop Road, Abakaliki.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <Users className="h-8 w-8 text-primary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-foreground">Community Led</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Village councils and ward elders co-lead project management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h4 className="font-bold text-foreground">Licensed Professionals</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Volunteer medical doctors and educators certified by national boards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Closing Call-to-Action Band */}
      <CtaBand />
    </SiteLayout>
  );
}
