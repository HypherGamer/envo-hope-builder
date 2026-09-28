import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function maskAccountNumber(num) {
  if (!num) return "None";
  const clean = num.replace(/\D/g, "");
  if (clean.length <= 4) return clean;
  return `••••${clean.slice(-4)}`;
}
const siteConfig = {
  name: "Envo Peace and Development Foundation",
  shortName: "Envo Peace",
  tagline: "Building peaceful communities and sustainable opportunities across Ebonyi State.",
  description: "A community-rooted NGO in Abakaliki, Ebonyi State advancing grassroots peace, rural education, accessible healthcare, and youth livelihoods.",
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
    linkedin: "https://linkedin.com/company/envopeace"
  },
  siteUrl: typeof import.meta !== "undefined" && "https://www.envopeacefoundation.org/" ? "https://www.envopeacefoundation.org/".replace(/\/$/, "") : "https://envopeace.vercel.app",
  // Deliberately unset per project instructions:
  bankName: void 0,
  bankAccountNumber: void 0,
  bankAccountName: void 0,
  cacRegistrationNumber: void 0,
  taxDeductible: false
};
const founderPhoto = "/assets/about-founder-DArf7V_m.jpg";
export {
  cn as c,
  founderPhoto as f,
  maskAccountNumber as m,
  siteConfig as s
};
