import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/button";
import { buildSeoMeta } from "@/lib/seo";
import { getPublicOutreachBySlug, getPublicSiteData } from "@/lib/content.server";
import { renderSafeMarkdown } from "@/lib/sanitize";
import { Calendar, MapPin, Tag, ArrowLeft, Heart, Share2 } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";
import { toast } from "sonner";

export const Route = createFileRoute("/outreach/$slug")({
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    if (!item) {
      return buildSeoMeta({
        path: "/outreach",
        title: "Outreach Report | Envo Peace Foundation",
        description: "Field mission report from Envo Peace Foundation.",
      });
    }

    const cover = item.images && item.images.length > 0 ? item.images[0].url : undefined;

    return buildSeoMeta({
      path: `/outreach/${item.slug}`,
      title: `${item.title} | Envo Peace Outreach`,
      description: item.summary,
      type: "article",
      image: cover,
      imageAlt: item.images && item.images.length > 0 ? item.images[0].alt : item.title,
    });
  },
  loader: async ({ params }) => {
    const [item, siteData] = await Promise.all([
      getPublicOutreachBySlug({ data: { slug: params.slug } }),
      getPublicSiteData(),
    ]);

    if (!item) {
      throw notFound();
    }

    return { item, siteData };
  },
  component: OutreachDetailPage,
});

function OutreachDetailPage() {
  const { item, siteData } = Route.useLoaderData();

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.summary,
          url: window.location.href,
        });
      } catch {
        // user cancelled
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  const coverImage = item.images && item.images.length > 0 ? item.images[0].url : heroImg;
  const coverAlt = item.images && item.images.length > 0 ? item.images[0].alt : item.title;

  return (
    <SiteLayout
      siteData={siteData?.site}
      announcement={siteData?.announcement}
      navbarForceSolid
    >
      {/* Header Container */}
      <article className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Outreach", href: "/outreach" },
              { label: item.title },
            ]}
          />

          {/* Metadata Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider">
              {item.program} Program
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-primary" /> {item.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> {item.location}
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {item.title}
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal border-l-4 border-primary/40 pl-4 py-1">
            {item.summary}
          </p>

          {/* Action Bar */}
          <div className="mt-6 flex items-center justify-between border-y border-border py-3">
            <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
              <Link to="/outreach">
                <ArrowLeft className="h-4 w-4" /> Back to Outreach List
              </Link>
            </Button>
            <Button
              type="button"
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="gap-1.5 cursor-pointer"
            >
              <Share2 className="h-3.5 w-3.5" /> Share Report
            </Button>
          </div>

          {/* Hero Cover Image */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-elegant bg-muted aspect-[16/9]">
            <img
              src={coverImage}
              alt={coverAlt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Main Body Content */}
          <div className="mt-12 text-base md:text-lg leading-relaxed text-foreground/90">
            {renderSafeMarkdown(item.body)}
          </div>

          {/* Additional Photo Gallery */}
          {item.images && item.images.length > 1 && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Field Photo Gallery
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {item.images.slice(1).map((img, idx) => (
                  <figure
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img
                        src={img.url}
                        alt={img.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="p-3.5 text-xs text-muted-foreground italic border-t border-border/40">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Footer Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
            <Button asChild variant="outline">
              <Link to="/outreach">
                <ArrowLeft className="h-4 w-4" /> All Field Reports
              </Link>
            </Button>
            <Button asChild variant="default" className="gap-2">
              <Link to="/donate">
                <Heart className="h-4 w-4" /> Support Future Missions
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* CTA Band */}
      <CtaBand
        badge="Community Impact"
        title="Be Part of Our Next Community Intervention"
        description="Whether through financial support, emergency relief supplies, or professional medical volunteering, your contribution transforms lives."
        primaryAction={{ label: "Donate to Programs", href: "/donate", icon: Heart }}
        secondaryAction={{ label: "Join as Volunteer", href: "/get-involved" }}
      />
    </SiteLayout>
  );
}
