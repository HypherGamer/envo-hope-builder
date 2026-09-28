import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { programsContent } from "@/content/programs";
import { AuthDialog } from "./AuthDialog";
import { useDonationDialog } from "@/lib/donation-context";

interface FooterProps {
  siteData?: {
    address?: string;
    phone?: string;
    phoneClean?: string;
    email?: string;
    officeHours?: string;
    socials?: {
      facebook?: string;
      x?: string;
      instagram?: string;
      linkedin?: string;
      youtube?: string;
    };
  };
}

export function Footer({ siteData }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const clickTimestamps = useRef<number[]>([]);
  const { openDonationModal, donationSettings } = useDonationDialog();

  const handleCopyrightClick = () => {
    const now = Date.now();
    // Keep clicks within the last 3 seconds
    clickTimestamps.current = clickTimestamps.current.filter((t) => now - t <= 3000);
    clickTimestamps.current.push(now);

    if (clickTimestamps.current.length >= 5) {
      clickTimestamps.current = [];
      setAuthDialogOpen(true);
    }
  };

  const socials = siteData?.socials || siteConfig.socials;
  const address = siteData?.address || siteConfig.address;
  const phone = siteData?.phone || siteConfig.phone;
  const phoneClean = siteData?.phoneClean || siteConfig.phoneClean;
  const email = siteData?.email || siteConfig.email;
  const officeHours = siteData?.officeHours || siteConfig.officeHours;

  const socialItems = [
    { url: socials.facebook, Icon: Facebook, label: "Facebook" },
    { url: socials.x, Icon: Twitter, label: "X (Twitter)" },
    { url: socials.instagram, Icon: Instagram, label: "Instagram" },
    { url: socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: socials.youtube, Icon: Youtube, label: "YouTube" },
  ].filter((item): item is { url: string; Icon: typeof Facebook; label: string } =>
    Boolean(item.url && item.url.trim().length > 0),
  );

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Column 1: Organization Branding */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero shadow-soft">
                <Heart className="h-6 w-6 text-accent" strokeWidth={2} />
              </span>
              <div className="leading-tight">
                <p className="text-lg font-extrabold tracking-tight text-background">
                  {siteConfig.shortName}
                </p>
                <p className="text-xs uppercase tracking-wider text-background/60">
                  Development Foundation
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-background/75 max-w-sm">
              Rooted in Abakaliki, Ebonyi State. We partner with traditional leaders, rural schools,
              and community groups to advance peaceful coexistence and practical human development.
            </p>

            {/* Social Icons */}
            {socialItems.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2.5">
                {socialItems.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${label} page`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-background/5 text-background/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 sm:col-span-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent">Organization</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-background/75 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-background/75 transition-colors hover:text-accent"
                >
                  About Our Foundation
                </Link>
              </li>
              <li>
                <Link
                  to="/outreach"
                  className="text-background/75 transition-colors hover:text-accent"
                >
                  Community Outreach
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="text-background/75 transition-colors hover:text-accent"
                >
                  Impact & Verified Results
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-background/75 transition-colors hover:text-accent"
                >
                  Volunteer & Partner
                </Link>
              </li>
              <li>
                {donationSettings?.accountNumber ? (
                  <button
                    type="button"
                    onClick={openDonationModal}
                    className="text-background/75 transition-colors hover:text-accent text-left cursor-pointer"
                  >
                    Support Our Programs
                  </button>
                ) : (
                  <Link
                    to="/donate"
                    className="text-background/75 transition-colors hover:text-accent"
                  >
                    Support Our Programs
                  </Link>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/75 transition-colors hover:text-accent"
                >
                  Contact & Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Five Programs */}
          <div className="lg:col-span-2 sm:col-span-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent">Programs</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/programs"
                  className="text-background/75 font-semibold transition-colors hover:text-accent"
                >
                  All Programs
                </Link>
              </li>
              {programsContent.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="text-background/75 transition-colors hover:text-accent line-clamp-1"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent">Secretariat</h3>
            <address className="not-italic mt-4 space-y-3.5 text-sm text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {address}
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 ml-2 text-xs text-accent underline hover:text-accent/80"
                  >
                    Map <ArrowUpRight className="h-3 w-3" />
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`tel:${phoneClean}`}
                  className="transition-colors hover:text-accent"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-accent"
                >
                  {email}
                </a>
              </div>
            </address>

            <p className="mt-5 text-xs text-background/60">
              Office Hours: {officeHours}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Secret Trigger */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-8 text-xs text-background/65 sm:flex-row sm:items-center">
          <p
            onClick={handleCopyrightClick}
            className="cursor-default select-none transition-colors hover:text-background/85"
            title=""
          >
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy (NDPA 2023)
            </Link>
            <Link to="/terms" className="transition-colors hover:text-accent">
              Terms of Use
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              Feedback
            </Link>
          </div>
        </div>
      </div>

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </footer>
  );
}
