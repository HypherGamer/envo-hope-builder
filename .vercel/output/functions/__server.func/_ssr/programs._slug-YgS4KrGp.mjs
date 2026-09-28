import { c as jsxDevRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Route, p as programsContent, S as SiteLayout, B as Button } from "./router-BzaOfFLl.mjs";
import { P as PageHero } from "./PageHero-BeaMsYMN.mjs";
import { S as StatStrip } from "./StatStrip-BUtWs_nB.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as cn } from "./about-founder-CCLG_U39.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { H as Heart, u as Clock, ab as Layers, s as Sparkles, Q as Quote, g as MapPin, N as CircleQuestionMark, c as ArrowRight, d as ChevronDown } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-collapsible.mjs";
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Item, { ref, className: cn("border-b", className), ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/accordion.tsx",
  lineNumber: 13,
  columnNumber: 3
}, void 0));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Header, { className: "flex", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/accordion.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/app/applet/src/components/ui/accordion.tsx",
    lineNumber: 22,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/app/applet/src/components/ui/accordion.tsx",
  lineNumber: 21,
  columnNumber: 3
}, void 0));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("pb-4 pt-0", className), children }, void 0, false, {
      fileName: "/app/applet/src/components/ui/accordion.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/accordion.tsx",
    lineNumber: 41,
    columnNumber: 3
  },
  void 0
));
AccordionContent.displayName = Content2.displayName;
function FaqList({ faqs, className = "" }) {
  if (!faqs || faqs.length === 0) return null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `w-full max-w-3xl mx-auto ${className}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Accordion, { type: "single", collapsible: true, className: "w-full space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    AccordionItem,
    {
      value: `item-${index}`,
      className: "rounded-2xl border border-border bg-card px-6 py-2 shadow-soft data-[state=open]:border-primary/40 data-[state=open]:shadow-elegant",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AccordionTrigger, { className: "text-base sm:text-lg font-bold text-foreground text-left py-4 hover:no-underline hover:text-primary", children: faq.question }, void 0, false, {
          fileName: "/app/applet/src/components/site/FaqList.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AccordionContent, { className: "text-sm sm:text-base leading-relaxed text-muted-foreground pb-5 pt-1", children: faq.answer }, void 0, false, {
          fileName: "/app/applet/src/components/site/FaqList.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this)
      ]
    },
    faq.question,
    true,
    {
      fileName: "/app/applet/src/components/site/FaqList.tsx",
      lineNumber: 25,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "/app/applet/src/components/site/FaqList.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/site/FaqList.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function ProgramDetailsPage() {
  const {
    program
  } = Route.useLoaderData();
  const relatedPrograms = programsContent.filter((p) => program.relatedSlugs?.includes(p.slug) || p.slug !== program.slug && program.relatedSlugs?.length === 0).slice(0, 3);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHero, { breadcrumbs: [{
      label: "Programs",
      to: "/programs"
    }, {
      label: program.title
    }], eyebrow: "Program Overview", title: program.title, description: program.tagline, actions: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "hero", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      " Support This Program"
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 23,
      columnNumber: 97
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    program.stats && program.stats.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "border-b border-border bg-card py-10 md:py-14", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StatStrip, { stats: program.stats, variant: "card" }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 30,
      columnNumber: 53
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-12 lg:grid-cols-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-8 space-y-16", children: [
        program.problem && program.problem.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Clock, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 45,
              columnNumber: 21
            }, this),
            "The Challenge We Address"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 44,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground", children: "Understanding the Need on the Ground" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 48,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-5 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground", children: program.problem.map((para, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: para }, idx, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 52,
            columnNumber: 57
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 51,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 43,
          columnNumber: 65
        }, this),
        program.activities && program.activities.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Layers, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 59,
              columnNumber: 21
            }, this),
            "Key Activities"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 58,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground", children: "What Our Teams Deliver" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 62,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: program.activities.map((act) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-bold text-base text-foreground", children: act.title }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 67,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: act.desc }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 68,
              columnNumber: 25
            }, this)
          ] }, act.title, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 66,
            columnNumber: 52
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 65,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 57,
          columnNumber: 71
        }, this),
        program.approach && program.approach.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 78,
              columnNumber: 21
            }, this),
            "Execution Strategy"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground", children: "How the Initiative Works" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 81,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 space-y-4", children: program.approach.map((step) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft items-start", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep font-bold text-base", children: step.step }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 86,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: step.title }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 90,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: step.desc }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 91,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 89,
              columnNumber: 25
            }, this)
          ] }, step.step, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 85,
            columnNumber: 51
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 84,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 76,
          columnNumber: 67
        }, this),
        (program.whoWeServe || program.howToApply) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6", children: "Beneficiary Scope & Referrals" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 101,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2", children: [
            program.whoWeServe && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-secondary/40 p-6", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Target Beneficiaries" }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 106,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: program.whoWeServe }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 109,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 105,
              columnNumber: 44
            }, this),
            program.howToApply && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-secondary/40 p-6", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "How to Nominate or Apply" }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 115,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: program.howToApply }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 118,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 114,
              columnNumber: 44
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 104,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 100,
          columnNumber: 62
        }, this),
        program.gallery && program.gallery.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6", children: "Field Photographs" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 127,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2", children: program.gallery.map((img, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("figure", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: img.src, alt: img.alt, width: 800, height: 550, loading: "lazy", className: "aspect-[4/3] w-full object-cover" }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 132,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("figcaption", { className: "p-4 text-xs text-muted-foreground leading-relaxed", children: img.caption }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 133,
              columnNumber: 25
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 131,
            columnNumber: 56
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 130,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 126,
          columnNumber: 65
        }, this),
        program.stories && program.stories.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6", children: "Beneficiary Testimonial" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 142,
            columnNumber: 19
          }, this),
          program.stories.map((story) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Quote, { className: "h-8 w-8 text-primary", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 147,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                  fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                  lineNumber: 149,
                  columnNumber: 27
                }, this),
                story.location
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 148,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 146,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("blockquote", { className: "text-base sm:text-lg italic text-foreground leading-relaxed border-l-2 border-primary/40 pl-4 py-1", children: [
              '"',
              story.quote,
              '"'
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 153,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 pt-4 border-t border-border text-sm flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-foreground", children: story.author }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 157,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs text-muted-foreground", children: story.outcome }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 158,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 156,
              columnNumber: 23
            }, this)
          ] }, story.title, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 145,
            columnNumber: 49
          }, this))
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 141,
          columnNumber: 65
        }, this),
        program.unitCosts && program.unitCosts.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground", children: "What Your Support Achieves" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 165,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "Transparent cost breakdowns priced directly in Nigerian Naira (NGN)." }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 168,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 space-y-4", children: program.unitCosts.map((cost) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: "Contribution Impact" }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 174,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm font-medium text-foreground", children: cost.gives }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 177,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 173,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "shrink-0 text-right sm:text-left", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xl sm:text-2xl font-extrabold text-foreground", children: [
              "₦",
              cost.amount.toLocaleString()
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 180,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 179,
              columnNumber: 25
            }, this)
          ] }, cost.amount, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 172,
            columnNumber: 52
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 171,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 164,
          columnNumber: 69
        }, this),
        program.faqs && program.faqs.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-12", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleQuestionMark, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 191,
              columnNumber: 21
            }, this),
            "Frequently Asked Questions"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 190,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-6", children: "Program Questions Answered" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 194,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FaqList, { faqs: program.faqs }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 197,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 189,
          columnNumber: 59
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "sticky top-28 space-y-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-gradient-hero p-6 sm:p-8 text-primary-foreground shadow-elegant", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-3.5 w-3.5 text-accent" }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 206,
              columnNumber: 21
            }, this),
            " Support Initiative"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 205,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-4 text-xl sm:text-2xl font-bold", children: "Partner With This Program" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 208,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-primary-foreground/85 leading-relaxed", children: "Contributions directly fund materials, field travel, health tests, and scholarship disbursements across verified rural hamlets." }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 209,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "hero", size: "lg", className: "w-full", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
                lineNumber: 217,
                columnNumber: 25
              }, this),
              " Donate to Program"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 216,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 215,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", size: "lg", className: "w-full border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/contact", children: "Request Nomination" }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 221,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
              lineNumber: 220,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 214,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 204,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "text-sm font-bold text-foreground uppercase tracking-wider", children: "Have Questions?" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 227,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: "Contact our secretariat desk at No. 1 Hilltop Rd, Abakaliki or reach our coordination team by phone." }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 230,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-xs font-bold text-primary", children: "+234 806 356 3604" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 234,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 226,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
        lineNumber: 203,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
        lineNumber: 202,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    relatedPrograms.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-24 bg-secondary/50 border-t border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground text-center mb-12", children: "Explore Our Other Program Pillars" }, void 0, false, {
        fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
        lineNumber: 245,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: relatedPrograms.map((p) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-lg font-bold text-foreground", children: p.title }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 251,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-3", children: p.summary }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 252,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 250,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-5 pt-3 border-t border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/programs/$slug", params: {
          slug: p.slug
        }, className: "inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline", children: [
          "Read Program Details",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
            lineNumber: 261,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 257,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
          lineNumber: 256,
          columnNumber: 19
        }, this)
      ] }, p.slug, true, {
        fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
        lineNumber: 249,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
        lineNumber: 248,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 244,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
      lineNumber: 243,
      columnNumber: 38
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/programs.$slug.tsx?tsr-split=component",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}
export {
  ProgramDetailsPage as component
};
