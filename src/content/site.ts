export interface SocialLinks {
  facebook?: string;
  x?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  phoneClean: string;
  email: string;
  officeHours: string;
  mapsUrl: string;
  foundingYear: number;
  founderName: string;
  founderTitle: string;
  socials: SocialLinks;
  siteUrl: string;
  // Optional registration & bank fields per owner instructions
  // Keep undefined until owner supplies verified official details
  bankName?: string;
  bankAccountNumber?: string;
  bankAccountName?: string;
  cacRegistrationNumber?: string;
  taxDeductible?: boolean;
}

export const siteConfig: SiteConfig = {
  name: "Envo Peace and Development Foundation",
  shortName: "Envo Peace",
  tagline: "Building peaceful communities and sustainable opportunities across Ebonyi State.",
  description:
    "A community-rooted NGO in Abakaliki, Ebonyi State advancing grassroots peace, rural education, accessible healthcare, and youth livelihoods.",
  address: "No. 1, Hilltop Rd, Abakaliki, Nigeria",
  city: "Abakaliki",
  state: "Ebonyi State",
  country: "Nigeria",
  phone: "+234 806 356 3604",
  phoneClean: "+2348063563604",
  email: "hello@envopeace.org",
  officeHours: "Monday to Friday: 8:30 AM – 5:00 PM WAT",
  mapsUrl: "https://maps.google.com/?q=No.+1+Hilltop+Rd+Abakaliki+Ebonyi+State+Nigeria",
  foundingYear: 2021,
  founderName: "Alh Nasir Ernest Nwagwu Nwaze (PhD)",
  founderTitle: "Founder & Chairman",
  socials: {
    facebook: "https://facebook.com/envopeace",
    x: "https://x.com/envopeace",
    instagram: "https://instagram.com/envopeace",
    linkedin: "https://linkedin.com/company/envopeace",
  },
  siteUrl:
    typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL
      ? import.meta.env.VITE_SITE_URL.replace(/\/$/, "")
      : "https://envopeace.vercel.app",
  // Deliberately unset per project instructions:
  bankName: undefined,
  bankAccountNumber: undefined,
  bankAccountName: undefined,
  cacRegistrationNumber: undefined,
  taxDeductible: false,
};
