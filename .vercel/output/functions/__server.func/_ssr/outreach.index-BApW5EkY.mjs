import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Route$3, S as SiteLayout, h as heroImg, B as Button } from "./router-BzaOfFLl.mjs";
import { P as PageHero } from "./PageHero-BeaMsYMN.mjs";
import { c as cn } from "./about-founder-CCLG_U39.mjs";
import { C as CtaBand } from "./CtaBand-Du6cmEKm.mjs";
import { I as Input } from "./input-DwX46eUj.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { a9 as Search, t as Calendar, g as MapPin, c as ArrowRight, s as Sparkles, H as Heart } from "../_libs/lucide-react.mjs";
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
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      className: cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      ),
      children: [
        eyebrow && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: eyebrow }, void 0, false, {
          fileName: "/app/applet/src/components/site/SectionHeading.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground", children: title }, void 0, false, {
          fileName: "/app/applet/src/components/site/SectionHeading.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        description && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base md:text-lg leading-relaxed text-muted-foreground", children: description }, void 0, false, {
          fileName: "/app/applet/src/components/site/SectionHeading.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/site/SectionHeading.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
function OutreachIndexPage() {
  const {
    outreachList,
    siteData
  } = Route$3.useLoaderData();
  const [search, setSearch] = reactExports.useState("");
  const [selectedProgram, setSelectedProgram] = reactExports.useState("all");
  const programs = [{
    value: "all",
    label: "All Programs"
  }, {
    value: "outreach",
    label: "Outreach & Relief"
  }, {
    value: "education",
    label: "Education"
  }, {
    value: "healthcare",
    label: "Healthcare"
  }, {
    value: "youth",
    label: "Youth Empowerment"
  }, {
    value: "community",
    label: "Community Development"
  }];
  const filteredItems = outreachList.filter((item) => {
    const matchesSearch = search.trim().length === 0 || item.title.toLowerCase().includes(search.toLowerCase()) || item.location.toLowerCase().includes(search.toLowerCase()) || item.summary.toLowerCase().includes(search.toLowerCase());
    const matchesProgram = selectedProgram === "all" || item.program === selectedProgram;
    return matchesSearch && matchesProgram;
  });
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { siteData: siteData?.site, announcement: siteData?.announcement, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHero, { badge: "Field Activities & Missions", title: "Community Outreach & Field Reports", description: "Direct field updates from our team documenting humanitarian visits, educational Retentions, medical camps, and community engagements throughout Ebonyi State.", image: heroImg }, void 0, false, {
      fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "border-b border-border bg-card/60 py-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative flex-1 max-w-md", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Search, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { type: "text", placeholder: "Search by community, LGA, or keyword...", value: search, onChange: (e) => setSearch(e.target.value), className: "pl-10 rounded-xl" }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-1.5", children: programs.map((p) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setSelectedProgram(p.value), className: `rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${selectedProgram === p.value ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary text-secondary-foreground hover:bg-primary-soft hover:text-primary"}`, children: p.label }, p.value, false, {
        fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
        lineNumber: 58,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SectionHeading, { badge: "Verified Field Records", title: "Recent Outreach Missions", description: "Explore reports and photographic logs of our direct interventions with local leaders and community beneficiaries." }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      filteredItems.length > 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: filteredItems.map((item) => {
        const coverImage = item.images && item.images.length > 0 ? item.images[0].url : heroImg;
        const coverAlt = item.images && item.images.length > 0 ? item.images[0].alt : item.title;
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative aspect-[16/10] w-full overflow-hidden bg-muted", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: coverImage, alt: coverAlt, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 77,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full bg-primary-deep/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-accent shadow-sm uppercase tracking-wider", children: item.program }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 79,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 78,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-1 flex-col p-6", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1 font-medium", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
                  fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
                  lineNumber: 88,
                  columnNumber: 27
                }, this),
                " ",
                item.date
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
                lineNumber: 87,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "•" }, void 0, false, {
                fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
                lineNumber: 90,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1 font-medium", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
                  fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
                  lineNumber: 92,
                  columnNumber: 27
                }, this),
                " ",
                item.location
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
                lineNumber: 91,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 86,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/outreach/$slug", params: {
              slug: item.slug
            }, children: item.title }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 97,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 96,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1", children: item.summary }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 104,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 border-t border-border/60 pt-4 flex items-center justify-between", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "ghost", size: "sm", className: "p-0 text-primary font-bold hover:bg-transparent hover:text-primary-deep group/btn", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/outreach/$slug", params: {
              slug: item.slug
            }, className: "inline-flex items-center gap-1.5", children: [
              "Read Full Report ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4 transition-transform group-hover/btn:translate-x-1" }, void 0, false, {
                fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
                lineNumber: 113,
                columnNumber: 46
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 110,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 109,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
              lineNumber: 108,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
            lineNumber: 85,
            columnNumber: 21
          }, this)
        ] }, item.id, true, {
          fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
          lineNumber: 75,
          columnNumber: 20
        }, this);
      }) }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
        lineNumber: 71,
        columnNumber: 39
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-12 rounded-3xl border border-dashed border-border bg-secondary/30 p-12 text-center max-w-xl mx-auto", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Sparkles, { className: "mx-auto h-8 w-8 text-primary mb-3" }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-lg font-bold text-foreground", children: "No outreach reports found" }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: search || selectedProgram !== "all" ? "Try resetting your search query or selecting a different program category." : "Field reports will appear here as new missions are published by our team." }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        (search || selectedProgram !== "all") && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => {
          setSearch("");
          setSelectedProgram("all");
        }, variant: "outline", size: "sm", className: "mt-5", children: "Clear Filters" }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
          lineNumber: 126,
          columnNumber: 57
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
        lineNumber: 120,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CtaBand, { badge: "Partner with Us", title: "Help Us Expand Field Reach Across Ebonyi State", description: "Every donation or volunteer hour helps dispatch nutritional relief, medical personnel, and school kits to remote rural settlements.", primaryAction: {
      label: "Donate to Programs",
      href: "/donate",
      icon: Heart
    }, secondaryAction: {
      label: "Volunteer with Us",
      href: "/get-involved"
    } }, void 0, false, {
      fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/outreach.index.tsx?tsr-split=component",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
export {
  OutreachIndexPage as component
};
