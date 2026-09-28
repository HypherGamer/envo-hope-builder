import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buildSeoMeta } from "@/lib/seo";
import { getPublicOutreachList, getPublicSiteData, type OutreachItem } from "@/lib/content.server";
import { Calendar, MapPin, Search, ArrowRight, Sparkles, Heart } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";

export const Route = createFileRoute("/outreach/")({
  head: () =>
    buildSeoMeta({
      path: "/outreach",
      title: "Community Outreach & Field Reports | Envo Peace Foundation",
      description:
        "Field updates, relief distributions, and community outreach missions conducted across rural settlements in Ebonyi State.",
    }),
  loader: async () => {
    const [outreachList, siteData] = await Promise.all([
      getPublicOutreachList(),
      getPublicSiteData(),
    ]);
    return { outreachList, siteData };
  },
  component: OutreachIndexPage,
});

function OutreachIndexPage() {
  const { outreachList, siteData } = Route.useLoaderData();
  const [search, setSearch] = useState("");
  const [selectedProgram, setSelectedProgram] = useState<string>("all");

  const programs = [
    { value: "all", label: "All Programs" },
    { value: "outreach", label: "Outreach & Relief" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "youth", label: "Youth Empowerment" },
    { value: "community", label: "Community Development" },
  ];

  const filteredItems = outreachList.filter((item: OutreachItem) => {
    const matchesSearch =
      search.trim().length === 0 ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase());

    const matchesProgram =
      selectedProgram === "all" || item.program === selectedProgram;

    return matchesSearch && matchesProgram;
  });

  return (
    <SiteLayout
      siteData={siteData?.site}
      announcement={siteData?.announcement}
    >
      <PageHero
        badge="Field Activities & Missions"
        title="Community Outreach & Field Reports"
        description="Direct field updates from our team documenting humanitarian visits, educational Retentions, medical camps, and community engagements throughout Ebonyi State."
        image={heroImg}
      />

      {/* Filter and Search Bar */}
      <section className="border-b border-border bg-card/60 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by community, LGA, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>

            {/* Program Filters */}
            <div className="flex flex-wrap gap-1.5">
              {programs.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setSelectedProgram(p.value)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    selectedProgram === p.value
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-secondary text-secondary-foreground hover:bg-primary-soft hover:text-primary"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Cards Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Field Records"
            title="Recent Outreach Missions"
            description="Explore reports and photographic logs of our direct interventions with local leaders and community beneficiaries."
          />

          {filteredItems.length > 0 ? (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item: OutreachItem) => {
                const coverImage = item.images && item.images.length > 0 ? item.images[0].url : heroImg;
                const coverAlt = item.images && item.images.length > 0 ? item.images[0].alt : item.title;

                return (
                  <article
                    key={item.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={coverImage}
                        alt={coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-primary-deep/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-accent shadow-sm uppercase tracking-wider">
                          {item.program}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="h-3.5 w-3.5 text-primary" /> {item.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-primary" /> {item.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        <Link to="/outreach/$slug" params={{ slug: item.slug }}>
                          {item.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {item.summary}
                      </p>

                      <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between">
                        <Button asChild variant="ghost" size="sm" className="p-0 text-primary font-bold hover:bg-transparent hover:text-primary-deep group/btn">
                          <Link to="/outreach/$slug" params={{ slug: item.slug }} className="inline-flex items-center gap-1.5">
                            Read Full Report <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-border bg-secondary/30 p-12 text-center max-w-xl mx-auto">
              <Sparkles className="mx-auto h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground">No outreach reports found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {search || selectedProgram !== "all"
                  ? "Try resetting your search query or selecting a different program category."
                  : "Field reports will appear here as new missions are published by our team."}
              </p>
              {(search || selectedProgram !== "all") && (
                <Button
                  onClick={() => {
                    setSearch("");
                    setSelectedProgram("all");
                  }}
                  variant="outline"
                  size="sm"
                  className="mt-5"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Support CTA Band */}
      <CtaBand
        badge="Partner with Us"
        title="Help Us Expand Field Reach Across Ebonyi State"
        description="Every donation or volunteer hour helps dispatch nutritional relief, medical personnel, and school kits to remote rural settlements."
        primaryAction={{ label: "Donate to Programs", href: "/donate", icon: Heart }}
        secondaryAction={{ label: "Volunteer with Us", href: "/get-involved" }}
      />
    </SiteLayout>
  );
}
