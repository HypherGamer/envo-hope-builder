import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, B as Button } from "./router-BzaOfFLl.mjs";
import { P as PageHero } from "./PageHero-BeaMsYMN.mjs";
import { I as Input } from "./input-DwX46eUj.mjs";
import { L as Label, T as Textarea } from "./label-RR8mAOhH.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-EoEZHlrw.mjs";
import { s as siteConfig } from "./about-founder-CCLG_U39.mjs";
import { s as submitInquiryForm } from "./server-fn-DCxyf3ss.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { g as MapPin, h as ArrowUpRight, P as Phone, i as Mail, u as Clock, m as CircleCheck, k as CircleAlert, v as Send } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
function ContactPage() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("general");
  const [message, setMessage] = reactExports.useState("");
  const [honeypot, setHoneypot] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await submitInquiryForm({
        data: {
          formType: "contact",
          name,
          email,
          phone,
          category,
          message,
          honeypot
        }
      });
      if (res.success) {
        setSuccess(res.message || "Thank you. Your message has been delivered to our secretariat desk.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setError(res.error || "Unable to send message.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please write to hello@envopeace.org directly.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHero, { breadcrumbs: [{
      label: "Contact Us"
    }], eyebrow: "Secretariat Desk", title: "Connect with Our Abakaliki Headquarters", description: "Whether you have questions about community nominations, wish to visit our secretariat, or need program verification, we are available to help." }, void 0, false, {
      fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-6xl px-4 md:px-8", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-12 lg:grid-cols-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs md:text-sm font-semibold uppercase tracking-wider text-primary", children: "Direct Inquiries" }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground", children: "Our Secretariat Office" }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "Our permanent office is located in the heart of Abakaliki, accessible to community leaders, school principals, and regional partners." }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 71,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 81,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 80,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-sm font-bold text-foreground", children: "Physical Address" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 84,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: siteConfig.address }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 85,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: siteConfig.mapsUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary hover:underline", children: [
                "Open in Google Maps",
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpRight, { className: "h-3.5 w-3.5" }, void 0, false, {
                  fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                  lineNumber: 88,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 86,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 83,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 79,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 97,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 96,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-sm font-bold text-foreground", children: "Telephone Contact" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 100,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: "Direct Secretariat Line & WhatsApp" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 101,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `tel:${siteConfig.phoneClean}`, className: "inline-block mt-1 text-sm font-semibold text-primary hover:underline", children: siteConfig.phone }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 104,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 99,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 95,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 114,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 113,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-sm font-bold text-foreground", children: "Official Email" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 117,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: "For correspondence, proposal letters, and verification" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 118,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}`, className: "inline-block mt-1 text-sm font-semibold text-primary hover:underline", children: siteConfig.email }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 121,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 116,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 112,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Clock, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 131,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 130,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-sm font-bold text-foreground", children: "Office Hours" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 134,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: siteConfig.officeHours }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 135,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 133,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 129,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 77,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-2xl font-bold text-foreground", children: "Send an Inquiry" }, void 0, false, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 145,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1 text-sm text-muted-foreground", children: "Our communications desk reviews all submissions and replies within two working days." }, void 0, false, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 146,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { htmlFor: "contact-hp", children: "Do not fill this" }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 153,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { id: "contact-hp", type: "text", value: honeypot, onChange: (e) => setHoneypot(e.target.value), tabIndex: -1, autoComplete: "off" }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 154,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 152,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "contact-name", children: "Your Full Name *" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 159,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "contact-name", required: true, maxLength: 100, placeholder: "e.g. Obinna Nwankwo", value: name, onChange: (e) => setName(e.target.value), className: "mt-1.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 160,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 158,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "contact-email", children: "Email Address *" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 165,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "contact-email", type: "email", required: true, maxLength: 100, placeholder: "obinna@example.com", value: email, onChange: (e) => setEmail(e.target.value), className: "mt-1.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 166,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 164,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "contact-phone", children: "Phone Number (Optional)" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 169,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Input, { id: "contact-phone", type: "tel", maxLength: 30, placeholder: "+234 800 000 0000", value: phone, onChange: (e) => setPhone(e.target.value), className: "mt-1.5" }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 170,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 168,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 163,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "contact-category", children: "Subject / Department" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 175,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Select, { value: category, onValueChange: setCategory, children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectTrigger, { id: "contact-category", className: "mt-1.5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectValue, {}, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 178,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 177,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectContent, { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "general", children: "General Secretariat Inquiry" }, void 0, false, {
                  fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                  lineNumber: 181,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "community-nomination", children: "Community Outreach Nomination" }, void 0, false, {
                  fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                  lineNumber: 182,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "education", children: "School Scholarship Inquiry" }, void 0, false, {
                  fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                  lineNumber: 185,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "healthcare", children: "Mobile Health Mission Request" }, void 0, false, {
                  fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                  lineNumber: 186,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "peace", children: "Inter-Community Peace Consultation" }, void 0, false, {
                  fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                  lineNumber: 187,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItem, { value: "press", children: "Media & Press Relations" }, void 0, false, {
                  fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                  lineNumber: 188,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
                lineNumber: 180,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 176,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 174,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Label, { htmlFor: "contact-message", children: "Message *" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 194,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Textarea, { id: "contact-message", required: true, minLength: 5, maxLength: 2e3, rows: 5, placeholder: "Please share details regarding your inquiry, community location, or proposal...", value: message, onChange: (e) => setMessage(e.target.value), className: "mt-1.5" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 195,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 193,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 157,
          columnNumber: 17
        }, this),
        success && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft p-4 text-sm text-primary-deep", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleCheck, { className: "h-5 w-5 shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 200,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold", children: "Message Dispatched" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 202,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-0.5", children: success }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 203,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 201,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 199,
          columnNumber: 29
        }, this),
        error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleAlert, { className: "h-5 w-5 shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 208,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-semibold", children: "Notice" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 210,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-0.5", children: error }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 211,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 209,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 207,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "submit", variant: "hero", size: "lg", disabled: loading, className: "w-full sm:w-auto", children: loading ? "Sending Message..." : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 218,
              columnNumber: 25
            }, this),
            " Send Direct Message"
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 217,
            columnNumber: 55
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 216,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}`, className: "text-xs text-muted-foreground underline hover:text-foreground hidden sm:inline", children: "Send via email client" }, void 0, false, {
            fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 222,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 215,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
        lineNumber: 144,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
        lineNumber: 143,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/contact.tsx?tsr-split=component",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
export {
  ContactPage as component
};
