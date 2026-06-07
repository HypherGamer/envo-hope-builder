import {
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Users,
  Sprout,
  type LucideIcon,
} from "lucide-react";

type Program = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const programs: Program[] = [
  {
    icon: HeartHandshake,
    title: "Outreach Programs",
    desc: "Boots-on-the-ground initiatives that bring relief, dignity, and hope directly to underserved communities.",
  },
  {
    icon: GraduationCap,
    title: "Educational Support",
    desc: "Scholarships, learning materials, and mentorship that keep children and young adults in school.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Assistance",
    desc: "Free medical outreaches, essential medications, and access to care for vulnerable families.",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    desc: "Skills training, leadership development, and entrepreneurship pathways for African youth.",
  },
  {
    icon: Sprout,
    title: "Community Development",
    desc: "Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="scroll-mt-24 bg-secondary/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Core Pillars
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Five focus areas. <span className="text-primary">One mission.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Each program is designed to deliver lasting impact—not just
            short-term relief.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-soft opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                  Pillar 0{i + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}