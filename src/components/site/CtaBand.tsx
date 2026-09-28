import { Link } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CtaBandProps {
  title?: string;
  description?: string;
  primaryActionText?: string;
  primaryActionTo?: string;
  secondaryActionText?: string;
  secondaryActionTo?: string;
}

export function CtaBand({
  title = "Partner with us to create sustainable change across Ebonyi communities",
  description = "Whether you are funding a rural scholarship, equipping a healthcare mission, or volunteering your time, your support directly touches lives.",
  primaryActionText = "Donate Now",
  primaryActionTo = "/donate",
  secondaryActionText = "Get Involved",
  secondaryActionTo = "/get-involved",
}: CtaBandProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 sm:p-12 md:p-16 text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Heart className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              Join Our Work
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to={primaryActionTo}>
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  {primaryActionText}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
                <Link to={secondaryActionTo}>
                  {secondaryActionText}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
