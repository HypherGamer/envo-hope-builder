import { Heart, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone } from "lucide-react";

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
];

const sections = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Our Programs" },
  { href: "#donate", label: "Donate" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero">
                <Heart className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <p className="text-base font-bold">Envo Peace</p>
                <p className="text-[11px] uppercase tracking-wider text-background/60">
                  & Development Foundation
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              A purpose-driven NGO restoring hope, building peace, and creating
              sustainable opportunities in underserved communities.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {sections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-background/70 transition-colors hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                No. 1, Hilltop Rd, Abakaliki, Nigeria
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                +234 806 356 3604
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Envo Peace and Development Foundation. All rights reserved.</p>
          <p>Restoring hope, one community at a time.</p>
        </div>
      </div>
    </footer>
  );
}