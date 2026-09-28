import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, B as Button } from "./router-BzaOfFLl.mjs";
import { P as PageHero } from "./PageHero-BeaMsYMN.mjs";
import { I as Input } from "./input-DwX46eUj.mjs";
import { L as Label, T as Textarea } from "./label-RR8mAOhH.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-EoEZHlrw.mjs";
import { s as submitInquiryForm } from "./server-fn-DCxyf3ss.mjs";
import { s as siteConfig } from "./about-founder-CCLG_U39.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { U as Users, B as Building2, m as CircleCheck, k as CircleAlert, v as Send } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
function GetInvolvedPage() {
  const [activeTab, setActiveTab] = reactExports.useState("volunteer");
  const [volName, setVolName] = reactExports.useState("");
  const [volEmail, setVolEmail] = reactExports.useState("");
  const [volPhone, setVolPhone] = reactExports.useState("");
  const [volLga, setVolLga] = reactExports.useState("");
  const [volSkill, setVolSkill] = reactExports.useState("medical");
  const [volMessage, setVolMessage] = reactExports.useState("");
  const [volHoneypot, setVolHoneypot] = reactExports.useState("");
  const [volLoading, setVolLoading] = reactExports.useState(false);
  const [volSuccess, setVolSuccess] = reactExports.useState(null);
  const [volError, setVolError] = reactExports.useState(null);
  const [partnerName, setPartnerName] = reactExports.useState("");
  const [partnerOrg, setPartnerOrg] = reactExports.useState("");
  const [partnerEmail, setPartnerEmail] = reactExports.useState("");
  const [partnerPhone, setPartnerPhone] = reactExports.useState("");
  const [partnerArea, setPartnerArea] = reactExports.useState("water");
  const [partnerMessage, setPartnerMessage] = reactExports.useState("");
  const [partnerHoneypot, setPartnerHoneypot] = reactExports.useState("");
  const [partnerLoading, setPartnerLoading] = reactExports.useState(false);
  const [partnerSuccess, setPartnerSuccess] = reactExports.useState(null);
  const [partnerError, setPartnerError] = reactExports.useState(null);
  async function handleVolunteerSubmit(e) {
    e.preventDefault();
    setVolLoading(true);
    setVolError(null);
    setVolSuccess(null);
    try {
      const res = await submitInquiryForm({
        data: {
          formType: "volunteer",
          name: volName,
          email: volEmail,
          phone: volPhone,
          category: `${volSkill} (LGA: ${volLga || "Not specified"})`,
          message: volMessage,
          honeypot: volHoneypot
        }
      });
      if (res.success) {
        setVolSuccess(res.message || "Your volunteer registration has been received.");
        setVolName("");
        setVolEmail("");
        setVolPhone("");
        setVolLga("");
        setVolMessage("");
      } else {
        setVolError(res.error || "Unable to submit registration.");
      }
    } catch (err) {
      setVolError(err instanceof Error ? err.message : "Submission error. Please email hello@envopeace.org directly.");
    } finally {
      setVolLoading(false);
    }
  }
  async function handlePartnerSubmit(e) {
    e.preventDefault();
    setPartnerLoading(true);
    setPartnerError(null);
    setPartnerSuccess(null);
    try {
      const res = await submitInquiryForm({
        data: {
          formType: "partner",
          name: partnerName,
          email: partnerEmail,
          phone: partnerPhone,
          organization: partnerOrg,
          category: partnerArea,
          message: partnerMessage,
          honeypot: partnerHoneypot
        }
      });
      if (res.success) {
        setPartnerSuccess(res.message || "Your partnership proposal has been submitted.");
        setPartnerName("");
        setPartnerOrg("");
        setPartnerEmail("");
        setPartnerPhone("");
        setPartnerMessage("");
      } else {
        setPartnerError(res.error || "Unable to submit proposal.");
      }
    } catch (err) {
      setPartnerError(err instanceof Error ? err.message : "Submission error. Please email hello@envopeace.org directly.");
    } finally {
      setPartnerLoading(false);
    }
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHero, { breadcrumbs: [{
      label: "Get Involved"
    }], eyebrow: "Community Collaboration", title: "Volunteer Your Skills or Partner on Sustainable Programs", description: "We collaborate with medical workers, teachers, local artisans, civil organizations, and corporate partners to multiply grassroots impact across Ebonyi State." }, void 0, false, {
      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-center mb-12", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex rounded-full border border-border bg-secondary p-1.5 shadow-soft", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setActiveTab("volunteer"), className: `flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${activeTab === "volunteer" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`, "aria-pressed": activeTab === "volunteer", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Users, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          " Volunteer With Us"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setActiveTab("partner"), className: `flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${activeTab === "partner" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`, "aria-pressed": activeTab === "partner", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Building2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 120,
            columnNumber: 17
          }, this),
          " Institutional Partnership"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
          lineNumber: 119,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
        lineNumber: 115,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-12 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-5 space-y-6", children: [
          activeTab === "volunteer" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xl font-bold text-foreground", children: "Volunteer Opportunities" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 130,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "We organize regular community drives in rural wards across Ebonyi. We are actively looking for:" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 131,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-4 space-y-3 text-sm text-foreground/90", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-1" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 137,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Medical Officers & Nurses:" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 139,
                      columnNumber: 27
                    }, this),
                    " Clinical screening, drug dispensing, maternal health triage."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 138,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 136,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-1" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 144,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Teachers & Mentors:" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 146,
                      columnNumber: 27
                    }, this),
                    " Weekend study clubs, homework assistance, reading coaching."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 145,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 143,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-1" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 151,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Artisans & Instructors:" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 153,
                      columnNumber: 27
                    }, this),
                    " Practical tailoring, basic ICT, wiring, and trade workshops."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 152,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 150,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-1" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 158,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Logistics Coordinators:" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 160,
                      columnNumber: 27
                    }, this),
                    " Field distribution, vehicle coordination, packing relief bundles."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 159,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 157,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 135,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 129,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-secondary/50 p-6 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold text-foreground", children: "Prefer direct contact?" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 168,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1", children: [
                "Email volunteer inquiries directly to",
                " ",
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}`, className: "text-primary font-semibold underline", children: siteConfig.email }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 171,
                  columnNumber: 23
                }, this),
                " ",
                "or call our Hilltop Road secretariat at ",
                siteConfig.phone,
                "."
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 169,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 167,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 128,
            columnNumber: 44
          }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xl font-bold text-foreground", children: "Institutional Partnerships" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 179,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "We collaborate with NGOs, faith-based institutions, corporate CSR departments, and diaspora associations seeking reliable local implementation partners in Southeastern Nigeria." }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 182,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-4 space-y-3 text-sm text-foreground/90", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-1" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 189,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Clean Water Infrastructure:" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 191,
                      columnNumber: 27
                    }, this),
                    " Joint co-funding of solar community boreholes."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 190,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 188,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-1" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 196,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Educational Endowments:" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 198,
                      columnNumber: 27
                    }, this),
                    " Multi-year school sponsorship funds for rural schools."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 197,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 195,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-1" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 203,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { children: "Medical Supplies Grants:" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 205,
                      columnNumber: 27
                    }, this),
                    " Donated diagnostic equipment and bulk pharmaceutical aid."
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 204,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 202,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 187,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-secondary/50 p-6 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold text-foreground", children: "Direct Partnership Liaison:" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 213,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1", children: [
                "Write to",
                " ",
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}`, className: "text-primary font-semibold underline", children: siteConfig.email }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 216,
                  columnNumber: 23
                }, this),
                " ",
                "with subject line ",
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { children: '"Partnership Proposal"' }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 219,
                  columnNumber: 41
                }, this),
                "."
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 214,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 212,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 177,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-primary-soft/40 p-6 shadow-soft", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold uppercase tracking-wider text-primary", children: "Financial Giving" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 226,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h4", { className: "mt-2 text-lg font-bold text-foreground", children: "Prefer to support with funds?" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 229,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: "Direct financial gifts allow us to buy foodstuffs from local Ebonyi markets and settle school tuition directly with schools." }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 232,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "hero", size: "sm", className: "w-full", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: "Visit Donate Page" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 238,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 237,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 236,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 225,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-7", children: activeTab === "volunteer" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleVolunteerSubmit, className: "rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-2xl font-bold text-foreground", children: "Volunteer Application Form" }, void 0, false, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 247,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: "Fill out the fields below to register for upcoming community missions." }, void 0, false, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 248,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { htmlFor: "vol-hp", children: "Leave this empty" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 254,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { id: "vol-hp", type: "text", value: volHoneypot, onChange: (e) => setVolHoneypot(e.target.value), tabIndex: -1, autoComplete: "off" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 255,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 253,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "vol-name", children: "Full Name *" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 260,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "vol-name", required: true, maxLength: 100, placeholder: "e.g. Chinelo Nwachukwu", value: volName, onChange: (e) => setVolName(e.target.value), className: "mt-1.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 261,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 259,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "vol-email", children: "Email Address *" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 266,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "vol-email", type: "email", required: true, maxLength: 100, placeholder: "chinelo@example.com", value: volEmail, onChange: (e) => setVolEmail(e.target.value), className: "mt-1.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 267,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 265,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "vol-phone", children: "Phone Number" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 270,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "vol-phone", type: "tel", maxLength: 30, placeholder: "+234 800 000 0000", value: volPhone, onChange: (e) => setVolPhone(e.target.value), className: "mt-1.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 271,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 269,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 264,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "vol-skill", children: "Primary Skillset / Role" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 277,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Select, { value: volSkill, onValueChange: setVolSkill, children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectTrigger, { id: "vol-skill", className: "mt-1.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectValue, {}, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 280,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 279,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectContent, { children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "medical", children: "Doctor / Nurse / Pharmacist" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 283,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "education", children: "Teacher / Mentor" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 284,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "vocational", children: "Vocational Trade Specialist" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 285,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "field", children: "Logistics & Field Distribution" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 286,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "media", children: "Photography & Communications" }, void 0, false, {
                      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                      lineNumber: 287,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 282,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 278,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 276,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "vol-lga", children: "Preferred LGA Location" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 293,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "vol-lga", maxLength: 60, placeholder: "e.g. Abakaliki / Ishielu", value: volLga, onChange: (e) => setVolLga(e.target.value), className: "mt-1.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 294,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 292,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 275,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "vol-message", children: "Availability & Relevant Experience *" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 299,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { id: "vol-message", required: true, minLength: 5, maxLength: 2e3, rows: 4, placeholder: "Tell us about your background, typical availability (weekends, weekdays), and reasons for joining...", value: volMessage, onChange: (e) => setVolMessage(e.target.value), className: "mt-1.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 300,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 298,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 258,
            columnNumber: 19
          }, this),
          volSuccess && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft p-4 text-sm text-primary-deep", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-5 w-5 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 305,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold", children: "Application Received" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 307,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-0.5", children: volSuccess }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 308,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 306,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 304,
            columnNumber: 34
          }, this),
          volError && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleAlert, { className: "h-5 w-5 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 313,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold", children: "Submission Notice" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 315,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-0.5", children: volError }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 316,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 314,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 312,
            columnNumber: 32
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", variant: "hero", size: "lg", disabled: volLoading, className: "w-full sm:w-auto", children: volLoading ? "Submitting Application..." : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 323,
                columnNumber: 27
              }, this),
              " Submit Volunteer Application"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 322,
              columnNumber: 67
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 321,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}?subject=Volunteer Application`, className: "text-xs text-muted-foreground underline hover:text-foreground hidden sm:inline", children: "Email form instead" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 326,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 320,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
          lineNumber: 246,
          columnNumber: 44
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handlePartnerSubmit, className: "rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-2xl font-bold text-foreground", children: "Partnership Proposal" }, void 0, false, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 331,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: "Connect with our executive leadership for institutional or corporate collaboration." }, void 0, false, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 332,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { htmlFor: "partner-hp", children: "Leave this empty" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 339,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { id: "partner-hp", type: "text", value: partnerHoneypot, onChange: (e) => setPartnerHoneypot(e.target.value), tabIndex: -1, autoComplete: "off" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 340,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 338,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 space-y-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "partner-name", children: "Contact Person *" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 346,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "partner-name", required: true, maxLength: 100, placeholder: "Your Name", value: partnerName, onChange: (e) => setPartnerName(e.target.value), className: "mt-1.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 347,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 345,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "partner-org", children: "Organization / Entity Name *" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 350,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "partner-org", required: true, maxLength: 100, placeholder: "Company, NGO, or Group", value: partnerOrg, onChange: (e) => setPartnerOrg(e.target.value), className: "mt-1.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 351,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 349,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 344,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "partner-email", children: "Official Email *" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 357,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "partner-email", type: "email", required: true, maxLength: 100, placeholder: "partner@organization.com", value: partnerEmail, onChange: (e) => setPartnerEmail(e.target.value), className: "mt-1.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 358,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 356,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "partner-phone", children: "Phone / WhatsApp" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 361,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "partner-phone", type: "tel", maxLength: 30, placeholder: "+234 800 000 0000", value: partnerPhone, onChange: (e) => setPartnerPhone(e.target.value), className: "mt-1.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 362,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 360,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 355,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "partner-area", children: "Program Pillar of Interest" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 367,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Select, { value: partnerArea, onValueChange: setPartnerArea, children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectTrigger, { id: "partner-area", className: "mt-1.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectValue, {}, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 370,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 369,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectContent, { children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "water", children: "Clean Water Infrastructure" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 373,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "education", children: "Scholarships & School Libraries" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 374,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "healthcare", children: "Mobile Health & Maternal Care" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 375,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "youth", children: "Youth Vocational Toolkits" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 376,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "outreach", children: "Seasonal Food Outreach Relief" }, void 0, false, {
                    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                    lineNumber: 377,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                  lineNumber: 372,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 368,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 366,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "partner-message", children: "Partnership Concept & Scope *" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 383,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { id: "partner-message", required: true, minLength: 5, maxLength: 2e3, rows: 5, placeholder: "Outline the nature of proposed collaboration, geographic target, and estimated timeline...", value: partnerMessage, onChange: (e) => setPartnerMessage(e.target.value), className: "mt-1.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 384,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 382,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 343,
            columnNumber: 19
          }, this),
          partnerSuccess && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft p-4 text-sm text-primary-deep", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-5 w-5 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 389,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold", children: "Proposal Submitted" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 391,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-0.5", children: partnerSuccess }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 392,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 390,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 388,
            columnNumber: 38
          }, this),
          partnerError && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleAlert, { className: "h-5 w-5 shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 397,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold", children: "Notice" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 399,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-0.5", children: partnerError }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 400,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 398,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 396,
            columnNumber: 36
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", variant: "hero", size: "lg", disabled: partnerLoading, className: "w-full sm:w-auto", children: partnerLoading ? "Submitting Proposal..." : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
                lineNumber: 407,
                columnNumber: 27
              }, this),
              " Submit Partnership Inquiry"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 406,
              columnNumber: 68
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 405,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}?subject=Partnership Proposal`, className: "text-xs text-muted-foreground underline hover:text-foreground hidden sm:inline", children: "Email proposal directly" }, void 0, false, {
              fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
              lineNumber: 410,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
            lineNumber: 404,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
          lineNumber: 330,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
          lineNumber: 245,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/get-involved.tsx?tsr-split=component",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
export {
  GetInvolvedPage as component
};
