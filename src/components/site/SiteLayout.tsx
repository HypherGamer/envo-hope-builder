import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { DonationDialog } from "./DonationDialog";
import { Toaster } from "@/components/ui/sonner";

export interface SiteLayoutProps {
  children: ReactNode;
  navbarForceSolid?: boolean;
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
  announcement?: {
    enabled: boolean;
    text: string;
    linkLabel?: string;
    linkUrl?: string;
  };
}

export function SiteLayout({
  children,
  navbarForceSolid = false,
  siteData,
  announcement,
}: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Accessible skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-elegant focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      {announcement?.enabled && <AnnouncementBanner announcement={announcement} />}

      <Navbar forceSolid={navbarForceSolid} />

      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>

      <Footer siteData={siteData} />

      <DonationDialog />

      <Toaster richColors position="top-center" closeButton />
    </div>
  );
}
