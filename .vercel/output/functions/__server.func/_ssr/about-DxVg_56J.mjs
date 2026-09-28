import { c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as Route$b, S as SiteLayout, B as Button } from "./router-BzaOfFLl.mjs";
import { P as PageHero } from "./PageHero-BeaMsYMN.mjs";
import { C as CtaBand } from "./CtaBand-Du6cmEKm.mjs";
import { f as founderPhoto, s as siteConfig } from "./about-founder-CCLG_U39.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { Q as Quote, q as Shield, H as Heart, r as Award, s as Sparkles, t as Calendar, g as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "./server-D7pJ5bR7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tailwind-merge.mjs";
import "./Breadcrumbs-BjhXAP-V.mjs";
function AboutPage() {
  const {
    team,
    siteData
  } = Route$b.useLoaderData();
  const milestones = [{
    year: "2021",
    title: "Foundation Establishment in Abakaliki",
    desc: "Alh Nasir Ernest Nwagwu Nwaze (PhD) established the foundation secretariat at Hilltop Road to organize structured support for underserved rural hamlets."
  }, {
    year: "2022",
    title: "First Educational Sponsorship Cohort",
    desc: "Launched our classroom retention program across 8 public primary schools in Afikpo and Ishielu, keeping 180 vulnerable pupils enrolled."
  }, {
    year: "2023",
    title: "Mobile Health Clinic Deployments",
    desc: "Formed alliances with volunteer physicians and nurses to conduct quarterly free rural clinics providing malaria diagnosis and blood pressure management."
  }, {
    year: "2024",
    title: "Solar Water Points & Peace Dialogues",
    desc: "Rehabilitated community water systems in Ishielu and mediated bilateral farmland border discussions between traditional councils."
  }, {
    year: "2025",
    title: "Youth Enterprise Starter Grants",
    desc: "Graduated our first vocational trade cohorts in tailoring and technical trades, awarding 85 startup toolkits and seed grants."
  }, {
    year: "2026",
    title: "10,000+ Direct Beneficiaries Milestone",
    desc: "Surpassed 10,000 verified individuals served across healthcare, education, outreach relief, and sustainable water installations."
  }];
  const operatingLocations = [{
    lga: "Abakaliki LGA",
    focus: "State Secretariat, Vocational Academies, and Urban Relief Desks"
  }, {
    lga: "Ishielu LGA",
    focus: "Solar Boreholes, Farmland Peace Dialogues, and Seasonal Food Outreach"
  }, {
    lga: "Afikpo North & South LGAs",
    focus: "Primary School Scholarships, WAEC Sponsorships, and Youth Apprenticeships"
  }, {
    lga: "Ezza South LGA",
    focus: "Mobile Health Clinics, Hypertension Screenings, and Senior Care"
  }, {
    lga: "Ohaukwu LGA",
    focus: "Displaced Household Relief, Clean Water Storage, and Sanitation Kits"
  }, {
    lga: "Izzi & Ikwo LGAs",
    focus: "Rural Reading Clubs, Agrarian Community Consultations, and Malaria Control"
  }];
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { siteData: siteData?.site, announcement: siteData?.announcement, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHero, { breadcrumbs: [{
      label: "About Us"
    }], eyebrow: "Our Mission & Origins", title: "Building Peaceful Communities and Sustainable Livelihoods", description: "Envo Peace and Development Foundation was created to deliver tangible, transparent relief, healthcare, and educational opportunities across Ebonyi State.", actions: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "hero", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/programs", children: "Explore Programs" }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 64,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", className: "border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/contact", children: "Contact Leadership" }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 67,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 62,
      columnNumber: 284
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid items-center gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative overflow-hidden rounded-2xl border border-border shadow-elegant", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: founderPhoto, alt: "Founder Alh Nasir Ernest Nwagwu Nwaze (PhD) conferring with community elders", width: 1200, height: 1400, loading: "lazy", className: "aspect-[4/5] w-full object-cover" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-6 bg-card border-t border-border", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Quote, { className: "h-6 w-6 text-primary mb-2", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 79,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-semibold italic text-foreground", children: "“Sustainable community peace requires clean water, healthy mothers, educated children, and young people who have the means to build honest livelihoods.”" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 80,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Alh Nasir Ernest Nwagwu Nwaze (PhD), Founder & Chairman" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 84,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 78,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 76,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Our Foundation Story" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 92,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Founded on Practical Action in Abakaliki" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground", children: "In 2021, Alh Nasir Ernest Nwagwu Nwaze (PhD) convened community leaders, teachers, and healthcare workers in Abakaliki to address a recurring dilemma: while humanitarian donations frequently arrived in Ebonyi urban centers, deeper agrarian hamlets remained underserved during critical moments." }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 99,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground", children: "Envo Peace and Development Foundation was created as an institutional answer. We operate with a permanent local presence on Hilltop Road, maintaining continuous contact with ward heads, parent-teacher associations, and primary health workers." }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 106,
          columnNumber: 15
        }, this),
        siteConfig.cacRegistrationNumber,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Our Core Mission" }, void 0, false, {
              fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
              lineNumber: 120,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "To restore human dignity and foster peaceful coexistence through verifiable educational sponsorships, mobile medical assistance, clean water infrastructure, and youth vocational skills." }, void 0, false, {
              fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
              lineNumber: 121,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 119,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Our Long-term Vision" }, void 0, false, {
              fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
              lineNumber: 129,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "Resilient, self-sustaining Nigerian communities where no child drops out of school due to terminal levies and every farming village enjoys access to clean drinking water and primary medical care." }, void 0, false, {
              fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
              lineNumber: 130,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 118,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Core Values" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Principles That Govern Every Initiative" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground", children: "How our coordinators, volunteers, and partners operate across every ward and project." }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 152,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 145,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Shield, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 160,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 159,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-5 text-lg font-bold text-foreground", children: "Integrity & Verification" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "Aid is delivered directly to verified recipients, with transparent disbursement records and local council attestations." }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 163,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 158,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 171,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 170,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-5 text-lg font-bold text-foreground", children: "Dignity in Giving" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "We treat every elder, mother, and child as equal partners in development, listening carefully before executing any project." }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 169,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Award, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 182,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-5 text-lg font-bold text-foreground", children: "Local Ownership" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "Water kiosks and peace pacts are managed by elected community committees, ensuring projects continue long into the future." }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 185,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 193,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-5 text-lg font-bold text-foreground", children: "Neutral Facilitation" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 195,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "We operate as an impartial bridge builder in communal disputes, maintaining trust across ethnic, political, and religious backgrounds." }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 196,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 191,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 157,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 144,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Governance & Staff" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 209,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Our Leadership Team" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 212,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground", children: "Meet the directors, medical officers, and field coordinators guiding foundation activities." }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 215,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 208,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: team.map((member) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col justify-between", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4", children: [
          member.photo ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: member.photo, alt: member.name, width: 200, height: 200, loading: "lazy", className: "h-16 w-16 rounded-full object-cover border-2 border-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 225,
            columnNumber: 37
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary-deep text-lg font-bold border-2 border-primary/20", "aria-label": `Initials: ${member.initials}`, children: member.initials }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 225,
            columnNumber: 196
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-lg font-bold text-foreground leading-snug", children: member.name }, void 0, false, {
              fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
              lineNumber: 229,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary mt-0.5", children: member.role }, void 0, false, {
              fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
              lineNumber: 232,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground", children: member.department }, void 0, false, {
              fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
              lineNumber: 235,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 228,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 224,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-sm leading-relaxed text-muted-foreground", children: member.bio }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 239,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 223,
        columnNumber: 17
      }, this) }, member.id, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 222,
        columnNumber: 33
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 221,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 207,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-secondary/30 border-y border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Progress Over Time" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 250,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Our Journey of Service" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground", children: "Key milestones since our founding in Abakaliki, Ebonyi State." }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 256,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 249,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative border-l-2 border-primary/30 pl-6 sm:pl-8 ml-4 sm:ml-12 space-y-12 max-w-3xl mx-auto", children: milestones.map((m) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute -left-[35px] sm:-left-[43px] top-1 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 264,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 263,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary-deep uppercase tracking-wider", children: m.year }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 267,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-2 text-xl font-bold text-foreground", children: m.title }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 270,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground", children: m.desc }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 271,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 266,
          columnNumber: 17
        }, this)
      ] }, m.year, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 262,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 261,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 248,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Geographic Focus" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 284,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Communities We Serve Across Ebonyi State" }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 287,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground", children: "Our coordinators and volunteers maintain active project clusters in six principal local government areas." }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 290,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 283,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: operatingLocations.map((loc) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2.5 text-primary font-bold", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-5 w-5 shrink-0", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 299,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-lg text-foreground", children: loc.lga }, void 0, false, {
            fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
            lineNumber: 300,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 298,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: loc.focus }, void 0, false, {
          fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
          lineNumber: 302,
          columnNumber: 17
        }, this)
      ] }, loc.lga, true, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 297,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
        lineNumber: 296,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 282,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 281,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CtaBand, {}, void 0, false, {
      fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
      lineNumber: 308,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/about.tsx?tsr-split=component",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
export {
  AboutPage as component
};
