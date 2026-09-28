import { c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { Q as Quote, g as MapPin, m as CircleCheck } from "../_libs/lucide-react.mjs";
function StoryCard({ story, featured = false }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "article",
    {
      className: `relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft transition-all duration-300 hover:shadow-elegant ${featured ? "lg:col-span-2 border-primary/30 bg-primary-soft/30" : ""}`,
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Quote, { className: "h-8 w-8 text-primary/60", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/components/site/StoryCard.tsx",
              lineNumber: 18,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/components/site/StoryCard.tsx",
                lineNumber: 20,
                columnNumber: 13
              }, this),
              story.location
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/StoryCard.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground", children: story.title }, void 0, false, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("blockquote", { className: "mt-4 text-base italic text-foreground/90 leading-relaxed border-l-2 border-primary/40 pl-4 py-1", children: [
            '"',
            story.quote,
            '"'
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: story.summary }, void 0, false, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          story.outcomes && story.outcomes.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-5 space-y-2 border-t border-border pt-4", children: story.outcomes.map((outcome) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5 text-xs text-foreground/80", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-0.5", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/components/site/StoryCard.tsx",
              lineNumber: 39,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: outcome }, void 0, false, {
              fileName: "/app/applet/src/components/site/StoryCard.tsx",
              lineNumber: 40,
              columnNumber: 17
            }, this)
          ] }, outcome, true, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/StoryCard.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 border-t border-border/80 pt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-semibold text-foreground", children: story.beneficiary }, void 0, false, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: story.program }, void 0, false, {
            fileName: "/app/applet/src/components/site/StoryCard.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/StoryCard.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/site/StoryCard.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
export {
  StoryCard as S
};
