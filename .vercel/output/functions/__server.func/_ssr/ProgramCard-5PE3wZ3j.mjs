import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as Sprout, U as Users, k as Stethoscope, G as GraduationCap, l as HeartHandshake, h as ArrowRight } from "../_libs/lucide-react.mjs";
const iconMap = {
  outreach: HeartHandshake,
  education: GraduationCap,
  healthcare: Stethoscope,
  youth: Users,
  community: Sprout
};
function ProgramCard({ program, index }) {
  const Icon = iconMap[program.slug] || HeartHandshake;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7", "aria-hidden": "true" }) }),
        typeof index === "number" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground/60", children: [
          "0",
          index + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary", children: program.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base leading-relaxed text-muted-foreground line-clamp-3", children: program.summary }),
      program.stats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 border-t border-border pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-foreground", children: [
        program.stats[0].value,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal uppercase tracking-wider text-muted-foreground", children: program.stats[0].label })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/programs/$slug",
        params: { slug: program.slug },
        className: "inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:translate-x-1",
        children: [
          "View Program Details",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })
        ]
      }
    ) })
  ] });
}
export {
  ProgramCard as P
};
