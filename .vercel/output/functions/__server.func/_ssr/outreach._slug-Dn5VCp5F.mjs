import { c as jsxDevRuntimeExports, R as React__default } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as Route$2, h as heroImg, S as SiteLayout, B as Button } from "./router-BzaOfFLl.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-BjhXAP-V.mjs";
import { C as CtaBand } from "./CtaBand-Du6cmEKm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { t as Calendar, g as MapPin, A as ArrowLeft, aa as Share2, H as Heart } from "../_libs/lucide-react.mjs";
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
import "./about-founder-CCLG_U39.mjs";
import "../_libs/tailwind-merge.mjs";
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
function renderSafeMarkdown(content) {
  if (!content || !content.trim()) return null;
  const blocks = content.replace(/\r\n/g, "\n").split(/\n\n+/);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 text-foreground/85 leading-relaxed", children: blocks.map((block, bIdx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("### ")) {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xl font-bold text-foreground tracking-tight pt-2", children: formatInlineText(trimmed.slice(4)) }, bIdx, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this);
    }
    if (trimmed.startsWith("## ")) {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-bold text-foreground tracking-tight pt-3", children: formatInlineText(trimmed.slice(3)) }, bIdx, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this);
    }
    if (trimmed.startsWith("# ")) {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-3xl font-extrabold text-foreground tracking-tight pt-4", children: formatInlineText(trimmed.slice(2)) }, bIdx, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this);
    }
    if (trimmed.startsWith("> ")) {
      const quoteLines = trimmed.split("\n").map((l) => l.startsWith("> ") ? l.slice(2) : l.startsWith(">") ? l.slice(1) : l).join(" ");
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "blockquote",
        {
          className: "border-l-4 border-primary/50 bg-primary/5 py-2.5 px-4 rounded-r-xl italic text-foreground/90 my-3",
          children: formatInlineText(quoteLines)
        },
        bIdx,
        false,
        {
          fileName: "/app/applet/src/lib/sanitize.tsx",
          lineNumber: 50,
          columnNumber: 13
        },
        this
      );
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items = trimmed.split("\n").map((line) => line.trim()).filter((line) => line.startsWith("- ") || line.startsWith("* ")).map((line) => line.slice(2));
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "list-disc list-outside pl-5 space-y-1.5 my-2", children: items.map((it, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: formatInlineText(it) }, idx, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)) }, bIdx, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this);
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").map((line) => line.trim()).filter((line) => /^\d+\.\s/.test(line)).map((line) => line.replace(/^\d+\.\s+/, ""));
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ol", { className: "list-decimal list-outside pl-5 space-y-1.5 my-2", children: items.map((it, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: formatInlineText(it) }, idx, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this)) }, bIdx, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this);
    }
    const lines = trimmed.split("\n");
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: lines.map((line, lIdx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(React__default.Fragment, { children: [
      formatInlineText(line),
      lIdx < lines.length - 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("br", {}, void 0, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 100,
        columnNumber: 45
      }, this)
    ] }, lIdx, true, {
      fileName: "/app/applet/src/lib/sanitize.tsx",
      lineNumber: 98,
      columnNumber: 15
    }, this)) }, bIdx, false, {
      fileName: "/app/applet/src/lib/sanitize.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this);
  }) }, void 0, false, {
    fileName: "/app/applet/src/lib/sanitize.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
function formatInlineText(text) {
  const sanitized = text.replace(/<[^>]*>?/gm, "");
  const pattern = /(\[.*?\]\(https?:\/\/[^\s)]+\)|\*\*.*?\*\*|\*.*?\*)/g;
  const parts = sanitized.split(pattern);
  return parts.map((part, index) => {
    if (!part) return null;
    const linkMatch = part.match(/^\[(.*?)\]\((https?:\/\/[^\s)]+)\)$/);
    if (linkMatch) {
      const label = linkMatch[1];
      const href = linkMatch[2];
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-primary font-semibold underline underline-offset-2 hover:text-primary-deep transition-colors",
          children: label
        },
        index,
        false,
        {
          fileName: "/app/applet/src/lib/sanitize.tsx",
          lineNumber: 130,
          columnNumber: 9
        },
        this
      );
    }
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "font-bold text-foreground", children: part.slice(2, -2) }, index, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 144,
        columnNumber: 14
      }, this);
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { className: "italic", children: part.slice(1, -1) }, index, false, {
        fileName: "/app/applet/src/lib/sanitize.tsx",
        lineNumber: 149,
        columnNumber: 14
      }, this);
    }
    return part;
  }).filter(Boolean);
}
function OutreachDetailPage() {
  const {
    item,
    siteData
  } = Route$2.useLoaderData();
  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.summary,
          url: window.location.href
        });
      } catch {
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };
  const coverImage = item.images && item.images.length > 0 ? item.images[0].url : heroImg;
  const coverAlt = item.images && item.images.length > 0 ? item.images[0].alt : item.title;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { siteData: siteData?.site, announcement: siteData?.announcement, navbarForceSolid: true, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "pt-24 pb-16 md:pt-32 md:pb-24 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Breadcrumbs, { items: [{
        label: "Home",
        href: "/"
      }, {
        label: "Outreach",
        href: "/outreach"
      }, {
        label: item.title
      }] }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider", children: [
          item.program,
          " Program"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Calendar, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          " ",
          item.date
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          " ",
          item.location
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]", children: item.title }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal border-l-4 border-primary/40 pl-4 py-1", children: item.summary }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-between border-y border-border py-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "ghost", size: "sm", className: "gap-1.5 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/outreach", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          " Back to Outreach List"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 72,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", onClick: handleShare, variant: "outline", size: "sm", className: "gap-1.5 cursor-pointer", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Share2, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          " Share Report"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 overflow-hidden rounded-3xl border border-border shadow-elegant bg-muted aspect-[16/9]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: coverImage, alt: coverAlt, className: "h-full w-full object-cover", loading: "eager" }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-12 text-base md:text-lg leading-relaxed text-foreground/90", children: renderSafeMarkdown(item.body) }, void 0, false, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      item.images && item.images.length > 1 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-16 border-t border-border pt-12", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-bold tracking-tight text-foreground mb-6", children: "Field Photo Gallery" }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 93,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2", children: item.images.slice(1).map((img, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("figure", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "aspect-[4/3] w-full overflow-hidden bg-muted", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: img.url, alt: img.alt, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105" }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 99,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 98,
            columnNumber: 21
          }, this),
          img.caption && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("figcaption", { className: "p-3.5 text-xs text-muted-foreground italic border-t border-border/40", children: img.caption }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 101,
            columnNumber: 37
          }, this)
        ] }, idx, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 97,
          columnNumber: 57
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 96,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 92,
        columnNumber: 53
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/outreach", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 112,
            columnNumber: 17
          }, this),
          " All Field Reports"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 111,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "default", className: "gap-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          " Support Future Missions"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
          lineNumber: 115,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CtaBand, { badge: "Community Impact", title: "Be Part of Our Next Community Intervention", description: "Whether through financial support, emergency relief supplies, or professional medical volunteering, your contribution transforms lives.", primaryAction: {
      label: "Donate to Programs",
      href: "/donate",
      icon: Heart
    }, secondaryAction: {
      label: "Join as Volunteer",
      href: "/get-involved"
    } }, void 0, false, {
      fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/outreach.$slug.tsx?tsr-split=component",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
export {
  OutreachDetailPage as component
};
