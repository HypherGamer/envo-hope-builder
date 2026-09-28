import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, B as Button } from "./router-BzaOfFLl.mjs";
import { P as PageHero } from "./PageHero-BeaMsYMN.mjs";
import { I as Input } from "./input-DwX46eUj.mjs";
import { L as Label, T as Textarea } from "./label-RR8mAOhH.mjs";
import { s as siteConfig } from "./about-founder-CCLG_U39.mjs";
import { s as submitInquiryForm } from "./server-fn-DCxyf3ss.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { m as CircleCheck, x as Building, P as Phone, i as Mail, k as CircleAlert, v as Send } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function DonatePage() {
  const [frequency, setFrequency] = reactExports.useState("one-time");
  const [selectedAmount, setSelectedAmount] = reactExports.useState(25e3);
  const [customAmount, setCustomAmount] = reactExports.useState("");
  const [donorName, setDonorName] = reactExports.useState("");
  const [donorEmail, setDonorEmail] = reactExports.useState("");
  const [donorPhone, setDonorPhone] = reactExports.useState("");
  const [donorNotes, setDonorNotes] = reactExports.useState("");
  const [donorHoneypot, setDonorHoneypot] = reactExports.useState("");
  const [donorLoading, setDonorLoading] = reactExports.useState(false);
  const [donorSuccess, setDonorSuccess] = reactExports.useState(null);
  const [donorError, setDonorError] = reactExports.useState(null);
  const presets = [1e4, 25e3, 5e4, 1e5, 25e4];
  const effectiveAmount = customAmount ? Number(customAmount) || 0 : selectedAmount;
  function getImpactDescription(amt) {
    if (amt >= 25e4) {
      return "Sponsors a full artisan starter toolkit and 4-month vocational training for an unemployed youth in Ebonyi.";
    }
    if (amt >= 1e5) {
      return "Covers malaria rapid test kits, clinical consultations, and prescribed treatment for ten rural families.";
    }
    if (amt >= 5e4) {
      return "Funds full annual public school tuition levies, textbooks, uniform, and footwear for a primary school pupil.";
    }
    if (amt >= 25e3) {
      return "Provides a rural family with a comprehensive clean water filtration storage container and hygiene essentials.";
    }
    if (amt >= 1e4) {
      return "Supplies school exercise books, stationery sets, and supplementary readers for two elementary children.";
    }
    return "Every contribution directly supports community procurement of grains, medicines, and learning supplies.";
  }
  async function handleTransferRequest(e) {
    e.preventDefault();
    setDonorLoading(true);
    setDonorError(null);
    setDonorSuccess(null);
    try {
      const res = await submitInquiryForm({
        data: {
          formType: "transfer-request",
          name: donorName,
          email: donorEmail,
          phone: donorPhone,
          category: `${frequency} donation of ₦${effectiveAmount.toLocaleString()}`,
          message: donorNotes ? `Pledged ₦${effectiveAmount.toLocaleString()} (${frequency}). Notes: ${donorNotes}` : `Pledged ₦${effectiveAmount.toLocaleString()} (${frequency}). Requesting bank transfer details.`,
          honeypot: donorHoneypot
        }
      });
      if (res.success) {
        setDonorSuccess(res.message || "Thank you. Our finance desk has received your request and will forward official bank transfer credentials.");
        setDonorName("");
        setDonorEmail("");
        setDonorPhone("");
        setDonorNotes("");
      } else {
        setDonorError(res.error || "Unable to send transfer request.");
      }
    } catch (err) {
      setDonorError(err instanceof Error ? err.message : "Error submitting request. Please email hello@envopeace.org directly.");
    } finally {
      setDonorLoading(false);
    }
  }
  const hasDirectBankInfo = Boolean(siteConfig.bankAccountNumber);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHero, { breadcrumbs: [{
      label: "Donate"
    }], eyebrow: "Financial Stewardship", title: "Direct Support for Ebonyi Communities", description: "Every naira contributed is directed to verifiable village relief, school sponsorships, free medical treatments, and solar water installations." }, void 0, false, {
      fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-12 lg:grid-cols-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-7 space-y-8", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Select Giving Level" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground", children: "Choose Your Contribution" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 92,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-sm text-muted-foreground", children: "Pick an intended amount in Nigerian Naira (NGN) to view direct field impact." }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 95,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "inline-flex rounded-full border border-border bg-secondary p-1", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setFrequency("one-time"), className: `rounded-full px-5 py-2 text-xs font-bold transition-all ${frequency === "one-time" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`, "aria-pressed": frequency === "one-time", children: "One-Time Gift" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => setFrequency("monthly"), className: `rounded-full px-5 py-2 text-xs font-bold transition-all ${frequency === "monthly" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`, "aria-pressed": frequency === "monthly", children: "Monthly Sustainer" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 105,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 101,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: presets.map((amt) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "button", onClick: () => {
          setSelectedAmount(amt);
          setCustomAmount("");
        }, className: `rounded-2xl border-2 p-4 text-left transition-all cursor-pointer ${selectedAmount === amt && !customAmount ? "border-primary bg-primary-soft text-primary-deep shadow-soft" : "border-border bg-card text-foreground hover:border-primary/40"}`, children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "block text-xl font-extrabold", children: [
            "₦",
            amt.toLocaleString()
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 116,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "block text-xs font-semibold text-muted-foreground mt-0.5", children: frequency === "monthly" ? "Per Month" : "One-off" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 117,
            columnNumber: 21
          }, this)
        ] }, amt, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 112,
          columnNumber: 37
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 111,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "custom-amount", className: "text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Or specify a custom amount (NGN)" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-1.5 flex items-center rounded-xl border border-input bg-card px-4 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary shadow-sm", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-lg font-bold text-muted-foreground mr-2", children: "₦" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 129,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "custom-amount", type: "number", min: 1e3, step: 1e3, placeholder: "Enter custom amount", value: customAmount, onChange: (e) => {
              setCustomAmount(e.target.value);
              const n = Number(e.target.value);
              if (n > 0) setSelectedAmount(n);
            }, className: "border-0 shadow-none focus-visible:ring-0 px-0 text-lg font-bold" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 130,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 124,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-primary/20 bg-primary-soft/50 p-6 shadow-soft", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs font-bold uppercase tracking-wider text-primary", children: "Projected Direct Impact" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-base font-semibold text-foreground", children: getImpactDescription(effectiveAmount) }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-xs text-muted-foreground", children: "Calculated against standard operational costs across Ebonyi rural projects." }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 146,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-base font-bold text-foreground", children: "Our Financial Principles" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 153,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-2.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-0.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 156,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "School levies paid directly to registered school bank accounts." }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 157,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 155,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-2.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-0.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 160,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Foodstuffs procured from local Ebonyi markets to sustain farmers." }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 161,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 159,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-2.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-0.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 164,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Free medical drugs dispensed only by licensed healthcare officers." }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 165,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-2.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 text-primary mt-0.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 168,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Transparent reporting and receipts issued upon transfer confirmation." }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 169,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 167,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 154,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 152,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "sticky top-28 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Building, { className: "h-5 w-5" }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 182,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 181,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-lg font-bold text-foreground", children: "Bank Transfer Details" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 185,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground", children: "Official Direct Transfer Procedure" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 186,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 184,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 180,
          columnNumber: 17
        }, this),
        hasDirectBankInfo ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 rounded-xl border border-border bg-secondary/50 p-5 text-sm", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs uppercase tracking-wider text-muted-foreground block", children: "Bank Name" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 194,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-base text-foreground", children: siteConfig.bankName }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 197,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 193,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs uppercase tracking-wider text-muted-foreground block", children: "Account Number" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 200,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-xl text-primary font-mono", children: siteConfig.bankAccountNumber }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 203,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 199,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs uppercase tracking-wider text-muted-foreground block", children: "Account Name" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 208,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-sm text-foreground", children: siteConfig.bankAccountName }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 211,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 207,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 192,
          columnNumber: 38
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-xl border border-border bg-secondary/60 p-5 text-sm text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold text-foreground mb-1", children: "Contact us for bank transfer details" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 217,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "To ensure security and accurate receipting, our official foundation account details are provided directly upon request. You can call our secretariat or submit the request form below:" }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 220,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 pt-3 border-t border-border space-y-1.5 text-xs font-semibold text-foreground", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
                  fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                  lineNumber: 227,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `tel:${siteConfig.phoneClean}`, className: "hover:underline", children: siteConfig.phone }, void 0, false, {
                  fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                  lineNumber: 228,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 226,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-3.5 w-3.5 text-primary" }, void 0, false, {
                  fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                  lineNumber: 233,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}`, className: "hover:underline", children: siteConfig.email }, void 0, false, {
                  fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                  lineNumber: 234,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 232,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 225,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 216,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleTransferRequest, className: "space-y-4 pt-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { htmlFor: "donor-hp", children: "Leave this blank" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 244,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { id: "donor-hp", type: "text", value: donorHoneypot, onChange: (e) => setDonorHoneypot(e.target.value), tabIndex: -1, autoComplete: "off" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 245,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 243,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "donor-name", children: "Your Full Name *" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 249,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "donor-name", required: true, maxLength: 100, placeholder: "Your Name", value: donorName, onChange: (e) => setDonorName(e.target.value), className: "mt-1" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 250,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 248,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "donor-email", children: "Your Email Address *" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 254,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "donor-email", type: "email", required: true, maxLength: 100, placeholder: "donor@example.com", value: donorEmail, onChange: (e) => setDonorEmail(e.target.value), className: "mt-1" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 255,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 253,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "donor-phone", children: "Phone / WhatsApp" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 259,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "donor-phone", type: "tel", maxLength: 30, placeholder: "+234 800 000 0000", value: donorPhone, onChange: (e) => setDonorPhone(e.target.value), className: "mt-1" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 260,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 258,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "donor-notes", children: "Designation / Program of Interest (Optional)" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 264,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { id: "donor-notes", rows: 2, maxLength: 500, placeholder: "e.g. For Afikpo scholarships or Ishielu borehole", value: donorNotes, onChange: (e) => setDonorNotes(e.target.value), className: "mt-1" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 267,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 263,
              columnNumber: 23
            }, this),
            donorSuccess && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-2.5 rounded-xl border border-primary/30 bg-primary-soft p-3 text-xs text-primary-deep", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-4 w-4 shrink-0 mt-0.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 271,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: donorSuccess }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 272,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 270,
              columnNumber: 40
            }, this),
            donorError && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleAlert, { className: "h-4 w-4 shrink-0 mt-0.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 276,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: donorError }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 277,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 275,
              columnNumber: 38
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", variant: "hero", size: "lg", disabled: donorLoading, className: "w-full", children: donorLoading ? "Sending Request..." : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
                lineNumber: 282,
                columnNumber: 29
              }, this),
              " Request Transfer Details (₦",
              effectiveAmount.toLocaleString(),
              ")"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 281,
              columnNumber: 64
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
              lineNumber: 280,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
            lineNumber: 241,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
          lineNumber: 215,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
        lineNumber: 179,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
        lineNumber: 178,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/donate.tsx?tsr-split=component",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
export {
  DonatePage as component
};
