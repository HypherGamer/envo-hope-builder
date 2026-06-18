import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { programs } from "./programs-data";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-elegant">
            <Heart className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-foreground md:text-base">Envo Peace</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
              & Development Foundation
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="/#home"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary-deep"
          >
            Home
          </a>
          <a
            href="/#about"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary-deep"
          >
            About Us
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary-deep focus:outline-none">
              Our Programs <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem asChild>
                <a href="/#programs" className="cursor-pointer font-medium">
                  All Programs
                </a>
              </DropdownMenuItem>
              {programs.map((p) => {
                const Icon = p.icon;
                return (
                  <DropdownMenuItem key={p.slug} asChild>
                    <Link
                      to="/programs/$slug"
                      params={{ slug: p.slug }}
                      className="cursor-pointer"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{p.title}</span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <a
            href="/#contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary-deep"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="/#donate">
              <Heart className="h-4 w-4" /> Support Our Cause
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-primary-soft hover:text-primary-deep"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Our Programs
            </div>
            <a
              href="/#programs"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-primary-soft hover:text-primary-deep"
            >
              All Programs
            </a>
            {programs.map((p) => (
              <Link
                key={p.slug}
                to="/programs/$slug"
                params={{ slug: p.slug }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-primary-soft hover:text-primary-deep"
              >
                {p.title}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2 sm:hidden">
              <a href="/#donate" onClick={() => setOpen(false)}>
                <Heart className="h-4 w-4" /> Support Our Cause
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}