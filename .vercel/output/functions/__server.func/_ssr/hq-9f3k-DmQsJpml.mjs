import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { b as Route$7, B as Button, d as adminLogout, g as getAdminOverviewData, s as saveAdminOutreach, D as Dialog, e as DialogContent, f as DialogHeader, i as DialogTitle, j as DialogDescription, k as DialogFooter, l as getAdminSiteSettings, m as getAdminHomeSettings, n as getAdminAuditLogs, o as getAdminOutreachList, q as deleteAdminOutreach, r as getAdminTeamList, t as reorderAdminTeam, v as saveAdminTeamMember, w as getAdminDonationSettings, x as saveAdminDonationSettings, y as saveAdminSiteSettings, z as saveAdminHomeSettings, A as getAdminStoriesList, C as saveAdminStory, E as getAdminFaqsList, F as saveAdminFaq, G as getAdminGalleryList, H as saveAdminGalleryItem, I as getAdminMessages, J as updateAdminMessageStatus, K as uploadAdminImage } from "./router-BzaOfFLl.mjs";
import { m as maskAccountNumber } from "./about-founder-CCLG_U39.mjs";
import { I as Input } from "./input-DwX46eUj.mjs";
import { L as Label, T as Textarea } from "./label-RR8mAOhH.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { y as LayoutDashboard, z as FileText, U as Users, D as CreditCard, E as Settings, J as House, K as BookOpen, N as CircleQuestionMark, O as Image$1, V as Inbox, W as Activity, Z as LogOut, _ as Plus, g as MapPin, $ as ExternalLink, a0 as Pen, a1 as Archive, R as RefreshCw, a2 as Trash2, a3 as ShieldAlert, a4 as ArrowUp, a5 as ArrowDown, a6 as CircleCheckBig, T as TriangleAlert, i as Mail, P as Phone, a7 as Upload } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
function AdminDashboardPage() {
  const {
    admin
  } = Route$7.useLoaderData();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = reactExports.useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  const handleSignOut = async () => {
    try {
      await adminLogout();
      toast.success("Signed out successfully");
      navigate({
        to: "/"
      });
    } catch {
      navigate({
        to: "/"
      });
    }
  };
  const navTabs = [{
    key: "overview",
    label: "Overview",
    icon: LayoutDashboard
  }, {
    key: "outreach",
    label: "Outreach & Field",
    icon: FileText
  }, {
    key: "team",
    label: "Team Members",
    icon: Users
  }, {
    key: "donation",
    label: "Bank & Donation",
    icon: CreditCard
  }, {
    key: "site",
    label: "Site & Contact",
    icon: Settings
  }, {
    key: "home",
    label: "Homepage Hero",
    icon: House
  }, {
    key: "stories",
    label: "Impact Stories",
    icon: BookOpen
  }, {
    key: "faqs",
    label: "FAQs",
    icon: CircleQuestionMark
  }, {
    key: "gallery",
    label: "Photo Gallery",
    icon: Image$1
  }, {
    key: "inbox",
    label: "Messages Inbox",
    icon: Inbox
  }, {
    key: "audit",
    label: "Audit Activity",
    icon: Activity
  }];
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "min-h-screen bg-secondary/30 text-foreground flex flex-col md:flex-row antialiased", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("aside", { className: "w-full md:w-64 bg-card border-r border-border shrink-0 flex flex-col justify-between p-4 shadow-sm", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "px-3 py-4 border-b border-border/60 mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-base font-extrabold text-foreground tracking-tight flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-2.5 w-2.5 rounded-full bg-primary animate-pulse" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 94,
                columnNumber: 17
              }, this),
              "Management Console"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 93,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-muted-foreground truncate max-w-[190px] mt-0.5", children: admin.email }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 97,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setMobileMenuOpen((p) => !p), className: "md:hidden rounded-lg p-1.5 border border-border", children: mobileMenuOpen ? "✕" : "☰" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 101,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: `space-y-1 ${mobileMenuOpen ? "block" : "hidden md:block"}`, children: navTabs.map(({
          key,
          label,
          icon: Icon
        }) => {
          const active = currentTab === key;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => {
            setCurrentTab(key);
            setMobileMenuOpen(false);
          }, className: `w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${active ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-4 w-4 shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 118,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: label }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 119,
              columnNumber: 19
            }, this)
          ] }, key, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 114,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "pt-4 border-t border-border/60 mt-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", onClick: handleSignOut, variant: "ghost", size: "sm", className: "w-full justify-start text-xs text-destructive hover:bg-destructive/10 hover:text-destructive gap-2 cursor-pointer font-semibold", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LogOut, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        " Sign Out"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 127,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { className: "flex-1 p-4 md:p-8 max-w-6xl overflow-y-auto", children: [
      currentTab === "overview" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OverviewTab, { onNavigate: setCurrentTab }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 135,
        columnNumber: 39
      }, this),
      currentTab === "outreach" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OutreachTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 136,
        columnNumber: 39
      }, this),
      currentTab === "team" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TeamTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 137,
        columnNumber: 35
      }, this),
      currentTab === "donation" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DonationTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 138,
        columnNumber: 39
      }, this),
      currentTab === "site" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 139,
        columnNumber: 35
      }, this),
      currentTab === "home" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(HomeTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 140,
        columnNumber: 35
      }, this),
      currentTab === "stories" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(StoriesTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 141,
        columnNumber: 38
      }, this),
      currentTab === "faqs" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FaqsTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 142,
        columnNumber: 35
      }, this),
      currentTab === "gallery" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(GalleryTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 143,
        columnNumber: 38
      }, this),
      currentTab === "inbox" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(InboxTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 144,
        columnNumber: 36
      }, this),
      currentTab === "audit" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AuditTab, {}, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 145,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 134,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
function OverviewTab({
  onNavigate
}) {
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    getAdminOverviewData().then((res) => setData(res)).catch((err) => toast.error("Failed to load overview data: " + err.message)).finally(() => setLoading(false));
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading dashboard overview..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 173,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Executive Dashboard" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Welcome to the foundation content management workspace. Real-time changes are reflected across the website." }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { onClick: () => onNavigate("inbox"), className: "rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Inbox Messages" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 187,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Inbox, { className: "h-4 w-4 text-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 188,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-3xl font-extrabold text-foreground", children: data?.totalMessages || 0 }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-primary font-bold", children: [
          data?.unreadMessages || 0,
          " unread ",
          data?.unreadMessages === 1 ? "inquiry" : "inquiries"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 191,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 185,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { onClick: () => onNavigate("outreach"), className: "rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Outreach Missions" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 198,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FileText, { className: "h-4 w-4 text-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 199,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 197,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-3xl font-extrabold text-foreground", children: data?.totalOutreach || 0 }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 201,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-foreground", children: data?.publishedOutreach || 0 }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 203,
            columnNumber: 13
          }, this),
          " published • ",
          data?.draftOutreach || 0,
          " drafts"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 202,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { onClick: () => onNavigate("team"), className: "rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Team Members" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 209,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Users, { className: "h-4 w-4 text-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 210,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-3xl font-extrabold text-foreground", children: data?.totalTeam || 0 }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 212,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-muted-foreground", children: "Leadership & field personnel" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 213,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { onClick: () => onNavigate("donation"), className: "rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/50 transition-all cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-muted-foreground text-xs font-semibold uppercase", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Bank & Donation" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 218,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CreditCard, { className: "h-4 w-4 text-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 219,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 217,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-base font-extrabold text-foreground", children: "Verified Details" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 221,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-xs text-primary font-semibold", children: "Protected by 2-step confirm" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 222,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 216,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4", children: "Quick Management Actions" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 228,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => onNavigate("outreach"), variant: "default", size: "sm", className: "gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 233,
            columnNumber: 13
          }, this),
          " New Outreach Report"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 232,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => onNavigate("donation"), variant: "outline", size: "sm", className: "gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CreditCard, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 236,
            columnNumber: 13
          }, this),
          " Update Bank Account"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => onNavigate("site"), variant: "outline", size: "sm", className: "gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Settings, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 239,
            columnNumber: 13
          }, this),
          " Announcement Banner"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 238,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => onNavigate("inbox"), variant: "outline", size: "sm", className: "gap-2 cursor-pointer", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Inbox, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 242,
            columnNumber: 13
          }, this),
          " Review Form Inquiries"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 241,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 231,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 227,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-sm font-bold uppercase tracking-wider text-muted-foreground", children: "Recent Administrative Activity" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 250,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => onNavigate("audit"), variant: "ghost", size: "sm", className: "text-xs text-primary font-bold cursor-pointer", children: "View All Logs" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 253,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 249,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "divide-y divide-border/60", children: data?.recentAudits && data.recentAudits.length > 0 ? data.recentAudits.map((a) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "py-3 flex items-center justify-between text-xs", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-mono font-bold text-primary mr-2 uppercase", children: a.action }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 261,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-foreground/90", children: a.afterSummary || a.target }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 262,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 260,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-muted-foreground font-mono", children: new Date(a.timestamp).toLocaleString() }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 264,
          columnNumber: 17
        }, this)
      ] }, a.id, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 259,
        columnNumber: 92
      }, this)) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground py-2", children: "No activity recorded yet." }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 267,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 258,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 248,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 175,
    columnNumber: 10
  }, this);
}
function OutreachTab() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [search, setSearch] = reactExports.useState("");
  const [editItem, setEditItem] = reactExports.useState(null);
  const [deleteItem, setDeleteItem] = reactExports.useState(null);
  const [deleteConfirmTitle, setDeleteConfirmTitle] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const loadItems = () => {
    setLoading(true);
    getAdminOutreachList().then(setItems).catch((err) => toast.error("Error loading outreach: " + err.message)).finally(() => setLoading(false));
  };
  reactExports.useEffect(() => {
    loadItems();
  }, []);
  const filtered = items.filter((item) => {
    const matchesFilter = statusFilter === "all" || item.status === statusFilter;
    const matchesSearch = search.trim().length === 0 || item.title.toLowerCase().includes(search.toLowerCase()) || item.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  const handleSave = async (e) => {
    e.preventDefault();
    if (!editItem?.title || !editItem.slug || !editItem.summary || !editItem.body) {
      toast.error("Please fill in all required fields (title, slug, summary, body)");
      return;
    }
    setSaving(true);
    try {
      await saveAdminOutreach({
        data: {
          id: editItem.id,
          slug: editItem.slug,
          title: editItem.title,
          date: editItem.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          location: editItem.location || "Ebonyi State, Nigeria",
          summary: editItem.summary,
          body: editItem.body,
          program: editItem.program || "outreach",
          status: editItem.status || "draft",
          images: editItem.images || []
        }
      });
      toast.success("Outreach report saved successfully");
      setEditItem(null);
      loadItems();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save outreach report");
    } finally {
      setSaving(false);
    }
  };
  const handleDeletePermanent = async () => {
    if (!deleteItem) return;
    try {
      await deleteAdminOutreach({
        data: {
          id: deleteItem.id,
          confirmedTitle: deleteConfirmTitle
        }
      });
      toast.success("Outreach permanently deleted");
      setDeleteItem(null);
      setDeleteConfirmTitle("");
      loadItems();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Deletion failed");
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Outreach & Field Records" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 349,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Create, edit, and publish verified community mission logs with images." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 350,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 348,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => setEditItem({
        title: "",
        slug: "",
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric"
        }),
        location: "Abakaliki, Ebonyi State",
        summary: "",
        body: "",
        program: "outreach",
        status: "draft",
        images: []
      }), className: "gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 368,
          columnNumber: 11
        }, this),
        " Create Outreach Report"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 354,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 347,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row gap-3 items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Search by title or location...", value: search, onChange: (e) => setSearch(e.target.value), className: "max-w-xs rounded-xl text-xs" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 374,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-1.5 bg-card p-1 rounded-xl border border-border", children: ["all", "published", "draft", "archived"].map((st) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setStatusFilter(st), className: `px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${statusFilter === st ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: st }, st, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 376,
        columnNumber: 64
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 375,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 373,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading outreach records..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 384,
      columnNumber: 20
    }, this) : filtered.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No outreach records found in this view." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 384,
      columnNumber: 143
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full text-left text-xs", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-secondary/50 text-muted-foreground font-bold uppercase tracking-wider border-b border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Title & Location" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 388,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Program" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 389,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Date" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 390,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Status" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 391,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4 text-right", children: "Actions" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 392,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 387,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 386,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y divide-border/60", children: filtered.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-secondary/20 transition-colors", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-foreground text-sm", children: item.title }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 398,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-muted-foreground text-xs flex items-center gap-1 mt-0.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-3 w-3 text-primary" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 400,
              columnNumber: 25
            }, this),
            " ",
            item.location
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 399,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 397,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4 capitalize font-semibold text-primary", children: item.program }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 403,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4 text-muted-foreground", children: item.date }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 404,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `rounded-full px-2.5 py-0.5 font-bold uppercase text-[10px] ${item.status === "published" ? "bg-green-500/15 text-green-700 dark:text-green-400" : item.status === "draft" ? "bg-amber-500/15 text-amber-700 dark:text-amber-400" : "bg-muted text-muted-foreground"}`, children: item.status }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 406,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 405,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4 text-right space-x-1.5 whitespace-nowrap", children: [
          item.status === "published" && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `/outreach/${item.slug}`, target: "_blank", rel: "noreferrer", className: "inline-flex items-center p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary", title: "View Live Page", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ExternalLink, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 412,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 411,
            columnNumber: 55
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setEditItem(item), className: "inline-flex items-center p-1.5 text-primary hover:text-primary-deep rounded-lg hover:bg-primary-soft cursor-pointer", title: "Edit Item", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 415,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 414,
            columnNumber: 23
          }, this),
          item.status !== "archived" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: async () => {
            await saveAdminOutreach({
              data: {
                ...item,
                status: "archived"
              }
            });
            toast.success("Archived outreach item");
            loadItems();
          }, className: "inline-flex items-center p-1.5 text-amber-600 hover:text-amber-700 rounded-lg hover:bg-amber-50 cursor-pointer", title: "Archive", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Archive, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 427,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 417,
            columnNumber: 53
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: async () => {
              await saveAdminOutreach({
                data: {
                  ...item,
                  status: "draft"
                }
              });
              toast.success("Restored to draft");
              loadItems();
            }, className: "inline-flex items-center p-1.5 text-green-600 hover:text-green-700 rounded-lg hover:bg-green-50 cursor-pointer", title: "Restore", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 439,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 429,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => {
              setDeleteItem(item);
              setDeleteConfirmTitle("");
            }, className: "inline-flex items-center p-1.5 text-destructive hover:text-destructive/80 rounded-lg hover:bg-destructive/10 cursor-pointer", title: "Permanently Delete", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Trash2, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 445,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 441,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 428,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 410,
          columnNumber: 21
        }, this)
      ] }, item.id, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 396,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 395,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 385,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 384,
      columnNumber: 254
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 383,
      columnNumber: 7
    }, this),
    editItem && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: Boolean(editItem), onOpenChange: (open) => !open && setEditItem(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: editItem.id ? "Edit Outreach Mission" : "New Outreach Mission" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 459,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: "Fill out the field report details. Markdown formatting is supported in the body." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 460,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 458,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Title *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 468,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editItem.title || "", onChange: (e) => {
              const val = e.target.value;
              setEditItem((p) => ({
                ...p,
                title: val,
                slug: p?.slug || val.toLowerCase().replace(/[^a-z0-9]+/g, "-")
              }));
            }, placeholder: "e.g. Clean Water & Grain Relief Mission in Ishielu", className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 469,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 467,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "URL Slug *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 479,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editItem.slug || "", onChange: (e) => setEditItem((p) => ({
              ...p,
              slug: e.target.value
            })), placeholder: "e.g. ishielu-relief-mission", className: "mt-1 font-mono text-xs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 480,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 478,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 466,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Date Label *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 489,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editItem.date || "", onChange: (e) => setEditItem((p) => ({
              ...p,
              date: e.target.value
            })), placeholder: "e.g. April 2026 or 15 April 2026", className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 490,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 488,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Location *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 496,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editItem.location || "", onChange: (e) => setEditItem((p) => ({
              ...p,
              location: e.target.value
            })), placeholder: "e.g. Ntezi, Ishielu LGA", className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 497,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 495,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Program Pillar" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 503,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("select", { value: editItem.program || "outreach", onChange: (e) => setEditItem((p) => ({
              ...p,
              program: e.target.value
            })), className: "w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "outreach", children: "Outreach & Relief" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 508,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "education", children: "Educational Support" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 509,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "healthcare", children: "Healthcare Assistance" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 510,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "youth", children: "Youth Empowerment" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 511,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "community", children: "Community Development" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 512,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "general", children: "General Foundation" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 513,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 504,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 502,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 487,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Summary (Short abstract for cards & SEO) *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 519,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { required: true, rows: 2, value: editItem.summary || "", onChange: (e) => setEditItem((p) => ({
            ...p,
            summary: e.target.value
          })), placeholder: "2-3 sentence overview of what was accomplished...", className: "mt-1 text-sm" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 520,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 518,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Full Body Content (Markdown supported) *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 527,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { required: true, rows: 8, value: editItem.body || "", onChange: (e) => setEditItem((p) => ({
            ...p,
            body: e.target.value
          })), placeholder: "Write full article here. Use ## for subheadings, - for bullet points, > for quotes...", className: "mt-1 font-mono text-xs" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 528,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-muted-foreground mt-1", children: "Tip: Markdown headings (##), lists (- item), bold (**text**), and blockquotes (> quote) are rendered safely." }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 532,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 526,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "font-bold", children: "Images (Cover + Gallery)" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 540,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ImageUploadButton, { onUploaded: (url, alt) => {
              setEditItem((p) => ({
                ...p,
                images: [...p?.images || [], {
                  url,
                  alt,
                  caption: ""
                }]
              }));
            } }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 541,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 539,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 mt-3", children: [
            editItem.images?.map((img, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-3 items-center bg-secondary/40 p-3 rounded-xl border border-border", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: img.url, alt: img.alt, className: "h-12 w-16 object-cover rounded-lg shrink-0 bg-muted" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 555,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex-1 space-y-1", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Image URL", value: img.url, onChange: (e) => {
                  const updated = [...editItem.images || []];
                  updated[idx].url = e.target.value;
                  setEditItem((p) => ({
                    ...p,
                    images: updated
                  }));
                }, className: "h-7 text-xs" }, void 0, false, {
                  fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                  lineNumber: 557,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Alt text (required) *", value: img.alt, onChange: (e) => {
                    const updated = [...editItem.images || []];
                    updated[idx].alt = e.target.value;
                    setEditItem((p) => ({
                      ...p,
                      images: updated
                    }));
                  }, className: "h-7 text-xs" }, void 0, false, {
                    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                    lineNumber: 566,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Caption (optional)", value: img.caption || "", onChange: (e) => {
                    const updated = [...editItem.images || []];
                    updated[idx].caption = e.target.value;
                    setEditItem((p) => ({
                      ...p,
                      images: updated
                    }));
                  }, className: "h-7 text-xs" }, void 0, false, {
                    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                    lineNumber: 574,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                  lineNumber: 565,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 556,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => {
                const updated = editItem.images?.filter((_, i) => i !== idx);
                setEditItem((p) => ({
                  ...p,
                  images: updated
                }));
              }, className: "text-destructive p-1 hover:bg-destructive/10 rounded", children: "✕" }, void 0, false, {
                fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
                lineNumber: 584,
                columnNumber: 23
              }, this)
            ] }, idx, true, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 554,
              columnNumber: 55
            }, this)),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", size: "sm", onClick: () => {
              setEditItem((p) => ({
                ...p,
                images: [...p?.images || [], {
                  url: "",
                  alt: "",
                  caption: ""
                }]
              }));
            }, className: "text-xs", children: "+ Add Image URL Manually" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 594,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 553,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 538,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Publication Status" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 610,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("select", { value: editItem.status || "draft", onChange: (e) => setEditItem((p) => ({
            ...p,
            status: e.target.value
          })), className: "w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm font-semibold", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "draft", children: "Draft (Admin only)" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 615,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "published", children: "Published (Visible on site)" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 616,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "archived", children: "Archived (Hidden)" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 617,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 611,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 609,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => setEditItem(null), children: "Cancel" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 622,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: saving, className: "gap-2", children: saving ? "Saving..." : "Save Outreach Report" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 625,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 621,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 465,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 457,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 456,
      columnNumber: 20
    }, this),
    deleteItem && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: Boolean(deleteItem), onOpenChange: (open) => !open && setDeleteItem(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldAlert, { className: "h-6 w-6" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 638,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 637,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-center", children: "Permanent Deletion" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 640,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-center text-xs", children: [
          "This action cannot be undone. To permanently delete this outreach report, please type the exact title:",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "block text-foreground mt-2 font-bold p-2 bg-secondary rounded-lg select-all", children: deleteItem.title }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 643,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 641,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 636,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 pt-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Type title to confirm...", value: deleteConfirmTitle, onChange: (e) => setDeleteConfirmTitle(e.target.value), className: "text-xs" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 650,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 649,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => setDeleteItem(null), children: "Cancel" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 654,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "destructive", disabled: deleteConfirmTitle.trim() !== deleteItem.title.trim(), onClick: handleDeletePermanent, children: "Permanently Delete" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 657,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 653,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 635,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 634,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 346,
    columnNumber: 10
  }, this);
}
function TeamTab() {
  const [team, setTeam] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [editMember, setEditMember] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const loadTeam = () => {
    setLoading(true);
    getAdminTeamList().then(setTeam).catch((err) => toast.error("Error loading team: " + err.message)).finally(() => setLoading(false));
  };
  reactExports.useEffect(() => {
    loadTeam();
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!editMember?.name || !editMember.role || !editMember.department || !editMember.bio) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSaving(true);
    try {
      await saveAdminTeamMember({
        data: {
          id: editMember.id,
          name: editMember.name,
          role: editMember.role,
          department: editMember.department,
          bio: editMember.bio,
          order: editMember.order ?? team.length,
          status: editMember.status || "published",
          isFounder: editMember.isFounder,
          photo: editMember.photo
        }
      });
      toast.success("Team member saved");
      setEditMember(null);
      loadTeam();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save team member");
    } finally {
      setSaving(false);
    }
  };
  const moveOrder = async (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= team.length) return;
    const newTeam = [...team];
    const temp = newTeam[index];
    newTeam[index] = newTeam[targetIndex];
    newTeam[targetIndex] = temp;
    const items = newTeam.map((item, idx) => ({
      id: item.id,
      order: idx
    }));
    setTeam(newTeam);
    try {
      await reorderAdminTeam({
        data: {
          items
        }
      });
      toast.success("Team order updated");
    } catch {
      loadTeam();
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Team & Board Members" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 738,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage the foundation leadership, trustees, and field coordinators displayed on the About page." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 739,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 737,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => setEditMember({
        name: "",
        role: "",
        department: "Executive Leadership",
        bio: "",
        order: team.length,
        status: "published",
        isFounder: false
      }), className: "gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 752,
          columnNumber: 11
        }, this),
        " Add Team Member"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 743,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 736,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading team records..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 757,
      columnNumber: 20
    }, this) : team.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No team records found." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 757,
      columnNumber: 135
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "divide-y divide-border/60", children: team.map((member, index) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 flex items-center justify-between gap-4 hover:bg-secondary/20 transition-colors", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", disabled: index === 0, onClick: () => moveOrder(index, "up"), className: "p-1 rounded hover:bg-secondary disabled:opacity-30 cursor-pointer", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUp, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 763,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 762,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", disabled: index === team.length - 1, onClick: () => moveOrder(index, "down"), className: "p-1 rounded hover:bg-secondary disabled:opacity-30 cursor-pointer", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowDown, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 766,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 765,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 761,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-12 w-12 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0 border border-border", children: member.photo?.url ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: member.photo.url, alt: member.photo.alt || member.name, className: "h-full w-full object-cover" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 772,
          columnNumber: 42
        }, this) : member.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 771,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-foreground text-sm flex items-center gap-2", children: [
            member.name,
            member.isFounder && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent-foreground", children: "Founder" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 778,
              columnNumber: 44
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 776,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-primary font-semibold", children: member.role }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 782,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground", children: member.department }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 783,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 775,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 759,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: `rounded-full px-2.5 py-0.5 font-bold uppercase text-[10px] ${member.status === "published" ? "bg-green-500/15 text-green-700 dark:text-green-400" : "bg-muted text-muted-foreground"}`, children: member.status }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 788,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => setEditMember(member), className: "cursor-pointer", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 792,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 791,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 787,
        columnNumber: 17
      }, this)
    ] }, member.id, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 758,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 757,
      columnNumber: 229
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 756,
      columnNumber: 7
    }, this),
    editMember && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: Boolean(editMember), onOpenChange: (open) => !open && setEditMember(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: editMember.id ? "Edit Team Member" : "Add Team Member" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 803,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { children: "Enter full official details and profile photo." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 804,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 802,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Full Name *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 809,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editMember.name || "", onChange: (e) => setEditMember((p) => ({
            ...p,
            name: e.target.value
          })), placeholder: "e.g. Dr. Ngozi Eze", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 810,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 808,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Role / Title *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 817,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editMember.role || "", onChange: (e) => setEditMember((p) => ({
            ...p,
            role: e.target.value
          })), placeholder: "e.g. Director of Programs", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 818,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 816,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Department *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 825,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editMember.department || "", onChange: (e) => setEditMember((p) => ({
            ...p,
            department: e.target.value
          })), placeholder: "e.g. Program Management", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 826,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 824,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Biographical Summary *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 833,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { required: true, rows: 4, value: editMember.bio || "", onChange: (e) => setEditMember((p) => ({
            ...p,
            bio: e.target.value
          })), placeholder: "2-4 sentences describing their professional background...", className: "mt-1 text-sm" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 834,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 832,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Photo URL" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 843,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ImageUploadButton, { onUploaded: (url, alt) => {
              setEditMember((p) => ({
                ...p,
                photo: {
                  url,
                  alt: alt || editMember.name || "Photo"
                }
              }));
            } }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 844,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 842,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Paste URL or upload using button above", value: editMember.photo?.url || "", onChange: (e) => {
            const url = e.target.value;
            setEditMember((p) => ({
              ...p,
              photo: url ? {
                url,
                alt: p?.name || "Team Member"
              } : void 0
            }));
          }, className: "text-xs" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 854,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 841,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { type: "checkbox", id: "isFounder", checked: Boolean(editMember.isFounder), onChange: (e) => setEditMember((p) => ({
            ...p,
            isFounder: e.target.checked
          })), className: "h-4 w-4 rounded border-gray-300 text-primary" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 867,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "isFounder", className: "cursor-pointer font-medium", children: "Mark as Founder & Board Chairman" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 871,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 866,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Status" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 877,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("select", { value: editMember.status || "published", onChange: (e) => setEditMember((p) => ({
            ...p,
            status: e.target.value
          })), className: "w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm font-semibold", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "published", children: "Published" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 882,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "draft", children: "Draft" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 883,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "archived", children: "Archived" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 884,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 878,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 876,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => setEditMember(null), children: "Cancel" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 889,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: saving, children: saving ? "Saving..." : "Save Member" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 892,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 888,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 807,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 801,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 800,
      columnNumber: 22
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 735,
    columnNumber: 10
  }, this);
}
function DonationTab() {
  const [settings, setSettings] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [confirmOpen, setConfirmOpen] = reactExports.useState(false);
  const [confirmedAccountInput, setConfirmedAccountInput] = reactExports.useState("");
  const [formBankName, setFormBankName] = reactExports.useState("");
  const [formAccountName, setFormAccountName] = reactExports.useState("");
  const [formAccountNumber, setFormAccountNumber] = reactExports.useState("");
  const [formAccountType, setFormAccountType] = reactExports.useState("");
  const [formExtraNote, setFormExtraNote] = reactExports.useState("");
  const [formSuggestedAmounts, setFormSuggestedAmounts] = reactExports.useState("5000, 15000, 35000, 75000, 150000");
  const loadSettings = () => {
    setLoading(true);
    getAdminDonationSettings().then((data) => {
      setSettings(data);
      setFormBankName(data.bankName || "");
      setFormAccountName(data.accountName || "");
      setFormAccountNumber(data.accountNumber || "");
      setFormAccountType(data.accountType || "");
      setFormExtraNote(data.extraNote || "");
      setFormSuggestedAmounts((data.suggestedAmounts || [5e3, 15e3, 35e3, 75e3, 15e4]).join(", "));
    }).catch((err) => toast.error("Error loading donation settings: " + err.message)).finally(() => setLoading(false));
  };
  reactExports.useEffect(() => {
    loadSettings();
  }, []);
  const handleOpenConfirm = (e) => {
    e.preventDefault();
    const cleanNumber = formAccountNumber.replace(/\s+/g, "");
    if (cleanNumber && cleanNumber.length !== 10) {
      toast.warning("Notice: Nigerian NUBAN bank accounts are typically 10 digits.");
    }
    setConfirmedAccountInput("");
    setConfirmOpen(true);
  };
  const handleSaveConfirmed = async () => {
    const cleanNumber = formAccountNumber.replace(/\s+/g, "");
    const cleanConfirm = confirmedAccountInput.replace(/\s+/g, "");
    if (cleanNumber && cleanNumber !== cleanConfirm) {
      toast.error("Confirmation account number does not match.");
      return;
    }
    const amounts = formSuggestedAmounts.split(",").map((s) => Number(s.trim())).filter((n) => !isNaN(n) && n > 0);
    setSaving(true);
    try {
      await saveAdminDonationSettings({
        data: {
          bankName: formBankName,
          accountName: formAccountName,
          accountNumber: cleanNumber,
          accountType: formAccountType,
          extraNote: formExtraNote,
          suggestedAmounts: amounts.length > 0 ? amounts : [5e3, 15e3, 35e3, 75e3, 15e4],
          confirmedAccountNumber: cleanConfirm
        }
      });
      toast.success("Bank details updated and security alert dispatched.");
      setConfirmOpen(false);
      loadSettings();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update bank details");
    } finally {
      setSaving(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading donation settings..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 975,
      columnNumber: 12
    }, this);
  }
  const oldMasked = maskAccountNumber(settings?.accountNumber);
  const newMasked = maskAccountNumber(formAccountNumber);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Official Bank Account & Donation Details" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 981,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "These details are displayed in the global donation popup and on the /donate page." }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 982,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 980,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-primary/20 bg-primary-soft/30 p-4 flex items-start gap-3 text-xs text-foreground/90", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldAlert, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 989,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Security Notice:" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 991,
          columnNumber: 11
        }, this),
        " Any modification to the foundation bank account number requires two-step re-entry confirmation and automatically sends an email security alert to all authorized admin email addresses."
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 990,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 988,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleOpenConfirm, className: "rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Bank Name" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 998,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formBankName, onChange: (e) => setFormBankName(e.target.value), placeholder: "e.g. Zenith Bank Plc", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 999,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 997,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Account Name" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1002,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formAccountName, onChange: (e) => setFormAccountName(e.target.value), placeholder: "e.g. Envo Peace and Development Foundation", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1003,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1001,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 996,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Account Number (Digits only)" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1009,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formAccountNumber, onChange: (e) => setFormAccountNumber(e.target.value.replace(/[^\d\s]/g, "")), placeholder: "e.g. 1012345678", className: "mt-1 font-mono text-base font-bold tracking-wider" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1010,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-muted-foreground mt-1", children: [
            "Current Active: ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: oldMasked }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1012,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1011,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1008,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Account Type Note (Optional)" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1016,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formAccountType, onChange: (e) => setFormAccountType(e.target.value), placeholder: "e.g. Official NGO Operational Account", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1017,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1015,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1007,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Extra Note / Guidance for Donors" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1022,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { rows: 2, value: formExtraNote, onChange: (e) => setFormExtraNote(e.target.value), placeholder: "e.g. Please include your name or 'Donation' in the transfer narration for swift reconciliation.", className: "mt-1 text-sm" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1023,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1021,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Suggested Amounts in Naira (Comma-separated)" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1027,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: formSuggestedAmounts, onChange: (e) => setFormSuggestedAmounts(e.target.value), placeholder: "5000, 15000, 35000, 75000, 150000", className: "mt-1 text-xs font-mono" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1028,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1026,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "pt-4 border-t border-border flex justify-end", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", className: "gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheckBig, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1033,
          columnNumber: 13
        }, this),
        " Save Bank Details"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1032,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1031,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 995,
      columnNumber: 7
    }, this),
    confirmOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: confirmOpen, onOpenChange: setConfirmOpen, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 mb-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-6 w-6" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1043,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1042,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-center", children: "Confirm Bank Account Modification" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1045,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-center text-xs", children: "Please verify the account change. An alert email will be sent to all administrators." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1046,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1041,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3 pt-2 text-xs", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-border bg-secondary/40 p-3 space-y-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-muted-foreground", children: "Previous Account:" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1054,
              columnNumber: 19
            }, this),
            " ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: oldMasked }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1054,
              columnNumber: 84
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1053,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-muted-foreground", children: "New Account:" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1057,
              columnNumber: 19
            }, this),
            " ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-primary font-bold", children: newMasked }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1057,
              columnNumber: 79
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1056,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-muted-foreground", children: "Bank:" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1060,
              columnNumber: 19
            }, this),
            " ",
            formBankName || "None"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1059,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1052,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { className: "font-bold text-foreground", children: "Re-enter Account Number to Confirm *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1065,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, placeholder: "Re-type new account number...", value: confirmedAccountInput, onChange: (e) => setConfirmedAccountInput(e.target.value), className: "mt-1 font-mono text-sm font-bold" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1068,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1064,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1051,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => setConfirmOpen(false), children: "Cancel" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1073,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", disabled: saving || formAccountNumber.trim() !== "" && confirmedAccountInput.trim() !== formAccountNumber.trim(), onClick: handleSaveConfirmed, className: "gap-2", children: saving ? "Saving & Alerting..." : "Confirm & Apply" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1076,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1072,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1040,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1039,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 979,
    columnNumber: 10
  }, this);
}
function SiteTab() {
  const [site, setSite] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    getAdminSiteSettings().then(setSite).catch((err) => toast.error("Error loading site settings: " + err.message)).finally(() => setLoading(false));
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!site) return;
    setSaving(true);
    try {
      await saveAdminSiteSettings({
        data: {
          phone: site.phone,
          email: site.email,
          address: site.address,
          officeHours: site.officeHours,
          socials: site.socials || {},
          announcement: site.announcement || {
            enabled: false,
            text: ""
          }
        }
      });
      toast.success("Site settings and announcement updated");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update site settings");
    } finally {
      setSaving(false);
    }
  };
  if (loading || !site) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading site settings..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1122,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Site & Secretariat Settings" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage foundation secretariat contact details, social links, and the top announcement banner." }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1127,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-6", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border-2 border-primary/30 bg-card p-6 shadow-soft space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Top Announcement Banner" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1137,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Displays a prominent bar at the very top of all public pages." }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1138,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1136,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { type: "checkbox", id: "bannerEnabled", checked: site.announcement?.enabled || false, onChange: (e) => setSite((p) => p ? {
              ...p,
              announcement: {
                ...p.announcement,
                enabled: e.target.checked
              }
            } : null), className: "h-5 w-5 rounded border-gray-300 text-primary cursor-pointer" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1143,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "bannerEnabled", className: "font-bold text-sm cursor-pointer", children: site.announcement?.enabled ? "Banner Active" : "Disabled" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1150,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1142,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Announcement Message" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1157,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.announcement?.text || "", onChange: (e) => setSite((p) => p ? {
            ...p,
            announcement: {
              ...p.announcement,
              text: e.target.value
            }
          } : null), placeholder: "e.g. Registration for August 2026 Youth Vocational Cohort is now open!", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1158,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Action Link Label (Optional)" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1169,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.announcement?.linkLabel || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              announcement: {
                ...p.announcement,
                linkLabel: e.target.value
              }
            } : null), placeholder: "e.g. Apply Now or Read Details", className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1170,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Action Link URL (Optional)" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1179,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.announcement?.linkUrl || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              announcement: {
                ...p.announcement,
                linkUrl: e.target.value
              }
            } : null), placeholder: "e.g. /get-involved or /outreach", className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1180,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1178,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1167,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Secretariat Contact Information" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1193,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Official Phone Number *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1197,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: site.phone || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              phone: e.target.value
            } : null), className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1198,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Official Email Address *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1204,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, type: "email", value: site.email || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              email: e.target.value
            } : null), className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1205,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1203,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Physical Secretariat Address *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1213,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: site.address || "", onChange: (e) => setSite((p) => p ? {
            ...p,
            address: e.target.value
          } : null), className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1214,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1212,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Office Operating Hours" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1221,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.officeHours || "", onChange: (e) => setSite((p) => p ? {
            ...p,
            officeHours: e.target.value
          } : null), className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1222,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1220,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1192,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Social Media Profile Links" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1231,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Facebook URL" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1235,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.socials?.facebook || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              socials: {
                ...p.socials,
                facebook: e.target.value
              }
            } : null), className: "mt-1 text-xs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1236,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1234,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "X (Twitter) URL" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1245,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.socials?.x || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              socials: {
                ...p.socials,
                x: e.target.value
              }
            } : null), className: "mt-1 text-xs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1246,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1244,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Instagram URL" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1255,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.socials?.instagram || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              socials: {
                ...p.socials,
                instagram: e.target.value
              }
            } : null), className: "mt-1 text-xs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1256,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1254,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "LinkedIn URL" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1265,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.socials?.linkedin || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              socials: {
                ...p.socials,
                linkedin: e.target.value
              }
            } : null), className: "mt-1 text-xs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1266,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1264,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "YouTube URL" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1275,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: site.socials?.youtube || "", onChange: (e) => setSite((p) => p ? {
              ...p,
              socials: {
                ...p.socials,
                youtube: e.target.value
              }
            } : null), className: "mt-1 text-xs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1276,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1274,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1233,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1230,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: saving, className: "gap-2", children: saving ? "Saving..." : "Save Site Settings" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1288,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1287,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1132,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 1124,
    columnNumber: 10
  }, this);
}
function HomeTab() {
  const [home, setHome] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    getAdminHomeSettings().then(setHome).catch((err) => toast.error("Error loading home settings: " + err.message)).finally(() => setLoading(false));
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!home) return;
    setSaving(true);
    try {
      await saveAdminHomeSettings({
        data: {
          heroHeadline: home.heroHeadline || "",
          heroSubline: home.heroSubline || "",
          headlineStats: home.headlineStats || []
        }
      });
      toast.success("Homepage content updated");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update homepage");
    } finally {
      setSaving(false);
    }
  };
  if (loading || !home) {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading homepage settings..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1327,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6 max-w-3xl", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Homepage Hero & Key Metrics" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1331,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Customize the main landing hero messaging and headline impact statistics." }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1332,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1330,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-6", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Hero Text" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1339,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Hero Headline (Leave empty to use built-in default)" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1342,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: home.heroHeadline || "", onChange: (e) => setHome((p) => p ? {
            ...p,
            heroHeadline: e.target.value
          } : null), placeholder: "Building peaceful communities and sustainable opportunities across Ebonyi State.", className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1343,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1341,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Hero Subline" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1350,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { rows: 3, value: home.heroSubline || "", onChange: (e) => setHome((p) => p ? {
            ...p,
            heroSubline: e.target.value
          } : null), placeholder: "A community-rooted NGO in Abakaliki, Ebonyi State advancing grassroots peace...", className: "mt-1 text-sm" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1351,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1349,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1338,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Homepage Headline Stats" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1361,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", size: "sm", onClick: () => {
            setHome((p) => p ? {
              ...p,
              headlineStats: [...p.headlineStats || [], {
                value: "100+",
                label: "New Metric",
                asOf: "2026"
              }]
            } : null);
          }, className: "text-xs", children: "+ Add Stat" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1362,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1360,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-3", children: home.headlineStats?.map((stat, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-3 items-center bg-secondary/40 p-3 rounded-xl border border-border", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Value (e.g. 5,200)", value: stat.value, onChange: (e) => {
            const updated = [...home.headlineStats || []];
            updated[idx].value = e.target.value;
            setHome((p) => p ? {
              ...p,
              headlineStats: updated
            } : null);
          }, className: "w-28 text-xs font-bold font-mono" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1378,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "Label (e.g. Households Supported)", value: stat.label, onChange: (e) => {
            const updated = [...home.headlineStats || []];
            updated[idx].label = e.target.value;
            setHome((p) => p ? {
              ...p,
              headlineStats: updated
            } : null);
          }, className: "flex-1 text-xs" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1386,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { placeholder: "As of (e.g. April 2026)", value: stat.asOf, onChange: (e) => {
            const updated = [...home.headlineStats || []];
            updated[idx].asOf = e.target.value;
            setHome((p) => p ? {
              ...p,
              headlineStats: updated
            } : null);
          }, className: "w-32 text-xs" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1394,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => {
            const updated = home.headlineStats?.filter((_, i) => i !== idx);
            setHome((p) => p ? {
              ...p,
              headlineStats: updated
            } : null);
          }, className: "text-destructive p-1 hover:bg-destructive/10 rounded", children: "✕" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1402,
            columnNumber: 17
          }, this)
        ] }, idx, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1377,
          columnNumber: 53
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1376,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1359,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: saving, children: saving ? "Saving..." : "Save Homepage Content" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1416,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1415,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1337,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 1329,
    columnNumber: 10
  }, this);
}
function StoriesTab() {
  const [stories, setStories] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [editStory, setEditStory] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const load = () => {
    setLoading(true);
    getAdminStoriesList().then(setStories).catch((err) => toast.error(err.message)).finally(() => setLoading(false));
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!editStory?.title || !editStory.beneficiary || !editStory.quote) {
      toast.error("Please fill required fields");
      return;
    }
    setSaving(true);
    try {
      await saveAdminStory({
        data: {
          id: editStory.id,
          title: editStory.title,
          beneficiary: editStory.beneficiary,
          location: editStory.location || "Ebonyi State",
          program: editStory.program || "Outreach",
          programSlug: editStory.programSlug || "outreach",
          summary: editStory.summary || "",
          quote: editStory.quote,
          outcomes: editStory.outcomes || [],
          asOf: editStory.asOf || "2026",
          order: editStory.order ?? stories.length,
          status: editStory.status || "published"
        }
      });
      toast.success("Story saved");
      setEditStory(null);
      load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save story");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Impact Stories" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1476,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Beneficiary quotes and verified case studies." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1477,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1475,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => setEditStory({
        title: "",
        beneficiary: "",
        location: "Ishielu LGA",
        program: "Outreach Programs",
        programSlug: "outreach",
        summary: "",
        quote: "",
        outcomes: [""],
        asOf: "April 2026",
        order: stories.length,
        status: "published"
      }), className: "gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1492,
          columnNumber: 11
        }, this),
        " Add Story"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1479,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1474,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading stories..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1497,
      columnNumber: 20
    }, this) : stories.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No stories in database yet. Built-in defaults are active." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1497,
      columnNumber: 133
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "divide-y divide-border/60", children: stories.map((s) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 flex items-center justify-between hover:bg-secondary/20", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-foreground text-sm", children: s.title }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1500,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground italic", children: [
          "“",
          s.quote.slice(0, 80),
          "...”"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1501,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-primary font-semibold mt-1", children: [
          s.beneficiary,
          " • ",
          s.location,
          " (",
          s.program,
          ")"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1502,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1499,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-primary/10 text-primary", children: s.status }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1507,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", onClick: () => setEditStory(s), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1511,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1510,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1506,
        columnNumber: 17
      }, this)
    ] }, s.id, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1498,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1497,
      columnNumber: 262
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1496,
      columnNumber: 7
    }, this),
    editStory && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: Boolean(editStory), onOpenChange: (open) => !open && setEditStory(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: editStory.id ? "Edit Story" : "Add Beneficiary Story" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1521,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1520,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Title *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1526,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editStory.title || "", onChange: (e) => setEditStory((p) => ({
            ...p,
            title: e.target.value
          })), className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1527,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1525,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Beneficiary Name *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1534,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editStory.beneficiary || "", onChange: (e) => setEditStory((p) => ({
              ...p,
              beneficiary: e.target.value
            })), className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1535,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1533,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Location *" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1541,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editStory.location || "", onChange: (e) => setEditStory((p) => ({
              ...p,
              location: e.target.value
            })), className: "mt-1" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1542,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1540,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1532,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Direct Quote *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1549,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { required: true, rows: 3, value: editStory.quote || "", onChange: (e) => setEditStory((p) => ({
            ...p,
            quote: e.target.value
          })), className: "mt-1 text-sm" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1550,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1548,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Summary" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1556,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { rows: 2, value: editStory.summary || "", onChange: (e) => setEditStory((p) => ({
            ...p,
            summary: e.target.value
          })), className: "mt-1 text-sm" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1557,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1555,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => setEditStory(null), children: "Cancel" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1563,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: saving, children: saving ? "Saving..." : "Save Story" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1566,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1562,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1524,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1519,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1518,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 1473,
    columnNumber: 10
  }, this);
}
function FaqsTab() {
  const [faqs, setFaqs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [editFaq, setEditFaq] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const load = () => {
    setLoading(true);
    getAdminFaqsList().then(setFaqs).catch((err) => toast.error(err.message)).finally(() => setLoading(false));
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!editFaq?.question || !editFaq.answer) return;
    setSaving(true);
    try {
      await saveAdminFaq({
        data: {
          id: editFaq.id,
          question: editFaq.question,
          answer: editFaq.answer,
          programSlug: editFaq.programSlug || "general",
          order: editFaq.order ?? faqs.length,
          status: editFaq.status || "published"
        }
      });
      toast.success("FAQ saved");
      setEditFaq(null);
      load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save FAQ");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Frequently Asked Questions" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1614,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Questions and answers displayed on program and support pages." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1615,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1613,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => setEditFaq({
        question: "",
        answer: "",
        programSlug: "general",
        order: faqs.length,
        status: "published"
      }), className: "gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1624,
          columnNumber: 11
        }, this),
        " Add FAQ"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1617,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1612,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading FAQs..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1629,
      columnNumber: 20
    }, this) : faqs.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No FAQs in database yet. Built-in defaults are active." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1629,
      columnNumber: 127
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "divide-y divide-border/60", children: faqs.map((f) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 flex items-center justify-between hover:bg-secondary/20", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "pr-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-foreground text-sm", children: f.question }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1632,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground line-clamp-2 mt-0.5", children: f.answer }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1633,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[10px] text-primary font-bold uppercase mt-1", children: [
          "Pillar: ",
          f.programSlug
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1634,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1631,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", onClick: () => setEditFaq(f), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1637,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1636,
        columnNumber: 17
      }, this)
    ] }, f.id, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1630,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1629,
      columnNumber: 253
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1628,
      columnNumber: 7
    }, this),
    editFaq && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: Boolean(editFaq), onOpenChange: (open) => !open && setEditFaq(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: editFaq.id ? "Edit FAQ" : "Add FAQ" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1646,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1645,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Question *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1651,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editFaq.question || "", onChange: (e) => setEditFaq((p) => ({
            ...p,
            question: e.target.value
          })), className: "mt-1" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1652,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1650,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Answer *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1658,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { required: true, rows: 4, value: editFaq.answer || "", onChange: (e) => setEditFaq((p) => ({
            ...p,
            answer: e.target.value
          })), className: "mt-1 text-sm" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1659,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1657,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Program Slug" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1665,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("select", { value: editFaq.programSlug || "general", onChange: (e) => setEditFaq((p) => ({
            ...p,
            programSlug: e.target.value
          })), className: "w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "general", children: "General / All" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1670,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "outreach", children: "Outreach Programs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1671,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "education", children: "Educational Support" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1672,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "healthcare", children: "Healthcare Assistance" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1673,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "youth", children: "Youth Empowerment" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1674,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "community", children: "Community Development" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1675,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1666,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1664,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => setEditFaq(null), children: "Cancel" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1679,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: saving, children: saving ? "Saving..." : "Save FAQ" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1682,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1678,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1649,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1644,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1643,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 1611,
    columnNumber: 10
  }, this);
}
function GalleryTab() {
  const [gallery, setGallery] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [editItem, setEditItem] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const load = () => {
    setLoading(true);
    getAdminGalleryList().then(setGallery).catch((err) => toast.error(err.message)).finally(() => setLoading(false));
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const handleSave = async (e) => {
    e.preventDefault();
    if (!editItem?.src || !editItem.alt) {
      toast.error("Image URL and Alt text are required");
      return;
    }
    setSaving(true);
    try {
      await saveAdminGalleryItem({
        data: {
          id: editItem.id,
          src: editItem.src,
          alt: editItem.alt,
          caption: editItem.caption || "",
          programSlug: editItem.programSlug || "general",
          order: editItem.order ?? gallery.length,
          status: editItem.status || "published"
        }
      });
      toast.success("Gallery photo saved");
      setEditItem(null);
      load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save photo");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Photo Gallery" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1734,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Uploaded field pictures and community event photography." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1735,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1733,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { onClick: () => setEditItem({
        src: "",
        alt: "",
        caption: "",
        programSlug: "general",
        order: gallery.length,
        status: "published"
      }), className: "gap-2 cursor-pointer", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Plus, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1745,
          columnNumber: 11
        }, this),
        " Add Photo"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1737,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1732,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground col-span-3", children: "Loading gallery..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1750,
      columnNumber: 20
    }, this) : gallery.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground col-span-3", children: "No photos uploaded to database yet. Built-in defaults are active." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1750,
      columnNumber: 144
    }, this) : gallery.map((g) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft flex flex-col", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "aspect-[4/3] bg-muted overflow-hidden", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: g.src, alt: g.alt, className: "h-full w-full object-cover" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1752,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1751,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-4 flex-1 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-bold text-xs text-foreground line-clamp-1", children: g.alt }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1756,
            columnNumber: 19
          }, this),
          g.caption && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[11px] text-muted-foreground italic line-clamp-2 mt-1", children: g.caption }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1757,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1755,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 flex items-center justify-between pt-2 border-t border-border/40", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] uppercase font-bold text-primary", children: g.programSlug }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1760,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { variant: "ghost", size: "sm", onClick: () => setEditItem(g), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Pen, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1762,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1761,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1759,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1754,
        columnNumber: 15
      }, this)
    ] }, g.id, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1750,
      columnNumber: 309
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1749,
      columnNumber: 7
    }, this),
    editItem && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: Boolean(editItem), onOpenChange: (open) => !open && setEditItem(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-md max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { children: editItem.id ? "Edit Photo" : "Add Photo" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1772,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1771,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSave, className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Image Source" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1777,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ImageUploadButton, { onUploaded: (url, alt) => {
            setEditItem((p) => ({
              ...p,
              src: url,
              alt: alt || p?.alt || "Gallery Image"
            }));
          } }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1778,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1776,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, placeholder: "Image URL...", value: editItem.src || "", onChange: (e) => setEditItem((p) => ({
          ...p,
          src: e.target.value
        })), className: "text-xs" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1786,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Alt Description (Required for Accessibility) *" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1792,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { required: true, value: editItem.alt || "", onChange: (e) => setEditItem((p) => ({
            ...p,
            alt: e.target.value
          })), placeholder: "e.g. Beneficiaries receiving textbooks in Abakaliki", className: "mt-1 text-xs" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1793,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1791,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Caption (Optional)" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1800,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { value: editItem.caption || "", onChange: (e) => setEditItem((p) => ({
            ...p,
            caption: e.target.value
          })), placeholder: "e.g. Annual educational distribution day.", className: "mt-1 text-xs" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1801,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1799,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { children: "Program Pillar" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1808,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("select", { value: editItem.programSlug || "general", onChange: (e) => setEditItem((p) => ({
            ...p,
            programSlug: e.target.value
          })), className: "w-full mt-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "general", children: "General Foundation" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1813,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "outreach", children: "Outreach Programs" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1814,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "education", children: "Educational Support" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1815,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "healthcare", children: "Healthcare Assistance" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1816,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "youth", children: "Youth Empowerment" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1817,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("option", { value: "community", children: "Community Development" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1818,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1809,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1807,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "ghost", onClick: () => setEditItem(null), children: "Cancel" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1823,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", disabled: saving, children: saving ? "Saving..." : "Save Photo" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1826,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1822,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1775,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1770,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1769,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 1731,
    columnNumber: 10
  }, this);
}
function InboxTab() {
  const [messages, setMessages] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [filter, setFilter] = reactExports.useState("unread");
  const [activeMessage, setActiveMessage] = reactExports.useState(null);
  const load = () => {
    setLoading(true);
    getAdminMessages().then(setMessages).catch((err) => toast.error(err.message)).finally(() => setLoading(false));
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const filtered = messages.filter((m) => {
    if (filter === "unread") return !m.read && !m.archived;
    if (filter === "archived") return Boolean(m.archived);
    return !m.archived;
  });
  const handleToggleRead = async (msg) => {
    const newStatus = !msg.read;
    try {
      await updateAdminMessageStatus({
        data: {
          id: msg.id,
          read: newStatus
        }
      });
      setMessages((p) => p.map((m) => m.id === msg.id ? {
        ...m,
        read: newStatus
      } : m));
      toast.success(newStatus ? "Marked as read" : "Marked as unread");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update");
    }
  };
  const handleToggleArchive = async (msg) => {
    const newArchived = !msg.archived;
    try {
      await updateAdminMessageStatus({
        data: {
          id: msg.id,
          archived: newArchived
        }
      });
      setMessages((p) => p.map((m) => m.id === msg.id ? {
        ...m,
        archived: newArchived
      } : m));
      setActiveMessage(null);
      toast.success(newArchived ? "Archived message" : "Restored from archive");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to archive");
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Form Inquiries Inbox" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1897,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Incoming contact messages, volunteer applications, and partnership inquiries submitted through site forms." }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1898,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1896,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex gap-1.5 bg-card p-1 rounded-xl border border-border", children: ["unread", "all", "archived"].map((f) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setFilter(f), className: `px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: f }, f, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1903,
        columnNumber: 62
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1902,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1895,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading inbox messages..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1910,
      columnNumber: 20
    }, this) : filtered.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No messages found in this category." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1910,
      columnNumber: 141
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "divide-y divide-border/60", children: filtered.map((msg) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { onClick: () => {
      setActiveMessage(msg);
      if (!msg.read) handleToggleRead(msg);
    }, className: `p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors cursor-pointer ${!msg.read ? "bg-primary/5 hover:bg-primary/10 font-medium" : "hover:bg-secondary/20"}`, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
          !msg.read && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "h-2 w-2 rounded-full bg-primary shrink-0" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1917,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "font-bold text-foreground text-sm", children: msg.name }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1918,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground uppercase", children: msg.reason || "General" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1919,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1916,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground line-clamp-1", children: msg.message }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1923,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1915,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 text-xs text-muted-foreground shrink-0 font-mono", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: new Date(msg.createdAt).toLocaleDateString() }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1927,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${msg.email}`, onClick: (e) => e.stopPropagation(), className: "p-1.5 rounded-lg text-primary hover:bg-primary-soft", title: "Send Email", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1929,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1928,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1926,
        columnNumber: 17
      }, this)
    ] }, msg.id, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1911,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1910,
      columnNumber: 248
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1909,
      columnNumber: 7
    }, this),
    activeMessage && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: Boolean(activeMessage), onOpenChange: (open) => !open && setActiveMessage(null), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 text-xs font-bold text-primary uppercase", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
            "Category: ",
            activeMessage.reason || "General Inquiry"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1941,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "•" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1942,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: new Date(activeMessage.createdAt).toLocaleString() }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1943,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1940,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-bold mt-1", children: activeMessage.name }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1945,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1939,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pt-2 text-sm", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-border bg-secondary/30 p-3 space-y-1.5 text-xs", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-3.5 w-3.5 text-primary shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1951,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${activeMessage.email}`, className: "font-bold text-primary hover:underline", children: activeMessage.email }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1952,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1950,
            columnNumber: 17
          }, this),
          activeMessage.phone && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { className: "h-3.5 w-3.5 text-primary shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1957,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `tel:${activeMessage.phone}`, className: "font-semibold text-foreground", children: activeMessage.phone }, void 0, false, {
              fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
              lineNumber: 1958,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1956,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1949,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1", children: "Message" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1965,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-border bg-card p-4 text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed", children: activeMessage.message }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1966,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1964,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1948,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogFooter, { className: "gap-2 sm:gap-0", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", variant: "outline", size: "sm", onClick: () => handleToggleArchive(activeMessage), className: "text-xs gap-1.5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Archive, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1974,
            columnNumber: 17
          }, this),
          activeMessage.archived ? "Restore to Inbox" : "Archive"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1973,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "default", size: "sm", className: "gap-1.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${activeMessage.email}`, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-3.5 w-3.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 1979,
            columnNumber: 19
          }, this),
          " Reply by Email"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1978,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 1977,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 1972,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1938,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1937,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 1894,
    columnNumber: 10
  }, this);
}
function AuditTab() {
  const [logs, setLogs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    getAdminAuditLogs().then(setLogs).catch((err) => toast.error(err.message)).finally(() => setLoading(false));
  }, []);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-extrabold text-foreground tracking-tight", children: "Security & Audit Activity Log" }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 2e3,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm text-muted-foreground mt-1", children: "Immutable audit trail of the latest 100 administrative actions, logins, and content updates." }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 2001,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 1999,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card overflow-hidden shadow-soft", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "Loading audit records..." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2007,
      columnNumber: 20
    }, this) : logs.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "p-8 text-center text-sm text-muted-foreground", children: "No audit entries recorded yet." }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2007,
      columnNumber: 136
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("table", { className: "w-full text-left text-xs", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("thead", { className: "bg-secondary/50 text-muted-foreground font-bold uppercase tracking-wider border-b border-border", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Timestamp" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2011,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Action" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2012,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Target / Summary" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2013,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("th", { className: "p-4", children: "Admin Email" }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2014,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 2010,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 2009,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tbody", { className: "divide-y divide-border/60 font-mono text-[11px]", children: logs.map((log) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("tr", { className: "hover:bg-secondary/20", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4 text-muted-foreground whitespace-nowrap", children: new Date(log.timestamp).toLocaleString() }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2019,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4 font-bold text-primary uppercase", children: log.action }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2022,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4 font-sans text-xs text-foreground/90", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: log.target }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 2025,
            columnNumber: 25
          }, this),
          log.afterSummary && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-muted-foreground text-[11px] mt-0.5", children: log.afterSummary }, void 0, false, {
            fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
            lineNumber: 2026,
            columnNumber: 46
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2024,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2023,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("td", { className: "p-4 text-muted-foreground", children: log.adminEmail }, void 0, false, {
          fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
          lineNumber: 2029,
          columnNumber: 21
        }, this)
      ] }, log.id, true, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 2018,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
        lineNumber: 2017,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2008,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2007,
      columnNumber: 238
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2006,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 1998,
    columnNumber: 10
  }, this);
}
function ImageUploadButton({
  onUploaded
}) {
  const [uploading, setUploading] = reactExports.useState(false);
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File exceeds 5MB limit before processing");
      return;
    }
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      toast.error("Please select a JPEG, PNG, or WebP image");
      return;
    }
    setUploading(true);
    try {
      const base64 = await resizeImageToWebP(file, 1600, 0.8);
      const altPrompt = window.prompt("Enter an accessible description (alt text) for this image:", file.name.replace(/\.[^/.]+$/, ""));
      const altText = altPrompt?.trim() || "Field mission photography";
      const res = await uploadAdminImage({
        data: {
          base64Data: base64,
          contentType: "image/webp",
          alt: altText
        }
      });
      if (res.success && res.url) {
        toast.success("Image uploaded successfully");
        onUploaded(res.url, altText);
      }
    } catch (err) {
      console.error("Upload error:", err);
      toast.error(err instanceof Error ? err.message : "Upload failed. You can paste an image URL instead.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/80 hover:bg-secondary text-xs font-semibold text-foreground cursor-pointer shadow-sm", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Upload, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2091,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: uploading ? "Processing..." : "Upload Image" }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2092,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { type: "file", accept: "image/jpeg,image/png,image/webp", onChange: handleFileChange, disabled: uploading, className: "hidden" }, void 0, false, {
      fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
      lineNumber: 2093,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/hq-9f3k.tsx?tsr-split=component",
    lineNumber: 2090,
    columnNumber: 10
  }, this);
}
function resizeImageToWebP(file, maxDimension, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDimension) {
            height = Math.round(height * maxDimension / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round(width * maxDimension / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas context could not be created"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/webp", quality);
        const base64 = dataUrl.split(",")[1];
        resolve(base64);
      };
      img.onerror = reject;
      img.src = e.target?.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
export {
  AdminDashboardPage as component
};
