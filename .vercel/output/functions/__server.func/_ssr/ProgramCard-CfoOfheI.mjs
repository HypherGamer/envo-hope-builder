import { c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { n as Sprout, U as Users, o as Stethoscope, G as GraduationCap, p as HeartHandshake, c as ArrowRight } from "../_libs/lucide-react.mjs";
const iconMap = {
  outreach: HeartHandshake,
  education: GraduationCap,
  healthcare: Stethoscope,
  youth: Users,
  community: Sprout
};
function ProgramCard({ program, index }) {
  const Icon = iconMap[program.slug] || HeartHandshake;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-7 w-7", "aria-hidden": "true" }, void 0, false, {
          fileName: "/app/applet/src/components/site/ProgramCard.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/site/ProgramCard.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        typeof index === "number" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground/60", children: [
          "0",
          index + 1
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/ProgramCard.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/ProgramCard.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-6 text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary", children: program.title }, void 0, false, {
        fileName: "/app/applet/src/components/site/ProgramCard.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm md:text-base leading-relaxed text-muted-foreground line-clamp-3", children: program.summary }, void 0, false, {
        fileName: "/app/applet/src/components/site/ProgramCard.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      program.stats.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 border-t border-border pt-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-lg font-bold text-foreground", children: [
        program.stats[0].value,
        " ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-normal uppercase tracking-wider text-muted-foreground", children: program.stats[0].label }, void 0, false, {
          fileName: "/app/applet/src/components/site/ProgramCard.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/ProgramCard.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/site/ProgramCard.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/ProgramCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 pt-4 border-t border-border/60", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Link,
      {
        to: "/programs/$slug",
        params: { slug: program.slug },
        className: "inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:translate-x-1",
        children: [
          "View Program Details",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
            fileName: "/app/applet/src/components/site/ProgramCard.tsx",
            lineNumber: 69,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/components/site/ProgramCard.tsx",
        lineNumber: 63,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/site/ProgramCard.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/ProgramCard.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  ProgramCard as P
};
