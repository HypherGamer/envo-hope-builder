import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Q as Quote, e as MapPin, i as CircleCheck } from "../_libs/lucide-react.mjs";
function StoryCard({ story, featured = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: `relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft transition-all duration-300 hover:shadow-elegant ${featured ? "lg:col-span-2 border-primary/30 bg-primary-soft/30" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-primary/60", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
              story.location
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground", children: story.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-base italic text-foreground/90 leading-relaxed border-l-2 border-primary/40 pl-4 py-1", children: [
            '"',
            story.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: story.summary }),
          story.outcomes && story.outcomes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 border-t border-border pt-4", children: story.outcomes.map((outcome) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-0.5", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: outcome })
          ] }, outcome)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-border/80 pt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: story.beneficiary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: story.program })
        ] })
      ]
    }
  );
}
const impactContent = {
  metrics: [
    {
      value: "10,000+",
      label: "Total Lives Touched",
      subtext: "Across verified community programs and relief campaigns in Ebonyi State.",
      asOf: "June 2026"
    },
    {
      value: "5,200",
      label: "Households Supported",
      subtext: "Delivered direct household nutritional and hygiene relief in rural settlements.",
      asOf: "April 2026",
      dummy: true
    },
    {
      value: "3,850",
      label: "Free Medical Consultations",
      subtext: "Treated through volunteer medical officers and mobile pharmacy teams.",
      asOf: "May 2026",
      dummy: true
    },
    {
      value: "640",
      label: "Children Retained in School",
      subtext: "Tuition levies, textbooks, and uniforms provided in public primary and secondary schools.",
      asOf: "January 2026",
      dummy: true
    },
    {
      value: "410",
      label: "Youth Artisan Graduates",
      subtext: "Completed certified trade courses, with 85 receiving starter toolkits and grants.",
      asOf: "March 2026",
      dummy: true
    },
    {
      value: "14",
      label: "Clean Water Points Restored",
      subtext: "Solar borehole systems serving over 18,000 rural residents daily.",
      asOf: "February 2026",
      dummy: true
    }
  ],
  stories: [
    {
      id: "story-1",
      title: "Preserving Family Livelihood Through Farming Relief in Ishielu",
      beneficiary: "Mama Ngozi",
      location: "Ezzangbo, Ishielu LGA",
      program: "Outreach Programs",
      programSlug: "outreach",
      summary: "After unseasonable river flooding wiped out her compound's seed yams, grandmother Ngozi was unable to feed six dependents until foundation volunteers brought monthly grain rations and dry bedding.",
      quote: "When the heavy rains flooded our yam barn last season, we had no reserves left. The delivery of food supplies and blankets gave my grandchildren nourishment while we replanted our plots.",
      outcomes: [
        "Four months of guaranteed staple food rations",
        "Clean water storage drums and purification tablets",
        "Replacement blankets and sleeping mats for six family members"
      ],
      asOf: "April 2026",
      dummy: true
    },
    {
      id: "story-2",
      title: "Overcoming Financial Hardship to Excel in School",
      beneficiary: "Chidiebere (Age 14)",
      location: "Afikpo North LGA",
      program: "Educational Support",
      programSlug: "education",
      summary: "Chidiebere faced suspension from junior secondary classes following the loss of his family's breadwinner. An educational sponsorship covered his school levies and textbooks.",
      quote: "My mother could not pay my junior secondary exam fees after my father passed away. Envo Peace covered my levies and bought my science books. Today I am preparing for my senior secondary entrance.",
      outcomes: [
        "Full coverage of tuition, PTA levies, and terminal registration",
        "Provision of complete textbook set, uniform, and school shoes",
        "Weekly participation in community reading clubs"
      ],
      asOf: "January 2026",
      dummy: true
    },
    {
      id: "story-3",
      title: "Timely Clinical Intervention for Severe Hypertension in Onueke",
      beneficiary: "Elder Innocent",
      location: "Onueke, Ezza South LGA",
      program: "Healthcare Assistance",
      programSlug: "healthcare",
      summary: "Elder Innocent suffered chronic fatigue and dizziness while working his cassava farms. A free diagnostic visit at our mobile health clinic identified dangerous blood pressure levels.",
      quote: "I had severe headaches for three months and assumed it was fatigue from farm work. The doctors at the Envo Peace outreach discovered my blood pressure was dangerously elevated, provided free medication, and explained diet changes that saved my life.",
      outcomes: [
        "Free consultation with a licensed medical doctor",
        "60-day supply of prescribed blood-pressure regulation medications",
        "Enrolled in monthly community blood-pressure monitoring clinic"
      ],
      asOf: "May 2026",
      dummy: true
    },
    {
      id: "story-4",
      title: "From Unemployment to Independent Workshop Owner",
      beneficiary: "Blessing",
      location: "Kpirikpiri, Abakaliki LGA",
      program: "Youth Empowerment",
      programSlug: "youth",
      summary: "Struggling to secure regular employment after secondary school, Blessing enrolled in our four-month garment design vocational academy, receiving an industrial sewing machine upon graduation.",
      quote: "Before the Envo Peace program, I was struggling to find casual work. The four-month garment design training and the industrial sewing machine I received upon graduation allowed me to launch my own business. Now I employ two apprentices.",
      outcomes: [
        "Certified vocational training in advanced garment construction",
        "Received an industrial sewing machine and starting fabric kit",
        "Currently mentors and employs two younger community apprentices"
      ],
      asOf: "March 2026",
      dummy: true
    },
    {
      id: "story-5",
      title: "Ending the Dawn Water Trek in Ntezi",
      beneficiary: "Chief Ogbonna",
      location: "Ntezi, Ishielu LGA",
      program: "Community Development",
      programSlug: "community",
      summary: "For generations, women and school children in Ntezi walked two hours each morning to collect turbid stream water. A solar borehole installed in the village center brought clean drinking water.",
      quote: "For years, our women and children had to walk two hours every dawn to fetch murky stream water. Since Envo Peace installed the solar water borehole in our village square, waterborne fever has dropped dramatically and our children arrive at school on time.",
      outcomes: [
        "Clean, continuous solar-powered water delivery for over 1,400 residents",
        "Formation of a local 5-person water committee trained in pump care",
        "Significant drop in reported cases of waterborne childhood illness"
      ],
      asOf: "February 2026",
      dummy: true
    }
  ],
  // Empty reports array per Step 4 instructions: "a reports section (hidden if empty)"
  reports: []
};
export {
  StoryCard as S,
  impactContent as i
};
