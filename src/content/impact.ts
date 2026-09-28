export interface ImpactMetric {
  value: string;
  label: string;
  subtext: string;
  asOf: string;
  dummy?: boolean;
}

export interface ImpactStory {
  id: string;
  title: string;
  beneficiary: string;
  location: string;
  program: string;
  programSlug: string;
  summary: string;
  quote: string;
  outcomes: string[];
  asOf: string;
  dummy?: boolean;
}

export interface ImpactReport {
  id: string;
  title: string;
  year: number;
  fileSize: string;
  downloadUrl: string;
  dummy?: boolean;
}

export interface ImpactContent {
  headlineReach: string;
  headlineAsOf: string;
  headlineSummary: string;
  metrics: ImpactMetric[];
  stories: ImpactStory[];
  reports: ImpactReport[];
}

export const impactContent: ImpactContent = {
  headlineReach: "10,000+",
  headlineAsOf: "June 2026",
  headlineSummary:
    "Direct community members reached across rural settlements, schools, medical camps, and vocational workshops throughout Ebonyi State.",
  metrics: [
    {
      value: "10,000+",
      label: "Total Lives Touched",
      subtext: "Across verified community programs and relief campaigns in Ebonyi State.",
      asOf: "June 2026",
    },
    {
      value: "5,200",
      label: "Households Supported",
      subtext: "Delivered direct household nutritional and hygiene relief in rural settlements.",
      asOf: "April 2026",
      dummy: true,
    },
    {
      value: "3,850",
      label: "Free Medical Consultations",
      subtext: "Treated through volunteer medical officers and mobile pharmacy teams.",
      asOf: "May 2026",
      dummy: true,
    },
    {
      value: "640",
      label: "Children Retained in School",
      subtext:
        "Tuition levies, textbooks, and uniforms provided in public primary and secondary schools.",
      asOf: "January 2026",
      dummy: true,
    },
    {
      value: "410",
      label: "Youth Artisan Graduates",
      subtext: "Completed certified trade courses, with 85 receiving starter toolkits and grants.",
      asOf: "March 2026",
      dummy: true,
    },
    {
      value: "14",
      label: "Clean Water Points Restored",
      subtext: "Solar borehole systems serving over 18,000 rural residents daily.",
      asOf: "February 2026",
      dummy: true,
    },
  ],
  stories: [
    {
      id: "story-1",
      title: "Preserving Family Livelihood Through Farming Relief in Ishielu",
      beneficiary: "Mama Ngozi",
      location: "Ezzangbo, Ishielu LGA",
      program: "Outreach Programs",
      programSlug: "outreach",
      summary:
        "After unseasonable river flooding wiped out her compound's seed yams, grandmother Ngozi was unable to feed six dependents until foundation volunteers brought monthly grain rations and dry bedding.",
      quote:
        "When the heavy rains flooded our yam barn last season, we had no reserves left. The delivery of food supplies and blankets gave my grandchildren nourishment while we replanted our plots.",
      outcomes: [
        "Four months of guaranteed staple food rations",
        "Clean water storage drums and purification tablets",
        "Replacement blankets and sleeping mats for six family members",
      ],
      asOf: "April 2026",
      dummy: true,
    },
    {
      id: "story-2",
      title: "Overcoming Financial Hardship to Excel in School",
      beneficiary: "Chidiebere (Age 14)",
      location: "Afikpo North LGA",
      program: "Educational Support",
      programSlug: "education",
      summary:
        "Chidiebere faced suspension from junior secondary classes following the loss of his family's breadwinner. An educational sponsorship covered his school levies and textbooks.",
      quote:
        "My mother could not pay my junior secondary exam fees after my father passed away. Envo Peace covered my levies and bought my science books. Today I am preparing for my senior secondary entrance.",
      outcomes: [
        "Full coverage of tuition, PTA levies, and terminal registration",
        "Provision of complete textbook set, uniform, and school shoes",
        "Weekly participation in community reading clubs",
      ],
      asOf: "January 2026",
      dummy: true,
    },
    {
      id: "story-3",
      title: "Timely Clinical Intervention for Severe Hypertension in Onueke",
      beneficiary: "Elder Innocent",
      location: "Onueke, Ezza South LGA",
      program: "Healthcare Assistance",
      programSlug: "healthcare",
      summary:
        "Elder Innocent suffered chronic fatigue and dizziness while working his cassava farms. A free diagnostic visit at our mobile health clinic identified dangerous blood pressure levels.",
      quote:
        "I had severe headaches for three months and assumed it was fatigue from farm work. The doctors at the Envo Peace outreach discovered my blood pressure was dangerously elevated, provided free medication, and explained diet changes that saved my life.",
      outcomes: [
        "Free consultation with a licensed medical doctor",
        "60-day supply of prescribed blood-pressure regulation medications",
        "Enrolled in monthly community blood-pressure monitoring clinic",
      ],
      asOf: "May 2026",
      dummy: true,
    },
    {
      id: "story-4",
      title: "From Unemployment to Independent Workshop Owner",
      beneficiary: "Blessing",
      location: "Kpirikpiri, Abakaliki LGA",
      program: "Youth Empowerment",
      programSlug: "youth",
      summary:
        "Struggling to secure regular employment after secondary school, Blessing enrolled in our four-month garment design vocational academy, receiving an industrial sewing machine upon graduation.",
      quote:
        "Before the Envo Peace program, I was struggling to find casual work. The four-month garment design training and the industrial sewing machine I received upon graduation allowed me to launch my own business. Now I employ two apprentices.",
      outcomes: [
        "Certified vocational training in advanced garment construction",
        "Received an industrial sewing machine and starting fabric kit",
        "Currently mentors and employs two younger community apprentices",
      ],
      asOf: "March 2026",
      dummy: true,
    },
    {
      id: "story-5",
      title: "Ending the Dawn Water Trek in Ntezi",
      beneficiary: "Chief Ogbonna",
      location: "Ntezi, Ishielu LGA",
      program: "Community Development",
      programSlug: "community",
      summary:
        "For generations, women and school children in Ntezi walked two hours each morning to collect turbid stream water. A solar borehole installed in the village center brought clean drinking water.",
      quote:
        "For years, our women and children had to walk two hours every dawn to fetch murky stream water. Since Envo Peace installed the solar water borehole in our village square, waterborne fever has dropped dramatically and our children arrive at school on time.",
      outcomes: [
        "Clean, continuous solar-powered water delivery for over 1,400 residents",
        "Formation of a local 5-person water committee trained in pump care",
        "Significant drop in reported cases of waterborne childhood illness",
      ],
      asOf: "February 2026",
      dummy: true,
    },
  ],
  // Empty reports array per Step 4 instructions: "a reports section (hidden if empty)"
  reports: [],
};
