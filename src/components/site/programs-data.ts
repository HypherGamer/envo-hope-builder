import {
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Users,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export type Program = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  overview: string;
  highlights: { title: string; body: string }[];
  outcomes: string[];
};

export const programs: Program[] = [
  {
    slug: "outreach",
    icon: HeartHandshake,
    title: "Outreach Programs",
    tagline: "Meeting communities where they are.",
    desc: "Boots-on-the-ground initiatives that bring relief, dignity, and hope directly to underserved communities.",
    overview:
      "Our outreach teams travel into rural villages, displacement camps, and overlooked urban neighborhoods to deliver food, hygiene kits, clothing, and emotional support. Every visit begins with listening — so the help we deliver matches the need on the ground.",
    highlights: [
      { title: "Relief Distribution", body: "Food packs, hygiene kits, and clothing for vulnerable families." },
      { title: "Community Listening", body: "House-to-house visits to understand needs before we act." },
      { title: "Crisis Response", body: "Rapid mobilization to communities affected by displacement or disaster." },
    ],
    outcomes: [
      "Over 5,000 families served across South-East Nigeria",
      "Active in 25+ rural and peri-urban communities",
      "Quarterly relief campaigns powered by local volunteers",
    ],
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Educational Support",
    tagline: "Keeping every child in the classroom.",
    desc: "Scholarships, learning materials, and mentorship that keep children and young adults in school.",
    overview:
      "We believe education is the most reliable path out of poverty. Our education program covers school fees, uniforms, books, and exam registrations for children from low-income homes, paired with mentorship to keep them on track.",
    highlights: [
      { title: "Scholarships", body: "Sponsorships for primary, secondary, and tertiary students." },
      { title: "Learning Materials", body: "Books, uniforms, and stationery delivered each new term." },
      { title: "Mentorship Circles", body: "Volunteer mentors guiding students through academic and life decisions." },
    ],
    outcomes: [
      "Hundreds of children sponsored back into school",
      "Partnerships with local schools and PTAs",
      "After-school study clubs in rural communities",
    ],
  },
  {
    slug: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Assistance",
    tagline: "Healthcare as a right, not a privilege.",
    desc: "Free medical outreaches, essential medications, and access to care for vulnerable families.",
    overview:
      "Our medical outreaches partner with licensed doctors, nurses, and pharmacists to bring free consultations, screenings, and medicines to communities with limited access to clinics. We focus on maternal health, malaria prevention, and chronic disease screening.",
    highlights: [
      { title: "Free Medical Outreaches", body: "Consultations, screenings, and medication for under-served areas." },
      { title: "Maternal & Child Care", body: "Pre-natal support, vaccinations, and infant nutrition guidance." },
      { title: "Health Education", body: "Workshops on hygiene, nutrition, and preventive care." },
    ],
    outcomes: [
      "Thousands of free consultations delivered",
      "Essential medications dispensed at no cost",
      "Referral support for critical cases",
    ],
  },
  {
    slug: "youth",
    icon: Users,
    title: "Youth Empowerment",
    tagline: "Building the next generation of African leaders.",
    desc: "Skills training, leadership development, and entrepreneurship pathways for African youth.",
    overview:
      "We equip young people with the skills, mindset, and networks to thrive. From vocational training to leadership bootcamps and small-business grants, our youth programs turn ambition into livelihood.",
    highlights: [
      { title: "Vocational Training", body: "Tailoring, ICT, catering, and trade skills with certification." },
      { title: "Leadership Bootcamps", body: "Workshops on character, communication, and civic responsibility." },
      { title: "Startup Grants", body: "Seed funding and mentorship for youth-led micro-businesses." },
    ],
    outcomes: [
      "Young entrepreneurs launched with seed grants",
      "Annual leadership summit for emerging leaders",
      "Job-ready graduates from our skills programs",
    ],
  },
  {
    slug: "community",
    icon: Sprout,
    title: "Community Development",
    tagline: "Lifting whole communities, not just individuals.",
    desc: "Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.",
    overview:
      "We partner with community leaders to build the infrastructure and social fabric that lasting development requires — clean water, safe gathering spaces, peace dialogues, and grassroots organizing.",
    highlights: [
      { title: "Clean Water Projects", body: "Boreholes and water points for communities without safe water." },
      { title: "Peace Dialogues", body: "Mediation and reconciliation between communities in conflict." },
      { title: "Grassroots Organizing", body: "Training local committees to lead their own development." },
    ],
    outcomes: [
      "Water access restored in remote villages",
      "Peace committees established across multiple communities",
      "Long-term partnerships with local government",
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}