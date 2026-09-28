import { c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./about-founder-CCLG_U39.mjs";
function StatStrip({ stats, variant = "light", columns = 3, className }) {
  const colClass = columns === 4 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" : "grid grid-cols-1 sm:grid-cols-3 gap-6";
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("w-full", className), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dl", { className: colClass, children: stats.map((s) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      className: cn(
        "rounded-2xl p-6 transition-all duration-200",
        variant === "dark" && "bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground",
        variant === "light" && "bg-card border border-border text-foreground shadow-soft",
        variant === "card" && "bg-secondary/70 border border-border/80 text-foreground"
      ),
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dt", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight", children: s.value }, void 0, false, {
          fileName: "/app/applet/src/components/site/StatStrip.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dd", { className: "mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: s.label }, void 0, false, {
          fileName: "/app/applet/src/components/site/StatStrip.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        s.subtext && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dd", { className: "mt-2 text-sm leading-relaxed text-muted-foreground/90", children: s.subtext }, void 0, false, {
          fileName: "/app/applet/src/components/site/StatStrip.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        s.asOf && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("dd", { className: "mt-3 text-xs font-medium text-muted-foreground/75", children: [
          "Verified as of ",
          s.asOf
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/StatStrip.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ]
    },
    s.label,
    true,
    {
      fileName: "/app/applet/src/components/site/StatStrip.tsx",
      lineNumber: 27,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "/app/applet/src/components/site/StatStrip.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/site/StatStrip.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  StatStrip as S
};
