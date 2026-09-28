import { c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$c, u as useDonationDialog, S as SiteLayout, B as Button, h as heroImg, p as programsContent } from "./router-BzaOfFLl.mjs";
import { S as StatStrip } from "./StatStrip-BUtWs_nB.mjs";
import { P as ProgramCard } from "./ProgramCard-CfoOfheI.mjs";
import { S as StoryCard } from "./StoryCard-DFpqxOhU.mjs";
import { C as CtaBand } from "./CtaBand-Du6cmEKm.mjs";
import { f as founderPhoto } from "./about-founder-CCLG_U39.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { H as Heart, c as ArrowRight, m as CircleCheck, U as Users, B as Building2, S as ShieldCheck, g as MapPin } from "../_libs/lucide-react.mjs";
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
function HomePage() {
  const {
    siteData,
    stories,
    outreach
  } = Route$c.useLoaderData();
  const {
    openDonationModal,
    donationSettings
  } = useDonationDialog();
  const featuredStory = stories && stories.length > 0 ? stories[0] : void 0;
  const defaultHeroHeadline = "Practical Community Support and Peace Advocacy in Ebonyi State";
  const defaultHeroSubline = "We partner with rural communities across Ebonyi State to improve healthcare access, keep children in school, deliver emergency relief, and equip youth with sustainable livelihoods.";
  const heroHeadline = siteData?.home?.heroHeadline?.trim() || defaultHeroHeadline;
  const heroSubline = siteData?.home?.heroSubline?.trim() || defaultHeroSubline;
  const proofStats = siteData?.home?.headlineStats && siteData.home.headlineStats.length > 0 ? siteData.home.headlineStats.map((s) => ({
    value: s.value,
    label: s.label,
    subtext: "Verified through foundation field programs and community registries.",
    asOf: s.asOf
  })) : [{
    value: "10,000+",
    label: "People Reached Directly",
    subtext: "Across verified community outreaches and local ward initiatives.",
    asOf: "June 2026"
  }, {
    value: "5,200",
    label: "Households Supported",
    subtext: "Delivered food staples and water hygiene kits in farming settlements.",
    asOf: "April 2026"
  }, {
    value: "14",
    label: "Water Points Restored",
    subtext: "Clean drinking water access points serving remote villages daily.",
    asOf: "February 2026"
  }];
  const handleDonateClick = (e) => {
    if (donationSettings?.accountNumber) {
      e.preventDefault();
      openDonationModal();
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { siteData: siteData?.site, announcement: siteData?.announcement, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "relative isolate overflow-hidden bg-gradient-hero text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid items-center gap-12 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm", children: "Non-Governmental Organization · Abakaliki, Nigeria" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]", children: heroHeadline }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 text-lg sm:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl", children: heroSubline }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", className: "cursor-pointer", onClick: handleDonateClick, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 78,
                columnNumber: 21
              }, this),
              "Donate Now"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 77,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 76,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", size: "lg", className: "border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/programs", children: [
              "See Our Work",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 85,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 83,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 82,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative overflow-hidden rounded-2xl border border-primary-foreground/20 shadow-elegant", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: heroImg, alt: "Community members and volunteers gathering during a field outreach program in Ebonyi State", width: 1600, height: 1100, fetchPriority: "high", className: "aspect-[4/3] w-full object-cover" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 93,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 92,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "border-b border-border bg-card py-12 md:py-16", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold uppercase tracking-wider text-primary", children: "Verified Program Reach" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 104,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StatStrip, { stats: proofStats, variant: "card" }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid items-center gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative overflow-hidden rounded-2xl border border-border shadow-elegant", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: founderPhoto, alt: "Founder Alh Nasir Ernest Nwagwu Nwaze with community elders in Abakaliki", width: 1200, height: 1400, loading: "lazy", className: "aspect-[4/5] w-full object-cover" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 118,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 text-white", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold uppercase tracking-wider text-accent", children: "Leadership on the Ground" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 120,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm font-medium", children: "Alh Nasir Ernest Nwagwu Nwaze (PhD), Founder & Chairman" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 123,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 119,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 117,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Our Context & Commitment" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Addressing Root Challenges in Agrarian Settlements" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground", children: "In many agrarian settlements across Ebonyi State, families confront seasonal hunger gaps, long distances to public primary health clinics, and financial strain that pulls children out of primary schools. When regional disputes over farm borders arise, whole communities can face displacement." }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 138,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground", children: "Envo Peace and Development Foundation was created by Alh Nasir Ernest Nwagwu Nwaze (PhD) to respond with practical, ongoing interventions. Rather than sporadic charity, we establish long-term relationships with village heads, headteachers, and local healthcare workers to ensure every project produces lasting community stability." }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-primary font-bold", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 156,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Direct Community Consultation" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 157,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 155,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "Every distribution and medical clinic begins with meetings with village councils to confirm exact local priorities." }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 159,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-primary font-bold", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 167,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Locally Sourced Aid" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 168,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 166,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "Food rations and materials are purchased from Ebonyi farmers and merchants, strengthening the domestic economy." }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 170,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 165,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 153,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 130,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 115,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-secondary/50 border-y border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Core Pillars" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Our Five Operating Programs" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Explore how each program is organized to provide tangible support across Ebonyi State." }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 191,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 184,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: programsContent.map((program, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ProgramCard, { program, index: idx }, program.slug, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 197,
        columnNumber: 52
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 196,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 183,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    outreach && outreach.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-24 bg-background border-b border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Latest Field Updates" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 207,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground", children: "Recent Community Outreaches" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 210,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 206,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/outreach", className: "inline-flex items-center gap-1.5", children: [
          "View All Field Reports ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 216,
            columnNumber: 42
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 215,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 214,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 205,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 md:grid-cols-3", children: outreach.slice(0, 3).map((item) => {
        const cover = item.images && item.images.length > 0 ? item.images[0].url : heroImg;
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "aspect-[16/10] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: cover, alt: item.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 226,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 225,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-5 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-primary uppercase text-[10px]", children: item.program }, void 0, false, {
                  fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                  lineNumber: 231,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "•" }, void 0, false, {
                  fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                  lineNumber: 232,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: item.date }, void 0, false, {
                  fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                  lineNumber: 233,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 230,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-bold text-base text-foreground group-hover:text-primary transition-colors line-clamp-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/outreach/$slug", params: {
                slug: item.slug
              }, children: item.title }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 236,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 235,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed", children: item.summary }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 242,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 229,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 pt-3 border-t border-border/60", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/outreach/$slug", params: {
              slug: item.slug
            }, className: "text-xs text-primary font-bold inline-flex items-center gap-1 hover:underline", children: [
              "Read Report ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-3 w-3" }, void 0, false, {
                fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
                lineNumber: 250,
                columnNumber: 39
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 247,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 246,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 228,
            columnNumber: 21
          }, this)
        ] }, item.id, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 224,
          columnNumber: 20
        }, this);
      }) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 221,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 204,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 203,
      columnNumber: 43
    }, this),
    featuredStory && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Community Voices" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 264,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Real Impact from the Field" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 267,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground", children: "Verified accounts from families and individuals participating in our foundation initiatives." }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 270,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 263,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StoryCard, { story: featuredStory, featured: true }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 277,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 276,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/impact", children: [
        "Read All Community Impact Stories",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 284,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 282,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 281,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 280,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 262,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 261,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background border-b border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center max-w-3xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Collaborate With Us" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 295,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: "Three Meaningful Ways to Participate" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 298,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground", children: "Join hands with our team to strengthen rural education, healthcare, and peacebuilding." }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 301,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 294,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-deep", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 310,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 309,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-6 text-xl font-bold text-foreground", children: "Donate to Programs" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 312,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Fund classroom scholarship kits, primary medical clinic pharmaceuticals, or water point rehabilitation in verified rural communities." }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 313,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 308,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "hero", className: "w-full cursor-pointer", onClick: handleDonateClick, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: "Donate Funds" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 320,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 319,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 318,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 307,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-deep", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Users, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 328,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 327,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-6 text-xl font-bold text-foreground", children: "Volunteer in Ebonyi" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 330,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Volunteer doctors, nurses, teachers, and field organizers contribute their time directly during scheduled outreach missions." }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 331,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 326,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/get-involved", children: "Sign Up to Volunteer" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 338,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 337,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 336,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 325,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary-deep", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Building2, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 346,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 345,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-6 text-xl font-bold text-foreground", children: "Institutional Partner" }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 348,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Partner with our foundation on CSR initiatives, clean water infrastructure, vocational tool donations, or agricultural development." }, void 0, false, {
              fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
              lineNumber: 349,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 344,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/get-involved", children: "Submit Partnership Proposal" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 356,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 355,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 354,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 343,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 306,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 293,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 292,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-16 md:py-20 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-4 p-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldCheck, { className: "h-8 w-8 text-primary shrink-0 mt-1", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 369,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-bold text-foreground", children: "Direct Accountability" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 371,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: "Financial tracking and direct disbursement to verified beneficiaries." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 372,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 370,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 368,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-4 p-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-8 w-8 text-primary shrink-0 mt-1", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 379,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-bold text-foreground", children: "Ebonyi Rooted" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 381,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: "Permanent secretariat located on Hilltop Road, Abakaliki." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 382,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 380,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 378,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-4 p-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Users, { className: "h-8 w-8 text-primary shrink-0 mt-1", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 389,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-bold text-foreground", children: "Community Led" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 391,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: "Village councils and ward elders co-lead project management." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 392,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 390,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 388,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-4 p-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-8 w-8 text-primary shrink-0 mt-1", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 399,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "font-bold text-foreground", children: "Licensed Professionals" }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 401,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: "Volunteer medical doctors and educators certified by national boards." }, void 0, false, {
            fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
            lineNumber: 402,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
          lineNumber: 400,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
        lineNumber: 398,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 367,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 366,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 365,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CtaBand, {}, void 0, false, {
      fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
      lineNumber: 412,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/index.tsx?tsr-split=component",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
export {
  HomePage as component
};
