import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { programsContent } from "@/content/programs";
import { siteConfig } from "@/content/site";
import { useDonationDialog } from "@/lib/donation-context";

export interface NavbarProps {
  forceSolid?: boolean;
}

export function Navbar({ forceSolid = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { openDonationModal, donationSettings } = useDonationDialog();

  // Pages that don't have a dark hero banner render solid by default to ensure optimal contrast
  const lightHeroPages = ["/privacy", "/terms", "/outreach"];
  const shouldBeSolid = forceSolid || lightHeroPages.some((p) => currentPath.startsWith(p)) || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/outreach", label: "Outreach" },
    { to: "/impact", label: "Impact" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/contact", label: "Contact" },
  ];

  const isProgramsActive = currentPath.startsWith("/programs");

  const handleDonateClick = (e: React.MouseEvent) => {
    if (donationSettings?.accountNumber) {
      e.preventDefault();
      openDonationModal();
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        shouldBeSolid
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-soft transition-transform group-hover:scale-105">
            <Heart className="h-5 w-5 text-accent" strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-base font-bold tracking-tight transition-colors",
                shouldBeSolid ? "text-foreground" : "text-primary-foreground",
              )}
            >
              {siteConfig.shortName}
            </span>
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-wider transition-colors",
                shouldBeSolid ? "text-muted-foreground" : "text-primary-foreground/75",
              )}
            >
              Foundation
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main Navigation">
          <Link
            to="/"
            activeProps={{ className: "bg-primary-soft text-primary-deep font-semibold" }}
            activeOptions={{ exact: true }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
              shouldBeSolid
                ? "text-foreground/80"
                : "text-primary-foreground/90 hover:text-primary-deep",
            )}
          >
            Home
          </Link>

          <Link
            to="/about"
            activeProps={{ className: "bg-primary-soft text-primary-deep font-semibold" }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
              shouldBeSolid
                ? "text-foreground/80"
                : "text-primary-foreground/90 hover:text-primary-deep",
            )}
          >
            About
          </Link>

          {/* Programs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer",
                isProgramsActive
                  ? "bg-primary-soft text-primary-deep font-semibold"
                  : shouldBeSolid
                    ? "text-foreground/80"
                    : "text-primary-foreground/90 hover:text-primary-deep",
              )}
            >
              Programs <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72 p-2 rounded-2xl shadow-elegant">
              <DropdownMenuItem asChild>
                <Link
                  to="/programs"
                  className="cursor-pointer font-bold text-foreground py-2.5 px-3 rounded-lg focus:bg-primary-soft focus:text-primary-deep"
                >
                  All Five Programs Overview
                </Link>
              </DropdownMenuItem>
              <div className="my-1 border-t border-border" />
              {programsContent.map((p) => (
                <DropdownMenuItem key={p.slug} asChild>
                  <Link
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="cursor-pointer py-2 px-3 rounded-lg text-sm text-foreground/90 hover:bg-primary-soft hover:text-primary-deep focus:bg-primary-soft focus:text-primary-deep"
                  >
                    <div>
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{p.tagline}</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/outreach"
            activeProps={{ className: "bg-primary-soft text-primary-deep font-semibold" }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
              shouldBeSolid
                ? "text-foreground/80"
                : "text-primary-foreground/90 hover:text-primary-deep",
            )}
          >
            Outreach
          </Link>

          <Link
            to="/impact"
            activeProps={{ className: "bg-primary-soft text-primary-deep font-semibold" }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
              shouldBeSolid
                ? "text-foreground/80"
                : "text-primary-foreground/90 hover:text-primary-deep",
            )}
          >
            Impact
          </Link>

          <Link
            to="/get-involved"
            activeProps={{ className: "bg-primary-soft text-primary-deep font-semibold" }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
              shouldBeSolid
                ? "text-foreground/80"
                : "text-primary-foreground/90 hover:text-primary-deep",
            )}
          >
            Get Involved
          </Link>

          <Link
            to="/contact"
            activeProps={{ className: "bg-primary-soft text-primary-deep font-semibold" }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
              shouldBeSolid
                ? "text-foreground/80"
                : "text-primary-foreground/90 hover:text-primary-deep",
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex cursor-pointer"
            onClick={handleDonateClick}
          >
            <Link to="/donate">
              <Heart className="h-4 w-4" /> Donate
            </Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-colors lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              shouldBeSolid
                ? "bg-background text-foreground hover:bg-secondary"
                : "bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/25",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-border bg-background shadow-elegant lg:hidden animate-in slide-in-from-top-2 duration-200">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-primary-soft text-primary-deep font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-xl px-4 py-3 text-base font-semibold text-foreground/90 hover:bg-secondary transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-border pt-3">
              <div className="px-4 pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Programs
              </div>
              <Link
                to="/programs"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft"
              >
                All Programs Overview
              </Link>
              {programsContent.map((p) => (
                <Link
                  key={p.slug}
                  to="/programs/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sm text-foreground/80 hover:bg-secondary"
                >
                  {p.title}
                </Link>
              ))}
            </div>

            <div className="mt-4 border-t border-border pt-4">
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full cursor-pointer"
                onClick={(e) => {
                  setOpen(false);
                  handleDonateClick(e);
                }}
              >
                <Link to="/donate">
                  <Heart className="h-4 w-4" /> Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
