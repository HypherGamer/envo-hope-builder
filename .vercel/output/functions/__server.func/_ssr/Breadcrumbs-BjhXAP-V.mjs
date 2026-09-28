import { c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as ChevronRight } from "../_libs/lucide-react.mjs";
function Breadcrumbs({ items, className = "", variant = "dark" }) {
  const isDark = variant === "dark";
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { "aria-label": "Breadcrumb", className: `flex items-center text-sm ${className}`, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ol", { className: "flex flex-wrap items-center gap-2", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Link,
      {
        to: "/",
        className: `transition-colors font-medium ${isDark ? "text-primary-foreground/75 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
        children: "Home"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
        lineNumber: 22,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    items.map((item, index) => {
      const isLast = index === items.length - 1;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          ChevronRight,
          {
            className: `h-4 w-4 shrink-0 ${isDark ? "text-primary-foreground/50" : "text-muted-foreground/60"}`,
            "aria-hidden": "true"
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
            lineNumber: 37,
            columnNumber: 15
          },
          this
        ),
        isLast || !item.to ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "span",
          {
            "aria-current": isLast ? "page" : void 0,
            className: `font-semibold ${isDark ? "text-primary-foreground" : "text-foreground"}`,
            children: item.label
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
            lineNumber: 44,
            columnNumber: 17
          },
          this
        ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Link,
          {
            to: item.to,
            params: item.params,
            className: `transition-colors font-medium ${isDark ? "text-primary-foreground/75 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
            children: item.label
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
            lineNumber: 53,
            columnNumber: 17
          },
          this
        )
      ] }, item.label, true, {
        fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this);
    })
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/site/Breadcrumbs.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Breadcrumbs as B
};
