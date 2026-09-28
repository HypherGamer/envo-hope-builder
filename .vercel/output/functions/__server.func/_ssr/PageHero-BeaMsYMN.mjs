import { c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-BjhXAP-V.mjs";
import { c as cn } from "./about-founder-CCLG_U39.mjs";
function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  children,
  className
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "section",
    {
      className: cn(
        "relative isolate overflow-hidden bg-gradient-hero pt-28 pb-16 md:pt-36 md:pb-24 text-primary-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" }, void 0, false, {
          fileName: "/app/applet/src/components/site/PageHero.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/30" }, void 0, false, {
          fileName: "/app/applet/src/components/site/PageHero.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
          breadcrumbs && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Breadcrumbs, { items: breadcrumbs, variant: "dark" }, void 0, false, {
            fileName: "/app/applet/src/components/site/PageHero.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/site/PageHero.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this),
          eyebrow && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm", children: eyebrow }, void 0, false, {
            fileName: "/app/applet/src/components/site/PageHero.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-4xl", children: title }, void 0, false, {
            fileName: "/app/applet/src/components/site/PageHero.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          description && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 max-w-2xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed", children: description }, void 0, false, {
            fileName: "/app/applet/src/components/site/PageHero.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this),
          actions && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: actions }, void 0, false, {
            fileName: "/app/applet/src/components/site/PageHero.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          children
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/PageHero.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/site/PageHero.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}
export {
  PageHero as P
};
