import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, u as useRouter, L as Link, d as useRouterState, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { W as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { s as siteConfig, f as founderPhoto, c as cn } from "./about-founder-CCLG_U39.mjs";
import { S as SubTrigger2, a as SubContent2, P as Portal2, C as Content2, I as Item2, b as CheckboxItem2, c as ItemIndicator2, R as RadioItem2, L as Label2, d as Separator2, e as Root2, T as Trigger } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { D as DialogOverlay$1, a as DialogPortal$1, b as DialogContent$1, c as DialogClose, d as DialogTitle$1, e as DialogDescription$1, f as Dialog$1 } from "../_libs/radix-ui__react-dialog.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-D7pJ5bR7.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { C as ChevronRight, a as Check, b as Circle, X, T as TriangleAlert, R as RefreshCw, A as ArrowLeft, M as Megaphone, c as ArrowRight, H as Heart, d as ChevronDown, e as Menu, F as Facebook, f as Twitter, I as Instagram, L as Linkedin, Y as Youtube, g as MapPin, h as ArrowUpRight, P as Phone, i as Mail, B as Building2, j as Copy, S as ShieldCheck, k as CircleAlert, l as LoaderCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, a as arrayType, e as enumType, b as booleanType, n as numberType, l as literalType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-DKuj0p4J.css";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary-deep hover:shadow-elegant active:scale-[0.98]",
        outline: "border-2 border-border bg-background text-foreground shadow-soft hover:bg-secondary hover:border-primary/40 active:scale-[0.98]",
        hero: "bg-gradient-accent text-accent-foreground shadow-elegant hover:brightness-105 hover:-translate-y-0.5 active:scale-[0.98]"
      },
      size: {
        default: "min-h-[44px] px-6 py-2.5",
        sm: "min-h-[40px] px-4 py-2 text-xs",
        lg: "min-h-[48px] px-8 py-3 text-base",
        icon: "h-11 w-11 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props }, void 0, false, {
      fileName: "/app/applet/src/components/ui/button.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, void 0);
  }
);
Button.displayName = "Button";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "ml-auto" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 46,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Portal2, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 62,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
  lineNumber: 61,
  columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 82,
    columnNumber: 3
  },
  void 0
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ItemIndicator2, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
        lineNumber: 107,
        columnNumber: 5
      }, void 0),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 98,
    columnNumber: 3
  },
  void 0
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ItemIndicator2, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, void 0),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  void 0
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 145,
    columnNumber: 3
  },
  void 0
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dropdown-menu.tsx",
    lineNumber: 157,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const heroImg = "/assets/hero-community-CZfem7Sv.jpg";
const programsContent = [
  {
    slug: "outreach",
    title: "Outreach Programs (dummy data)",
    tagline: "Meeting families directly in rural hamlets with essential relief supplies and community care.",
    summary: "Direct humanitarian visits into remote villages across Ebonyi State, providing shelf-stable foodstuffs, clean water supplies, hygiene kits, and emergency aid to isolated households.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Rural settlements in Ebonyi State, particularly in farming settlements around Ishielu and Ohaukwu, frequently experience seasonal food insecurity and limited access to consumer distribution networks during harvest gaps.",
      "Vulnerable elderly residents, widows, and households caring for orphaned children often lack the financial resilience or transportation means to travel into central market towns like Abakaliki for daily essentials.",
      "Without direct, community-level distribution initiatives, standard aid relief frequently stops at council headquarters, leaving deeper farming settlements entirely unreached."
    ],
    approach: [
      {
        step: 1,
        title: "Community Needs Assessment",
        desc: "Our field coordinators meet with village heads, ward counselors, and women leaders to verify families facing acute shortages.",
        dummy: true
      },
      {
        step: 2,
        title: "Locally Sourced Procurement",
        desc: "Relief supplies including rice, beans, garri, cooking oil, and household sanitation items are procured directly from Ebonyi farmers and local merchants.",
        dummy: true
      },
      {
        step: 3,
        title: "Direct Door-to-Village Distribution",
        desc: "Volunteer distribution teams set up verified collection points at local village halls and conduct home drop-offs for frail or bedridden elders.",
        dummy: true
      },
      {
        step: 4,
        title: "Post-Distribution Check-ins",
        desc: "Field volunteers return thirty days later to confirm well-being and identify individuals requiring health or educational referrals.",
        dummy: true
      }
    ],
    whoWeServe: "Elderly residents living without family support, widowed heads of households, displaced agrarian families, and households caring for multiple dependent children across rural Ebonyi local government areas.",
    howToApply: "Village heads, faith leaders, and neighbors can submit community referral notices by calling +234 806 356 3604 or visiting our liaison desk at No. 1, Hilltop Rd, Abakaliki during weekday hours.",
    stats: [
      {
        value: "5,200",
        label: "Households Supported",
        asOf: "April 2026",
        dummy: true
      },
      {
        value: "28",
        label: "Rural Villages Reached",
        asOf: "April 2026",
        dummy: true
      },
      {
        value: "100%",
        label: "Direct Village Delivery",
        asOf: "April 2026",
        dummy: true
      }
    ],
    activities: [
      {
        title: "Seasonal Household Food Rations",
        desc: "Distributing 25kg bundles of grains, tubers, fortified salt, and edible oils to vulnerable agrarian households during the pre-harvest stretch.",
        dummy: true
      },
      {
        title: "Clean Water & Hygiene Supply Kits",
        desc: "Supplying water storage containers, chlorine treatment tablets, laundry soap, and sanitary materials to reduce waterborne illnesses.",
        dummy: true
      },
      {
        title: "Emergency Response & Winter Clothing",
        desc: "Providing bedding, blankets, and footwear for families who experience localized storm or flood damage in agrarian settlements.",
        dummy: true
      },
      {
        title: "Home Visits for Homebound Seniors",
        desc: "Deploying local community volunteers to visit isolated elders twice monthly to ensure nourishment and emotional connection.",
        dummy: true
      }
    ],
    stories: [
      {
        title: "Relief for a Family of Six in Ishielu",
        quote: "When the heavy rains flooded our yam barn last season, we had no reserves left. The delivery of food supplies and blankets gave my grandchildren nourishment while we replanted our plots.",
        author: "Mama Ngozi",
        location: "Ezzangbo, Ishielu LGA",
        outcome: "Received monthly food staple packages and dry bedding for four months.",
        dummy: true
      }
    ],
    unitCosts: [
      {
        amount: 15e3,
        currency: "NGN",
        gives: "One comprehensive household hygiene and water-purification kit for a family of five.",
        dummy: true
      },
      {
        amount: 35e3,
        currency: "NGN",
        gives: "One month supply of grains, legumes, and cooking essentials for a vulnerable rural family.",
        dummy: true
      },
      {
        amount: 9e4,
        currency: "NGN",
        gives: "Emergency relief packages and replacement bedding for three households recovering from storm damage.",
        dummy: true
      }
    ],
    faqs: [
      {
        question: "How do you select the villages and beneficiaries who receive aid?",
        answer: "We work closely with local traditional councils and community women leaders to conduct door-to-door vulnerability surveys. Priority is given to non-working seniors, single parents, and homes with severely malnourished infants.",
        dummy: true
      },
      {
        question: "Are your relief packages bought locally or shipped from abroad?",
        answer: "Everything is purchased locally within Ebonyi State and neighboring southeastern agricultural hubs. This ensures foodstuffs match local dietary preferences while strengthening regional farming livelihoods.",
        dummy: true
      },
      {
        question: "Can individuals volunteer for distribution weekends?",
        answer: "Yes. We welcome university students, community workers, and residents in Ebonyi State to sign up via our Get Involved page.",
        dummy: true
      }
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Community members gathering during a field outreach distribution in rural Ebonyi",
        caption: "Field volunteers and community elders at an outreach distribution morning in rural Ebonyi.",
        dummy: true
      },
      {
        src: founderPhoto,
        alt: "Program leaders and community organizers reviewing aid allocations",
        caption: "Foundation coordinators meeting with ward leaders to verify beneficiary registers.",
        dummy: true
      }
    ],
    relatedSlugs: ["healthcare", "community", "education"]
  },
  {
    slug: "education",
    title: "Educational Support",
    tagline: "Covering school levies, essential learning materials, and mentorship to keep children enrolled.",
    summary: "A structured scholarship and educational retention program funding tuition levies, textbooks, notebooks, school bags, and teacher-guided study hours across Ebonyi public schools.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "In many rural communities across Ebonyi State, school fees, examination levies, and mandatory uniform purchases create financial hurdles that lead to high dropout rates among primary and junior secondary students.",
      "Children from subsistence farming households frequently miss critical terms during planting and harvest seasons, falling behind in foundational reading and numeracy.",
      "Public schools in peripheral districts often lack basic textbooks, leaving children to copy entire lessons by hand from chalkboards without supplementary reading resources."
    ],
    approach: [
      {
        step: 1,
        title: "School & Ward Identification",
        desc: "Our education desk liaises with headteachers and parent-teacher associations across Ebonyi LGAs to identify students at risk of dropout.",
        dummy: true
      },
      {
        step: 2,
        title: "Direct Tuition & Levy Settlement",
        desc: "Scholarship levies are remitted directly to the verified school bank accounts to guarantee enrollment throughout the full academic year.",
        dummy: true
      },
      {
        step: 3,
        title: "Learning Kit Delivery",
        desc: "Each beneficiary receives an individualized academic kit with state-approved textbooks, notebooks, geometric sets, and sturdy shoes.",
        dummy: true
      },
      {
        step: 4,
        title: "After-School Mentorship Circles",
        desc: "Local volunteer teachers host weekly reading and homework clubs at community centers to support continuous academic improvement.",
        dummy: true
      }
    ],
    whoWeServe: "Primary and secondary pupils from low-income households, orphans, and young learners whose parents are unable to maintain termly levies across public institutions in Ebonyi State.",
    howToApply: "School principals, teachers, and guardians may download or submit a Student Support Nomination Form at our Abakaliki secretariat or submit details through our Get Involved portal.",
    stats: [
      {
        value: "640",
        label: "Pupils Kept in School",
        asOf: "January 2026",
        dummy: true
      },
      {
        value: "18",
        label: "Partner Primary & Secondary Schools",
        asOf: "January 2026",
        dummy: true
      },
      {
        value: "94%",
        label: "Classroom Retention Rate",
        asOf: "January 2026",
        dummy: true
      }
    ],
    activities: [
      {
        title: "Tuition and Term Levy Sponsorship",
        desc: "Covering all statutory school fees, examination registrations (including WAEC and NECO for seniors), and school identification badges.",
        dummy: true
      },
      {
        title: "Curriculum Textbooks and Exercise Packs",
        desc: "Providing textbooks in English, Mathematics, Basic Science, and Civic Studies directly to learners at the start of each academic year.",
        dummy: true
      },
      {
        title: "School Uniforms and Shoes Provision",
        desc: "Commissioning local Ebonyi tailors and shoemakers to produce sturdy uniforms and footwear so every child attends classes with confidence.",
        dummy: true
      },
      {
        title: "Weekend Reading and Homework Clubs",
        desc: "Organizing small-group remedial lessons in community libraries and town halls to help students master reading comprehension.",
        dummy: true
      }
    ],
    stories: [
      {
        title: "From Risk of Dropout to Top of Class in Afikpo",
        quote: "My mother could not pay my junior secondary exam fees after my father passed away. Envo Peace covered my levies and bought my science books. Today I am preparing for my senior secondary entrance.",
        author: "Chidiebere (14 years old)",
        location: "Afikpo North LGA",
        outcome: "Enrolled continuously for three consecutive years with honors in mathematics.",
        dummy: true
      }
    ],
    unitCosts: [
      {
        amount: 2e4,
        currency: "NGN",
        gives: "Complete school starter pack including uniform, textbooks, notebook pack, and backpack for one term.",
        dummy: true
      },
      {
        amount: 45e3,
        currency: "NGN",
        gives: "Full year of tuition levies and stationery sponsorship for an elementary school pupil.",
        dummy: true
      },
      {
        amount: 11e4,
        currency: "NGN",
        gives: "Senior secondary examination registration fees (WAEC/NECO) and preparatory textbook kits for a final-year student.",
        dummy: true
      }
    ],
    faqs: [
      {
        question: "Does the foundation pay money directly to parents?",
        answer: "No. All school levy disbursements are made directly to the registered bank accounts of the respective schools, accompanied by verifiable pupil registers.",
        dummy: true
      },
      {
        question: "What criteria are used to determine which students receive scholarships?",
        answer: "Criteria include documented financial distress, orphan status, teacher recommendations regarding attendance, and verified residence in underserved communities.",
        dummy: true
      },
      {
        question: "Can an individual sponsor a specific pupil through school?",
        answer: "Yes. Through our Get Involved page, donors can arrange direct school sponsorships and receive termly academic progress reports.",
        dummy: true
      }
    ],
    gallery: [
      {
        src: heroImg,
        alt: "School pupils holding new textbooks and backpacks in Ebonyi",
        caption: "Students receiving core curriculum textbooks and exercise kits in Abakaliki.",
        dummy: true
      },
      {
        src: founderPhoto,
        alt: "Community gathering celebrating academic scholarship awardees",
        caption: "Presentation of annual academic encouragement awards to pupils and their families.",
        dummy: true
      }
    ],
    relatedSlugs: ["youth", "outreach", "community"]
  },
  {
    slug: "healthcare",
    title: "Healthcare Assistance",
    tagline: "Delivering free medical consultations, essential treatments, and preventive screenings.",
    summary: "Mobile clinic missions connecting certified Nigerian doctors, nurses, and pharmacists to rural populations lacking nearby health centers, focusing on maternal health, malaria control, and hypertension management.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Many rural wards across Ebonyi State sit more than twenty kilometers from the nearest comprehensive primary healthcare center, making standard preventative visits inaccessible.",
      "Easily treatable conditions like malaria, childhood diarrheal diseases, and high blood pressure frequently advance into life-threatening complications due to delayed intervention and out-of-pocket drug costs.",
      "Expectant mothers in agrarian settlements frequently skip prenatal evaluations, contributing to preventable pregnancy complications."
    ],
    approach: [
      {
        step: 1,
        title: "Medical Team Deployment",
        desc: "We mobilize volunteer medical officers, certified midwives, and licensed pharmacists equipped with diagnostic and pharmaceutical kits.",
        dummy: true
      },
      {
        step: 2,
        title: "Comprehensive Health Triage",
        desc: "Every attendee undergoes vital signs screening, rapid malaria diagnostic testing, blood sugar checks, and clinical consultations.",
        dummy: true
      },
      {
        step: 3,
        title: "Dispensing Prescribed Medications",
        desc: "A mobile pharmacy provides quality-tested anti-malarials, antibiotics, antihypertensive regimens, vitamins, and deworming treatments free of charge.",
        dummy: true
      },
      {
        step: 4,
        title: "Hospital Referrals & Complex Care",
        desc: "Patients requiring surgical intervention or inpatient care are registered and transported to tertiary health facilities in Abakaliki.",
        dummy: true
      }
    ],
    whoWeServe: "Rural agrarian workers, elderly citizens, pregnant mothers, nursing infants, and vulnerable families living far from public healthcare facilities across Ebonyi State.",
    howToApply: "Community leaders can request a mobile health outreach clinic for their village by contacting our health desk at hello@envopeace.org or +234 806 356 3604.",
    stats: [
      {
        value: "3,850",
        label: "Patients Treated Free",
        asOf: "May 2026",
        dummy: true
      },
      {
        value: "12",
        label: "Mobile Clinic Missions",
        asOf: "May 2026",
        dummy: true
      },
      {
        value: "1,200+",
        label: "Malaria Test Kits Administered",
        asOf: "May 2026",
        dummy: true
      }
    ],
    activities: [
      {
        title: "Free Village Mobile Clinics",
        desc: "Conducting full-day clinical screenings and doctor consultations in village community halls and school grounds.",
        dummy: true
      },
      {
        title: "Maternal and Prenatal Support Kits",
        desc: "Supplying pregnant women with clean delivery mama-kits, prenatal vitamins, iron supplements, and ultrasound clinic referrals.",
        dummy: true
      },
      {
        title: "Childhood Deworming and Nutrition Screenings",
        desc: "Administering deworming tablets and micronutrient drops to primary-age children while checking for acute malnutrition markers.",
        dummy: true
      },
      {
        title: "Chronic Illness Monitoring",
        desc: "Conducting regular blood pressure and blood glucose screenings for older residents, paired with 60-day maintenance medications.",
        dummy: true
      }
    ],
    stories: [
      {
        title: "Early Intervention for Severe Hypertension in Onueke",
        quote: "I had severe headaches for three months and assumed it was fatigue from farm work. The doctors at the Envo Peace outreach discovered my blood pressure was dangerously elevated, provided free medication, and explained diet changes that saved my life.",
        author: "Elder Innocent",
        location: "Onueke, Ezza South LGA",
        outcome: "Enrolled in our monthly community blood-pressure check and maintenance program.",
        dummy: true
      }
    ],
    unitCosts: [
      {
        amount: 12e3,
        currency: "NGN",
        gives: "Malaria rapid diagnostic testing, complete artemisinin treatment course, and mosquito net for one household.",
        dummy: true
      },
      {
        amount: 28e3,
        currency: "NGN",
        gives: "Clean delivery mama-kit with prenatal vitamins, antiseptic cord care, and maternal health essentials.",
        dummy: true
      },
      {
        amount: 75e3,
        currency: "NGN",
        gives: "Three months of blood pressure and diabetes maintenance medications for five vulnerable elders.",
        dummy: true
      }
    ],
    faqs: [
      {
        question: "Are your healthcare professionals fully licensed?",
        answer: "Yes. All doctors, nurses, laboratory scientists, and pharmacists participating in our outreach are fully registered with Nigerian professional regulatory bodies (MDCN, NMCN, PCN).",
        dummy: true
      },
      {
        question: "What happens if a patient has an illness too severe for a mobile clinic?",
        answer: "We operate an emergency referral fund that assists patients with ambulance transportation and initial admission costs at the Alex Ekwueme Federal University Teaching Hospital in Abakaliki.",
        dummy: true
      },
      {
        question: "Do patients pay any fee for registration or medication?",
        answer: "Never. All consultations, laboratory screenings, and dispensed medications are provided completely free of charge to beneficiaries.",
        dummy: true
      }
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Volunteer doctors examining community members during a mobile medical outreach",
        caption: "Medical consultation desks arranged in a rural village square.",
        dummy: true
      },
      {
        src: founderPhoto,
        alt: "Community health presentation explaining preventive hygiene practices",
        caption: "Health education session on clean drinking water and maternal hygiene.",
        dummy: true
      }
    ],
    relatedSlugs: ["outreach", "community", "youth"]
  },
  {
    slug: "youth",
    title: "Youth Empowerment",
    tagline: "Equipping young men and women with certified vocational trades, technology skills, and startup grants.",
    summary: "Practical skills academies, leadership seminars, and seed financing programs built to transition unemployed and out-of-school youths in Ebonyi into independent business owners.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Youth unemployment and underemployment in Ebonyi State leave hundreds of secondary and tertiary graduates without viable income pathways, contributing to urban migration and economic vulnerability.",
      "Access to commercial bank loans or venture capital is virtually nonexistent for rural youths lacking collateral or credit histories.",
      "Young people with technical potential often lack structured apprenticeships in modern skills such as solar installation, computer hardware, fashion design, and commercial agro-processing."
    ],
    approach: [
      {
        step: 1,
        title: "Aptitude and Interest Screening",
        desc: "We screen youth applicants across Ebonyi districts to match candidates with vocational training tracks matching market demands.",
        dummy: true
      },
      {
        step: 2,
        title: "Intensive Hands-on Training",
        desc: "Selected candidates complete a four-month intensive curriculum taught by certified master craftsmen and professional instructors.",
        dummy: true
      },
      {
        step: 3,
        title: "Business & Financial Literacy",
        desc: "All trainees learn bookkeeping, customer relations, basic digital marketing, and business planning before graduation.",
        dummy: true
      },
      {
        step: 4,
        title: "Toolkits and Starter Grant Awards",
        desc: "Graduates receive professional toolsets (sewing machines, mechanic toolkits, or solar diagnostic tools) and supervised seed grants.",
        dummy: true
      }
    ],
    whoWeServe: "Unemployed youth aged 18 to 32, young mothers seeking financial independence, and school leavers looking to build viable trade careers in Ebonyi State.",
    howToApply: "Cohorts open bi-annually in February and August. Application forms can be submitted online via our Get Involved page or picked up at our Abakaliki headquarters.",
    stats: [
      {
        value: "410",
        label: "Youths Graduated",
        asOf: "March 2026",
        dummy: true
      },
      {
        value: "85",
        label: "Starter Grants Awarded",
        asOf: "March 2026",
        dummy: true
      },
      {
        value: "82%",
        label: "Active Businesses at 12 Months",
        asOf: "March 2026",
        dummy: true
      }
    ],
    activities: [
      {
        title: "Vocational Trades Apprenticeships",
        desc: "Four-month certified training courses in garment construction, modern electrical wiring, solar panel installation, and catering.",
        dummy: true
      },
      {
        title: "Digital Literacy & ICT Fundamentals",
        desc: "Training young people in computer operations, office document productivity, basic graphic design, and online freelance work.",
        dummy: true
      },
      {
        title: "Micro-Enterprise Starter Toolkits",
        desc: "Equipping every certified graduate with the physical machinery or toolset required to start serving paying customers immediately.",
        dummy: true
      },
      {
        title: "Peer Mentorship and Cooperative Circles",
        desc: "Forming alumni cooperative groups where young artisans can pool resources, share workshops, and access collective bulk orders.",
        dummy: true
      }
    ],
    stories: [
      {
        title: "Building a Fashion Atelier in Abakaliki",
        quote: "Before the Envo Peace program, I was struggling to find casual work. The four-month garment design training and the industrial sewing machine I received upon graduation allowed me to launch my own business. Now I employ two apprentices.",
        author: "Blessing",
        location: "Kpirikpiri, Abakaliki",
        outcome: "Runs an independent fashion design studio generating consistent monthly income.",
        dummy: true
      }
    ],
    unitCosts: [
      {
        amount: 3e4,
        currency: "NGN",
        gives: "Comprehensive trade apprentice training supplies and protective workshop gear for one trainee.",
        dummy: true
      },
      {
        amount: 85e3,
        currency: "NGN",
        gives: "Professional artisan starter toolkit (tailoring machine, electrical toolkit, or commercial baking set).",
        dummy: true
      },
      {
        amount: 18e4,
        currency: "NGN",
        gives: "Full four-month scholarship, toolkit package, and initial business registration grant for one young entrepreneur.",
        dummy: true
      }
    ],
    faqs: [
      {
        question: "Is there any fee required to participate in the training cohort?",
        answer: "No. All training fees, workshop materials, and instruction are funded through foundation programs. Trainees are selected based on dedication and commitment.",
        dummy: true
      },
      {
        question: "Where are the training academies conducted?",
        answer: "Vocational cohorts are hosted in partner workshops and training centers across Abakaliki urban, Afikpo, and Onueke.",
        dummy: true
      },
      {
        question: "Do trainees keep the toolkits after the course?",
        answer: "Yes. Graduating trainees retain their toolkits permanently upon completing the program curriculum and presenting their business action plan.",
        dummy: true
      }
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Young trainees participating in technical workshop training",
        caption: "Youth cohort practical session on technical equipment operation in Abakaliki.",
        dummy: true
      },
      {
        src: founderPhoto,
        alt: "Graduation ceremony handing over startup toolkits to young artisans",
        caption: "Presentation of trade starter toolkits to graduating youth artisans.",
        dummy: true
      }
    ],
    relatedSlugs: ["education", "community", "outreach"]
  },
  {
    slug: "community",
    title: "Community Development",
    tagline: "Constructing safe water infrastructure, facilitating peace pacts, and supporting grassroots leadership.",
    summary: "Grassroots civil development initiatives focusing on sustainable borehole water points, farmer-herder peace dialogues, and community-led dispute resolution across Ebonyi local councils.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Access to clean, potable water remains a persistent challenge in rural Ebonyi communities, forcing children and women to trek multiple kilometers to contaminated streams.",
      "Localized boundary disputes and agricultural land pressures occasionally strain relations between neighboring villages, requiring neutral, credible facilitation to restore trust.",
      "Grassroots community initiatives frequently collapse after outside donors depart due to an absence of locally trained management committees."
    ],
    approach: [
      {
        step: 1,
        title: "Community Dialogue and Consultation",
        desc: "Before any construction or mediation begins, we convene village elders, youth groups, and women associations to establish collective consensus.",
        dummy: true
      },
      {
        step: 2,
        title: "Joint Planning and Co-Investment",
        desc: "Communities contribute local labor or site security, guaranteeing collective ownership from the very first day.",
        dummy: true
      },
      {
        step: 3,
        title: "Infrastructure Execution & Peace Councils",
        desc: "We commission geophysically surveyed solar boreholes and facilitate formal inter-community reconciliation agreements.",
        dummy: true
      },
      {
        step: 4,
        title: "Elected Caretaker Committee Training",
        desc: "Every installation is handed over to a trained five-person water and peace committee responsible for ongoing maintenance and dispute resolution.",
        dummy: true
      }
    ],
    whoWeServe: "Rural agrarian settlements, border villages experiencing communal friction, and community associations seeking clean water and peaceful collaboration across Ebonyi State.",
    howToApply: "Community developmental unions and town councils can submit project proposals or mediation requests to our secretariat at No. 1, Hilltop Rd, Abakaliki.",
    stats: [
      {
        value: "14",
        label: "Clean Water Points Built or Restored",
        asOf: "February 2026",
        dummy: true
      },
      {
        value: "9",
        label: "Community Peace Pacts Facilitated",
        asOf: "February 2026",
        dummy: true
      },
      {
        value: "18,000+",
        label: "Residents with Safe Water Access",
        asOf: "February 2026",
        dummy: true
      }
    ],
    activities: [
      {
        title: "Solar-Powered Water Boreholes",
        desc: "Drilling and installing high-yield solar-powered community water kiosks that deliver clean drinking water throughout the day.",
        dummy: true
      },
      {
        title: "Inter-Community Peace Forums",
        desc: "Convening respected traditional rulers, youth leaders, and civil authorities for structured mediation on farmland borders and water rights.",
        dummy: true
      },
      {
        title: "Water Management Committee Training",
        desc: "Training local artisans in pump mechanics, water testing, and routine maintenance to prevent facility downtime.",
        dummy: true
      },
      {
        title: "Civic Town Halls on Peaceful Coexistence",
        desc: "Hosting educational town hall workshops addressing peaceful conflict resolution, civic responsibility, and youth leadership.",
        dummy: true
      }
    ],
    stories: [
      {
        title: "Clean Water Restored in an Ishielu Farming Community",
        quote: "For years, our women and children had to walk two hours every dawn to fetch murky stream water. Since Envo Peace installed the solar water borehole in our village square, waterborne fever has dropped dramatically and our children arrive at school on time.",
        author: "Chief Ogbonna",
        location: "Ntezi, Ishielu LGA",
        outcome: "A solar borehole serving more than 1,400 village residents operates daily.",
        dummy: true
      }
    ],
    unitCosts: [
      {
        amount: 4e4,
        currency: "NGN",
        gives: "Water testing supplies, filtration cartridges, and maintenance servicing for a community water station.",
        dummy: true
      },
      {
        amount: 95e3,
        currency: "NGN",
        gives: "Logistical funding and facilitation materials for a bilateral inter-community peace and reconciliation forum.",
        dummy: true
      },
      {
        amount: 25e4,
        currency: "NGN",
        gives: "Complete overhaul and solar pump rehabilitation of a broken rural community borehole.",
        dummy: true
      }
    ],
    faqs: [
      {
        question: "How do you ensure a water project does not fall into disrepair after installation?",
        answer: "Before drilling begins, the community establishes an elected five-member water management committee. We train them in minor mechanical servicing and establish a community spare-parts fund.",
        dummy: true
      },
      {
        question: "What is your approach to inter-community disputes?",
        answer: "We act as neutral facilitators, bringing traditional custodians, youth leaders, and women groups into dialogue in safe, respectful settings to negotiate sustainable peace agreements.",
        dummy: true
      },
      {
        question: "Can our town union invite Envo Peace to mediate a local dispute?",
        answer: "Yes. Town unions and traditional councils may contact our Abakaliki secretariat to request an exploratory peace assessment.",
        dummy: true
      }
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Community members celebrating clean water access at a new water point",
        caption: "Villagers testing clean drinking water from a newly restored borehole in Ishielu.",
        dummy: true
      },
      {
        src: founderPhoto,
        alt: "Traditional leaders and foundation mediators meeting in a village square",
        caption: "Bilateral peace dialogue session facilitated between community representatives.",
        dummy: true
      }
    ],
    relatedSlugs: ["outreach", "healthcare", "youth"]
  }
];
function getProgramBySlug(slug) {
  return programsContent.find((p) => p.slug === slug);
}
const DonationContext = reactExports.createContext(null);
function DonationDialogProvider({
  children,
  initialSettings
}) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [donationSettings, setDonationSettings] = reactExports.useState(initialSettings);
  const openDonationModal = () => setIsOpen(true);
  const closeDonationModal = () => setIsOpen(false);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    DonationContext.Provider,
    {
      value: {
        isOpen,
        openDonationModal,
        closeDonationModal,
        donationSettings,
        setDonationSettings
      },
      children
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/lib/donation-context.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
function useDonationDialog() {
  const context = reactExports.useContext(DonationContext);
  if (!context) {
    throw new Error("useDonationDialog must be used within a DonationDialogProvider");
  }
  return context;
}
function Navbar({ forceSolid = false }) {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { openDonationModal, donationSettings } = useDonationDialog();
  const lightHeroPages = ["/privacy", "/terms", "/outreach"];
  const shouldBeSolid = forceSolid || lightHeroPages.some((p) => currentPath.startsWith(p)) || scrolled;
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open]);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [currentPath]);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/outreach", label: "Outreach" },
    { to: "/impact", label: "Impact" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/contact", label: "Contact" }
  ];
  const isProgramsActive = currentPath.startsWith("/programs");
  const handleDonateClick = (e) => {
    if (donationSettings?.accountNumber) {
      e.preventDefault();
      openDonationModal();
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        shouldBeSolid ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1",
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-soft transition-transform group-hover:scale-105", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-5 w-5 text-accent", strokeWidth: 2 }, void 0, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 88,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 87,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex flex-col leading-tight", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "span",
                    {
                      className: cn(
                        "text-base font-bold tracking-tight transition-colors",
                        shouldBeSolid ? "text-foreground" : "text-primary-foreground"
                      ),
                      children: siteConfig.shortName
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/site/Navbar.tsx",
                      lineNumber: 91,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "span",
                    {
                      className: cn(
                        "text-xs font-semibold uppercase tracking-wider transition-colors",
                        shouldBeSolid ? "text-muted-foreground" : "text-primary-foreground/75"
                      ),
                      children: "Foundation"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/site/Navbar.tsx",
                      lineNumber: 99,
                      columnNumber: 13
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 90,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/components/site/Navbar.tsx",
              lineNumber: 83,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "hidden items-center gap-1.5 lg:flex", "aria-label": "Main Navigation", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/",
                activeProps: { className: "bg-primary-soft text-primary-deep font-semibold" },
                activeOptions: { exact: true },
                className: cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
                  shouldBeSolid ? "text-foreground/80" : "text-primary-foreground/90 hover:text-primary-deep"
                ),
                children: "Home"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 112,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/about",
                activeProps: { className: "bg-primary-soft text-primary-deep font-semibold" },
                className: cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
                  shouldBeSolid ? "text-foreground/80" : "text-primary-foreground/90 hover:text-primary-deep"
                ),
                children: "About"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 126,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DropdownMenu, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                DropdownMenuTrigger,
                {
                  className: cn(
                    "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer",
                    isProgramsActive ? "bg-primary-soft text-primary-deep font-semibold" : shouldBeSolid ? "text-foreground/80" : "text-primary-foreground/90 hover:text-primary-deep"
                  ),
                  children: [
                    "Programs ",
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/site/Navbar.tsx",
                      lineNumber: 151,
                      columnNumber: 24
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 141,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DropdownMenuContent, { align: "start", className: "w-72 p-2 rounded-2xl shadow-elegant", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Link,
                  {
                    to: "/programs",
                    className: "cursor-pointer font-bold text-foreground py-2.5 px-3 rounded-lg focus:bg-primary-soft focus:text-primary-deep",
                    children: "All Five Programs Overview"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/site/Navbar.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 154,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "my-1 border-t border-border" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 162,
                  columnNumber: 15
                }, this),
                programsContent.map((p) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Link,
                  {
                    to: "/programs/$slug",
                    params: { slug: p.slug },
                    className: "cursor-pointer py-2 px-3 rounded-lg text-sm text-foreground/90 hover:bg-primary-soft hover:text-primary-deep focus:bg-primary-soft focus:text-primary-deep",
                    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "font-semibold", children: p.title }, void 0, false, {
                        fileName: "/app/applet/src/components/site/Navbar.tsx",
                        lineNumber: 171,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-xs text-muted-foreground line-clamp-1", children: p.tagline }, void 0, false, {
                        fileName: "/app/applet/src/components/site/Navbar.tsx",
                        lineNumber: 172,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/components/site/Navbar.tsx",
                      lineNumber: 170,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/site/Navbar.tsx",
                    lineNumber: 165,
                    columnNumber: 19
                  },
                  this
                ) }, p.slug, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 164,
                  columnNumber: 17
                }, this))
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 153,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/Navbar.tsx",
              lineNumber: 140,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/outreach",
                activeProps: { className: "bg-primary-soft text-primary-deep font-semibold" },
                className: cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
                  shouldBeSolid ? "text-foreground/80" : "text-primary-foreground/90 hover:text-primary-deep"
                ),
                children: "Outreach"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 180,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/impact",
                activeProps: { className: "bg-primary-soft text-primary-deep font-semibold" },
                className: cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
                  shouldBeSolid ? "text-foreground/80" : "text-primary-foreground/90 hover:text-primary-deep"
                ),
                children: "Impact"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 193,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/get-involved",
                activeProps: { className: "bg-primary-soft text-primary-deep font-semibold" },
                className: cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
                  shouldBeSolid ? "text-foreground/80" : "text-primary-foreground/90 hover:text-primary-deep"
                ),
                children: "Get Involved"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 206,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/contact",
                activeProps: { className: "bg-primary-soft text-primary-deep font-semibold" },
                className: cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-soft hover:text-primary-deep",
                  shouldBeSolid ? "text-foreground/80" : "text-primary-foreground/90 hover:text-primary-deep"
                ),
                children: "Contact"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 219,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/Navbar.tsx",
            lineNumber: 111,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Button,
              {
                asChild: true,
                variant: "hero",
                size: "sm",
                className: "hidden sm:inline-flex cursor-pointer",
                onClick: handleDonateClick,
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "/app/applet/src/components/site/Navbar.tsx",
                    lineNumber: 243,
                    columnNumber: 15
                  }, this),
                  " Donate"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 242,
                  columnNumber: 13
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 235,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: () => setOpen((prev) => !prev),
                "aria-label": open ? "Close navigation menu" : "Open navigation menu",
                "aria-expanded": open,
                className: cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-colors lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  shouldBeSolid ? "bg-background text-foreground hover:bg-secondary" : "bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/25"
                ),
                children: open ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-6 w-6" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 259,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Menu, { className: "h-6 w-6" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 259,
                  columnNumber: 49
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 247,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/Navbar.tsx",
            lineNumber: 234,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/Navbar.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this),
        open && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-b border-border bg-background shadow-elegant lg:hidden animate-in slide-in-from-top-2 duration-200", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "nav",
          {
            className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4",
            "aria-label": "Mobile Navigation",
            children: [
              navLinks.map((l) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  activeProps: { className: "bg-primary-soft text-primary-deep font-semibold" },
                  activeOptions: { exact: l.to === "/" },
                  className: "rounded-xl px-4 py-3 text-base font-semibold text-foreground/90 hover:bg-secondary transition-colors",
                  children: l.label
                },
                l.to,
                false,
                {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 272,
                  columnNumber: 15
                },
                this
              )),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 border-t border-border pt-3", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "px-4 pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Programs" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 285,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Link,
                  {
                    to: "/programs",
                    onClick: () => setOpen(false),
                    className: "block rounded-xl px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft",
                    children: "All Programs Overview"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/components/site/Navbar.tsx",
                    lineNumber: 288,
                    columnNumber: 15
                  },
                  this
                ),
                programsContent.map((p) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Link,
                  {
                    to: "/programs/$slug",
                    params: { slug: p.slug },
                    onClick: () => setOpen(false),
                    className: "block rounded-xl px-4 py-2 text-sm text-foreground/80 hover:bg-secondary",
                    children: p.title
                  },
                  p.slug,
                  false,
                  {
                    fileName: "/app/applet/src/components/site/Navbar.tsx",
                    lineNumber: 296,
                    columnNumber: 17
                  },
                  this
                ))
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 284,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 border-t border-border pt-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Button,
                {
                  asChild: true,
                  variant: "hero",
                  size: "lg",
                  className: "w-full cursor-pointer",
                  onClick: (e) => {
                    setOpen(false);
                    handleDonateClick(e);
                  },
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/donate", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "/app/applet/src/components/site/Navbar.tsx",
                      lineNumber: 320,
                      columnNumber: 19
                    }, this),
                    " Donate Now"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/components/site/Navbar.tsx",
                    lineNumber: 319,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/site/Navbar.tsx",
                  lineNumber: 309,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "/app/applet/src/components/site/Navbar.tsx",
                lineNumber: 308,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/site/Navbar.tsx",
            lineNumber: 267,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/components/site/Navbar.tsx",
          lineNumber: 266,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/site/Navbar.tsx",
      lineNumber: 73,
      columnNumber: 5
    },
    this
  );
}
const Dialog = Dialog$1;
const DialogPortal = DialogPortal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogOverlay$1,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 15,
    columnNumber: 3
  },
  void 0
));
DialogOverlay.displayName = DialogOverlay$1.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogPortal, { children: [
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogOverlay, {}, void 0, false, {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    DialogContent$1,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-elegant duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl max-h-[90vh] overflow-y-auto",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogClose, { className: "absolute right-4 top-4 rounded-full p-1.5 opacity-70 transition-opacity hover:opacity-100 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/components/ui/dialog.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
            fileName: "/app/applet/src/components/ui/dialog.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/ui/dialog.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/ui/dialog.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/app/applet/src/components/ui/dialog.tsx",
  lineNumber: 30,
  columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/dialog.tsx",
  lineNumber: 51,
  columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 56,
    columnNumber: 3
  },
  void 0
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogTitle$1,
  {
    ref,
    className: cn("text-xl font-bold tracking-tight text-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 67,
    columnNumber: 3
  },
  void 0
));
DialogTitle.displayName = DialogTitle$1.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  DialogDescription$1,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/dialog.tsx",
    lineNumber: 79,
    columnNumber: 3
  },
  void 0
));
DialogDescription.displayName = DialogDescription$1.displayName;
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
createServerFn({
  method: "GET"
}).handler(createSsrRpc("1939854af26f8feb9475414b037dcbaa144c906b9e74113adb40abee7c711fe2"));
const adminLoginWithGoogle = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    idToken: stringType().min(10, "Invalid ID token")
  }).parse(data);
}).handler(createSsrRpc("7930f50442db3f840af5b601ea944dbaf8a302815ba34101b530646bcfb8a15c"));
const adminLogout = createServerFn({
  method: "POST"
}).handler(createSsrRpc("b470c62d670ddb6ecf22857062b52245191d08913873a8443fe33368fe0198b7"));
const performClientGoogleSignIn = () => {
  throw new Error("createClientOnlyFn() functions can only be called on the client!");
};
const performClientSignOut = () => {
  throw new Error("createClientOnlyFn() functions can only be called on the client!");
};
function AuthDialog({
  open,
  onOpenChange
}) {
  const [loading, setLoading] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const idToken = await performClientGoogleSignIn();
      if (!idToken) {
        throw new Error("Unable to obtain Google sign-in credentials");
      }
      const result = await adminLoginWithGoogle({
        data: {
          idToken
        }
      });
      if (result.success) {
        onOpenChange(false);
        await navigate({
          to: "/hq-9f3k"
        });
      } else {
        await performClientSignOut();
        setErrorMessage(result.error || "Sign-in failed");
      }
    } catch (err) {
      await performClientSignOut();
      console.error("Sign-in process error:", err);
      setErrorMessage("Sign-in failed. Please check your connection and credentials.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-sm sm:rounded-2xl", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { className: "text-center sm:text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ShieldCheck, { className: "h-6 w-6 text-primary" }, void 0, false, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-xl font-bold text-foreground", children: "Team Sign-in" }, void 0, false, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-xs text-muted-foreground", children: "Authorized foundation coordinators and administrative personnel only." }, void 0, false, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/AuthDialog.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pt-2", children: [
      errorMessage && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive font-medium", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CircleAlert, { className: "h-4 w-4 shrink-0" }, void 0, false, {
          fileName: "/app/applet/src/components/site/AuthDialog.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: errorMessage }, void 0, false, {
          fileName: "/app/applet/src/components/site/AuthDialog.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 74,
        columnNumber: 28
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { type: "button", onClick: handleGoogleSignIn, disabled: loading, className: "w-full py-5 text-sm font-semibold flex items-center justify-center gap-2.5 shadow-soft cursor-pointer", children: loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
          fileName: "/app/applet/src/components/site/AuthDialog.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Verifying credentials..." }, void 0, false, {
          fileName: "/app/applet/src/components/site/AuthDialog.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 80,
        columnNumber: 24
      }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "h-4 w-4 shrink-0", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "currentColor", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
            fileName: "/app/applet/src/components/site/AuthDialog.tsx",
            lineNumber: 85,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "currentColor", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
            fileName: "/app/applet/src/components/site/AuthDialog.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "currentColor", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" }, void 0, false, {
            fileName: "/app/applet/src/components/site/AuthDialog.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { fill: "currentColor", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" }, void 0, false, {
            fileName: "/app/applet/src/components/site/AuthDialog.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/AuthDialog.tsx",
          lineNumber: 84,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Continue with Google" }, void 0, false, {
          fileName: "/app/applet/src/components/site/AuthDialog.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 83,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-center text-[11px] text-muted-foreground", children: "Access attempts are logged for security and accountability." }, void 0, false, {
        fileName: "/app/applet/src/components/site/AuthDialog.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/AuthDialog.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/AuthDialog.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/site/AuthDialog.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
function Footer({ siteData }) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const [authDialogOpen, setAuthDialogOpen] = reactExports.useState(false);
  const clickTimestamps = reactExports.useRef([]);
  const { openDonationModal, donationSettings } = useDonationDialog();
  const handleCopyrightClick = () => {
    const now = Date.now();
    clickTimestamps.current = clickTimestamps.current.filter((t) => now - t <= 3e3);
    clickTimestamps.current.push(now);
    if (clickTimestamps.current.length >= 5) {
      clickTimestamps.current = [];
      setAuthDialogOpen(true);
    }
  };
  const socials = siteData?.socials || siteConfig.socials;
  const address = siteData?.address || siteConfig.address;
  const phone = siteData?.phone || siteConfig.phone;
  const phoneClean = siteData?.phoneClean || siteConfig.phoneClean;
  const email = siteData?.email || siteConfig.email;
  const officeHours = siteData?.officeHours || siteConfig.officeHours;
  const socialItems = [
    { url: socials.facebook, Icon: Facebook, label: "Facebook" },
    { url: socials.x, Icon: Twitter, label: "X (Twitter)" },
    { url: socials.instagram, Icon: Instagram, label: "Instagram" },
    { url: socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: socials.youtube, Icon: Youtube, label: "YouTube" }
  ].filter(
    (item) => Boolean(item.url && item.url.trim().length > 0)
  );
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("footer", { className: "bg-foreground text-background", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-12 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", className: "inline-flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero shadow-soft", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-6 w-6 text-accent", strokeWidth: 2 }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-lg font-extrabold tracking-tight text-background", children: siteConfig.shortName }, void 0, false, {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 83,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs uppercase tracking-wider text-background/60", children: "Development Foundation" }, void 0, false, {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 86,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-sm leading-relaxed text-background/75 max-w-sm", children: "Rooted in Abakaliki, Ebonyi State. We partner with traditional leaders, rural schools, and community groups to advance peaceful coexistence and practical human development." }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this),
          socialItems.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-6 flex flex-wrap gap-2.5", children: socialItems.map(({ url, Icon, label }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "a",
            {
              href: url,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": `Visit our ${label} page`,
              className: "flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-background/5 text-background/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Icon, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this)
            },
            label,
            false,
            {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 101,
              columnNumber: 19
            },
            this
          )) }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/Footer.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-3 sm:col-span-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xs font-bold uppercase tracking-wider text-accent", children: "Organization" }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", className: "text-background/75 transition-colors hover:text-accent", children: "Home" }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 121,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 120,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/about",
                className: "text-background/75 transition-colors hover:text-accent",
                children: "About Our Foundation"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 126,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/outreach",
                className: "text-background/75 transition-colors hover:text-accent",
                children: "Community Outreach"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 134,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 133,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/impact",
                className: "text-background/75 transition-colors hover:text-accent",
                children: "Impact & Verified Results"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 142,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/get-involved",
                className: "text-background/75 transition-colors hover:text-accent",
                children: "Volunteer & Partner"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 150,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: donationSettings?.accountNumber ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "button",
                onClick: openDonationModal,
                className: "text-background/75 transition-colors hover:text-accent text-left cursor-pointer",
                children: "Support Our Programs"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 159,
                columnNumber: 19
              },
              this
            ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/donate",
                className: "text-background/75 transition-colors hover:text-accent",
                children: "Support Our Programs"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 167,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 157,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/contact",
                className: "text-background/75 transition-colors hover:text-accent",
                children: "Contact & Secretariat"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 176,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 175,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/Footer.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-2 sm:col-span-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xs font-bold uppercase tracking-wider text-accent", children: "Programs" }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 188,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/programs",
                className: "text-background/75 font-semibold transition-colors hover:text-accent",
                children: "All Programs"
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 191,
                columnNumber: 17
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 190,
              columnNumber: 15
            }, this),
            programsContent.map((p) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/programs/$slug",
                params: { slug: p.slug },
                className: "text-background/75 transition-colors hover:text-accent line-clamp-1",
                children: p.title
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 200,
                columnNumber: 19
              },
              this
            ) }, p.slug, false, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 199,
              columnNumber: 17
            }, this))
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 189,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/Footer.tsx",
          lineNumber: 187,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "text-xs font-bold uppercase tracking-wider text-accent", children: "Secretariat" }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 214,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("address", { className: "not-italic mt-4 space-y-3.5 text-sm text-background/80", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 217,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
                address,
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "a",
                  {
                    href: siteConfig.mapsUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-1 ml-2 text-xs text-accent underline hover:text-accent/80",
                    children: [
                      "Map ",
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowUpRight, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "/app/applet/src/components/site/Footer.tsx",
                        lineNumber: 226,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/site/Footer.tsx",
                    lineNumber: 220,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 218,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 216,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { className: "h-4 w-4 shrink-0 text-accent", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 231,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "a",
                {
                  href: `tel:${phoneClean}`,
                  className: "transition-colors hover:text-accent",
                  children: phone
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/site/Footer.tsx",
                  lineNumber: 232,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 230,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-4 w-4 shrink-0 text-accent", "aria-hidden": "true" }, void 0, false, {
                fileName: "/app/applet/src/components/site/Footer.tsx",
                lineNumber: 240,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                "a",
                {
                  href: `mailto:${email}`,
                  className: "transition-colors hover:text-accent",
                  children: email
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/components/site/Footer.tsx",
                  lineNumber: 241,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/Footer.tsx",
              lineNumber: 239,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-5 text-xs text-background/60", children: [
            "Office Hours: ",
            officeHours
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 250,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/Footer.tsx",
          lineNumber: 213,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/Footer.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-14 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-8 text-xs text-background/65 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "p",
          {
            onClick: handleCopyrightClick,
            className: "cursor-default select-none transition-colors hover:text-background/85",
            title: "",
            children: [
              "© ",
              currentYear,
              " ",
              siteConfig.name,
              ". All rights reserved."
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 258,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center gap-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/privacy", className: "transition-colors hover:text-accent", children: "Privacy Policy (NDPA 2023)" }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/terms", className: "transition-colors hover:text-accent", children: "Terms of Use" }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 269,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/contact", className: "transition-colors hover:text-accent", children: "Feedback" }, void 0, false, {
            fileName: "/app/applet/src/components/site/Footer.tsx",
            lineNumber: 272,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/Footer.tsx",
          lineNumber: 265,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/Footer.tsx",
        lineNumber: 257,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/Footer.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AuthDialog, { open: authDialogOpen, onOpenChange: setAuthDialogOpen }, void 0, false, {
      fileName: "/app/applet/src/components/site/Footer.tsx",
      lineNumber: 279,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/Footer.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
function AnnouncementBanner({ announcement }) {
  const [dismissed, setDismissed] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof sessionStorage !== "undefined" && announcement?.text) {
      const isDismissed = sessionStorage.getItem(`announcement_${announcement.text.slice(0, 20)}`);
      if (isDismissed) setDismissed(true);
    }
  }, [announcement]);
  if (!announcement?.enabled || !announcement.text || dismissed) {
    return null;
  }
  const handleDismiss = () => {
    setDismissed(true);
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(`announcement_${announcement.text.slice(0, 20)}`, "true");
    }
  };
  const isInternal = announcement.linkUrl?.startsWith("/");
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative z-[60] bg-primary-deep text-primary-foreground px-4 py-2 text-xs md:text-sm font-medium shadow-md", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2 overflow-hidden", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Megaphone, { className: "h-3 w-3" }, void 0, false, {
        fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "truncate", children: announcement.text }, void 0, false, {
        fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      announcement.linkLabel && announcement.linkUrl && (isInternal ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Link,
        {
          to: announcement.linkUrl,
          className: "inline-flex items-center gap-0.5 text-accent font-bold hover:underline shrink-0 ml-2",
          children: [
            announcement.linkLabel,
            " ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
              lineNumber: 52,
              columnNumber: 42
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
          lineNumber: 48,
          columnNumber: 15
        },
        this
      ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "a",
        {
          href: announcement.linkUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-0.5 text-accent font-bold hover:underline shrink-0 ml-2",
          children: [
            announcement.linkLabel,
            " ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
              lineNumber: 61,
              columnNumber: 42
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
          lineNumber: 55,
          columnNumber: 15
        },
        this
      ))
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        type: "button",
        onClick: handleDismiss,
        "aria-label": "Dismiss announcement",
        className: "rounded p-1 text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground focus:outline-none focus:ring-1 focus:ring-accent",
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
        lineNumber: 67,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/site/AnnouncementBanner.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function DonationDialog() {
  const { isOpen, closeDonationModal, donationSettings } = useDonationDialog();
  const [copied, setCopied] = reactExports.useState(false);
  const [selectedAmount, setSelectedAmount] = reactExports.useState(null);
  const hasAccountNumber = Boolean(donationSettings?.accountNumber && donationSettings.accountNumber.trim().length > 0);
  const bankName = donationSettings?.bankName || siteConfig.bankName || "Official Partner Bank";
  const accountName = donationSettings?.accountName || siteConfig.bankAccountName || siteConfig.name;
  const accountNumber = donationSettings?.accountNumber || "";
  const suggestedAmounts = donationSettings?.suggestedAmounts || [5e3, 15e3, 35e3, 75e3, 15e4];
  const handleCopy = async () => {
    if (!accountNumber) return;
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
    }
  };
  const formatNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }).format(amount);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Dialog, { open: isOpen, onOpenChange: (open) => !open && closeDonationModal(), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogContent, { className: "max-w-lg", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogHeader, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heart, { className: "h-6 w-6 text-primary" }, void 0, false, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogTitle, { className: "text-center text-2xl font-extrabold text-foreground", children: hasAccountNumber ? "Support Community Programs" : "Direct Bank Transfer Inquiries" }, void 0, false, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DialogDescription, { className: "text-center text-muted-foreground text-sm", children: hasAccountNumber ? "Your donation directly funds clean water boreholes, school retention kits, and medical relief across rural Ebonyi State." : "Our official audited foundation accounts are undergoing scheduled secretariat verification." }, void 0, false, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/DonationDialog.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    hasAccountNumber ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-5 pt-2", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary-soft/50 to-primary-soft/20 p-5 shadow-soft", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Building2, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            " Official Bank Account"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          donationSettings?.accountType && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "rounded-full bg-primary/15 px-2.5 py-0.5 text-primary text-[10px] font-extrabold", children: donationSettings.accountType }, void 0, false, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground font-medium", children: "Bank Name" }, void 0, false, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-base font-bold text-foreground", children: bankName }, void 0, false, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs text-muted-foreground font-medium", children: "Account Name" }, void 0, false, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-semibold text-foreground/90", children: accountName }, void 0, false, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-primary/20 pt-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold uppercase tracking-wider text-primary", children: "Account Number" }, void 0, false, {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-mono text-2xl font-black text-foreground tracking-wider", children: accountNumber }, void 0, false, {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              type: "button",
              onClick: handleCopy,
              variant: copied ? "default" : "outline",
              size: "sm",
              className: "gap-1.5 font-semibold shrink-0 cursor-pointer",
              children: copied ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4 text-primary-foreground" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                  lineNumber: 103,
                  columnNumber: 23
                }, this),
                " Copied!"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 102,
                columnNumber: 21
              }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Copy, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                  lineNumber: 107,
                  columnNumber: 23
                }, this),
                " Copy Number"
              ] }, void 0, true, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 106,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 94,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        donationSettings?.extraNote && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-xs text-muted-foreground italic border-t border-border/40 pt-2", children: donationSettings.extraNote }, void 0, false, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2", children: "Suggested Sponsorship Amounts" }, void 0, false, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-2", children: suggestedAmounts.map((amt) => {
          const isSelected = selectedAmount === amt;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => setSelectedAmount(isSelected ? null : amt),
              className: `rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${isSelected ? "bg-primary text-primary-foreground shadow-soft scale-105" : "bg-secondary text-secondary-foreground hover:bg-primary-soft hover:text-primary"}`,
              children: formatNaira(amt)
            },
            amt,
            false,
            {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 129,
              columnNumber: 21
            },
            this
          );
        }) }, void 0, false, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        selectedAmount && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-3 rounded-xl bg-accent/15 border border-accent/30 p-3 text-xs font-semibold text-foreground flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
            "Send ",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("strong", { className: "text-primary-deep", children: formatNaira(selectedAmount) }, void 0, false, {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 147,
              columnNumber: 30
            }, this),
            " to the verified account above"
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 147,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-[10px] text-muted-foreground", children: "Reference: Donation" }, void 0, false, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-4 text-xs", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Link,
          {
            to: "/contact",
            search: { reason: "donation" },
            onClick: closeDonationModal,
            className: "text-primary font-bold hover:underline inline-flex items-center gap-1",
            children: [
              "I've sent a gift & want a receipt ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-3 w-3" }, void 0, false, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 161,
                columnNumber: 56
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 155,
            columnNumber: 15
          },
          this
        ),
        donationSettings?.updatedAt && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-muted-foreground text-[11px]", children: [
          "Details updated: ",
          new Date(donationSettings.updatedAt).toLocaleDateString()
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 164,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/DonationDialog.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) : (
      /* Fallback when bank account is pending verification */
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-2xl border border-border bg-secondary/40 p-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-foreground/90 font-medium", children: "Please contact our secretariat directly to receive official verified bank transfer instructions:" }, void 0, false, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-2 pt-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Phone, { className: "h-4 w-4 text-primary shrink-0" }, void 0, false, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 179,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `tel:${siteConfig.phoneClean}`, className: "font-semibold text-foreground hover:text-primary", children: siteConfig.phone }, void 0, false, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 180,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 178,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Mail, { className: "h-4 w-4 text-primary shrink-0" }, void 0, false, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 185,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `mailto:${siteConfig.email}`, className: "font-semibold text-foreground hover:text-primary", children: siteConfig.email }, void 0, false, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/DonationDialog.tsx",
              lineNumber: 184,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex justify-end gap-2 pt-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "default", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Link,
          {
            to: "/contact",
            search: { reason: "transfer-request" },
            onClick: closeDonationModal,
            children: [
              "Request Bank Transfer Details ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/components/site/DonationDialog.tsx",
                lineNumber: 200,
                columnNumber: 49
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/components/site/DonationDialog.tsx",
            lineNumber: 195,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/components/site/DonationDialog.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/DonationDialog.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/DonationDialog.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/site/DonationDialog.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/components/ui/sonner.tsx",
      lineNumber: 7,
      columnNumber: 5
    },
    void 0
  );
};
function SiteLayout({
  children,
  navbarForceSolid = false,
  siteData,
  announcement
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: "#main",
        className: "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-elegant focus:outline-none focus:ring-2 focus:ring-ring",
        children: "Skip to main content"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/site/SiteLayout.tsx",
        lineNumber: 42,
        columnNumber: 7
      },
      this
    ),
    announcement?.enabled && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(AnnouncementBanner, { announcement }, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 49,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Navbar, { forceSolid: navbarForceSolid }, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { id: "main", tabIndex: -1, className: "flex-1 focus:outline-none", children }, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Footer, { siteData }, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DonationDialog, {}, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Toaster, { richColors: true, position: "top-center", closeButton: true }, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/SiteLayout.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
const getPublicSiteData = createServerFn({
  method: "GET"
}).handler(createSsrRpc("53debb3c179e17d3d7ec355deb5600811f64f946db098a077c5579068e6878cc"));
const getPublicOutreachList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("a7993a4f8bc9d0af5c3948678e2872c24c621cfeff1979460f5a14904e15a071"));
const getPublicOutreachBySlug = createServerFn({
  method: "GET"
}).validator((data) => objectType({
  slug: stringType()
}).parse(data)).handler(createSsrRpc("020a7c8b17ff81c3dd38883023a4505352fcbcd32b63163951ed4f113c92d8c4"));
const getPublicTeamList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("0d348caecff4fc2e7f64c73f884f587bb17ce77b836990ed531b3a60c9b854bf"));
const getPublicStories = createServerFn({
  method: "GET"
}).handler(createSsrRpc("408cc418449c4962e12a393772bc6b41d92b6944230def480c1e33a5e3337736"));
createServerFn({
  method: "GET"
}).validator((data) => objectType({
  programSlug: stringType().optional()
}).parse(data)).handler(createSsrRpc("2864f05aea5bd290d738a774832bbe48209546b4c46aa2c65f1e1465c2bf8ca5"));
createServerFn({
  method: "GET"
}).validator((data) => objectType({
  programSlug: stringType().optional()
}).parse(data)).handler(createSsrRpc("c1921a5c0bed4bcd0b1ea2af6eb7a8dde58dfeffff6079619316d13c32118245"));
const getAdminOverviewData = createServerFn({
  method: "GET"
}).handler(createSsrRpc("e5618a8626ab1376efdcec3d76cfe0a4e7e1756b1799bbf609efc9fc91d9e091"));
const getAdminOutreachList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("54034e820206593cb2295ca2e3a71ecd53061924b005a0872cdc5b42b43c9c5e"));
const saveAdminOutreach = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    slug: stringType().trim().min(2).max(100),
    title: stringType().trim().min(3).max(150),
    date: stringType().trim().min(4).max(50),
    location: stringType().trim().min(2).max(100),
    summary: stringType().trim().min(10).max(500),
    body: stringType().trim().min(10).max(2e4),
    program: stringType().trim().min(2).max(50),
    status: enumType(["draft", "published", "archived"]),
    images: arrayType(objectType({
      url: stringType().url("Must be a valid URL"),
      alt: stringType().trim().min(2, "Alt text is required"),
      caption: stringType().trim().max(300).optional()
    }))
  }).parse(data);
}).handler(createSsrRpc("ad15cebd11ea86292039064a8adc354ca98a26144568f6bb23fb7c6a40886fb1"));
const deleteAdminOutreach = createServerFn({
  method: "POST"
}).validator((data) => objectType({
  id: stringType(),
  confirmedTitle: stringType()
}).parse(data)).handler(createSsrRpc("928437b95a4c96fd29637896f5f05e4a9c1a27207c4549e5928d528d4b6ff28a"));
const getAdminTeamList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("4bf068c91eb00f9e21b1626644bdddae5e57ed32fe66d3db55dca1ad7af54f88"));
const saveAdminTeamMember = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    name: stringType().trim().min(2).max(100),
    role: stringType().trim().min(2).max(100),
    department: stringType().trim().min(2).max(100),
    bio: stringType().trim().min(10).max(1e3),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"]),
    isFounder: booleanType().optional(),
    photo: objectType({
      url: stringType().url(),
      alt: stringType().trim().min(2)
    }).optional()
  }).parse(data);
}).handler(createSsrRpc("d47378d6a66f9a69df2f35f64fa119ec9ec245c6a9891dd1c6ec6486f8ddc16a"));
const reorderAdminTeam = createServerFn({
  method: "POST"
}).validator((data) => objectType({
  items: arrayType(objectType({
    id: stringType(),
    order: numberType()
  }))
}).parse(data)).handler(createSsrRpc("7d11c4d7c521eef5130e553fc29a9fde1573e733439ae9a34726914ed981ff39"));
const getAdminDonationSettings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("c5f880a175fe9ed4216bea905ab98c6da2dba92c06084905aed1a89f74c3bf7f"));
const saveAdminDonationSettings = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    bankName: stringType().trim().max(100).optional().or(literalType("")),
    accountName: stringType().trim().max(100).optional().or(literalType("")),
    accountNumber: stringType().trim().regex(/^[\d\s]*$/, "Account number must contain digits only").max(30).optional().or(literalType("")),
    accountType: stringType().trim().max(100).optional().or(literalType("")),
    extraNote: stringType().trim().max(500).optional().or(literalType("")),
    suggestedAmounts: arrayType(numberType().positive()).min(1).max(10),
    confirmedAccountNumber: stringType().trim().optional()
  }).parse(data);
}).handler(createSsrRpc("f72370414a7865042386378300d6d670285f86ea0599d69e75455c12ca56afb6"));
const getAdminSiteSettings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("735f49be6538cc885c97d29198fac71ed97d34b877995a37540a8e6d33da26f7"));
const saveAdminSiteSettings = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    phone: stringType().trim().min(5).max(40),
    email: stringType().trim().email().max(100),
    address: stringType().trim().min(5).max(200),
    officeHours: stringType().trim().max(150),
    socials: objectType({
      facebook: stringType().trim().optional().or(literalType("")),
      x: stringType().trim().optional().or(literalType("")),
      instagram: stringType().trim().optional().or(literalType("")),
      linkedin: stringType().trim().optional().or(literalType("")),
      youtube: stringType().trim().optional().or(literalType(""))
    }),
    announcement: objectType({
      enabled: booleanType(),
      text: stringType().trim().max(300),
      linkLabel: stringType().trim().max(60).optional().or(literalType("")),
      linkUrl: stringType().trim().max(300).optional().or(literalType(""))
    })
  }).parse(data);
}).handler(createSsrRpc("b3fd795c6f8baa2517a83c1558e89053d158ef9f09becb6b64467afc21816c0c"));
const getAdminHomeSettings = createServerFn({
  method: "GET"
}).handler(createSsrRpc("3564f2be0f5570198a58868a8eb8070f82c61bbd6ca22424429fb5ce9c2de880"));
const saveAdminHomeSettings = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    heroHeadline: stringType().trim().max(200).optional().or(literalType("")),
    heroSubline: stringType().trim().max(400).optional().or(literalType("")),
    headlineStats: arrayType(objectType({
      value: stringType().trim().min(1).max(30),
      label: stringType().trim().min(1).max(60),
      asOf: stringType().trim().min(1).max(40)
    }))
  }).parse(data);
}).handler(createSsrRpc("856cef79a26972b8a9ff02c67d085b6bc2b560b275e7e6ff11b68289d41220d7"));
const getAdminStoriesList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("0dcd2806c7445a504d972d3dffddbed2a9a93bd241074d08945814b20d60c778"));
const saveAdminStory = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    title: stringType().trim().min(3).max(150),
    beneficiary: stringType().trim().min(2).max(100),
    location: stringType().trim().min(2).max(100),
    program: stringType().trim().min(2).max(100),
    programSlug: stringType().trim().min(2).max(50),
    summary: stringType().trim().min(10).max(600),
    quote: stringType().trim().min(5).max(600),
    outcomes: arrayType(stringType().trim().min(1).max(200)),
    asOf: stringType().trim().min(2).max(50),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"])
  }).parse(data);
}).handler(createSsrRpc("855aae838d59a98b6f31ce20df20f46f97abd301a3ecd4c58b19496b49b43ead"));
const getAdminFaqsList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("cb2fb61b06e12e915e73280def3b2870441f46f199ed29fd0cc503d0dc0b5e45"));
const saveAdminFaq = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    question: stringType().trim().min(5).max(300),
    answer: stringType().trim().min(5).max(2e3),
    programSlug: stringType().trim().min(2).max(50),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"])
  }).parse(data);
}).handler(createSsrRpc("7c0e03900157702dc74fb5fc5a69bf266c0d72b3db59cca375100c413b822ae2"));
const getAdminGalleryList = createServerFn({
  method: "GET"
}).handler(createSsrRpc("7938a64d9b10b3819e4c3244c739dbd6846d2aa5cecc6893fb0eade1a9cb6851"));
const saveAdminGalleryItem = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType().optional(),
    src: stringType().url("Must be a valid URL"),
    alt: stringType().trim().min(2, "Alt text is required"),
    caption: stringType().trim().max(300).optional().or(literalType("")),
    programSlug: stringType().trim().min(2).max(50),
    order: numberType().int().min(0),
    status: enumType(["draft", "published", "archived"])
  }).parse(data);
}).handler(createSsrRpc("58ccd830ce1aafb3a0b762aa10184d485a6b164e35df2747249043ac5bf0f31e"));
const getAdminMessages = createServerFn({
  method: "GET"
}).handler(createSsrRpc("639d64f4d283389e435b894321601c7936aa2f9f8e06586894674fcbd1456755"));
const updateAdminMessageStatus = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    id: stringType(),
    read: booleanType().optional(),
    archived: booleanType().optional()
  }).parse(data);
}).handler(createSsrRpc("c17759cee9faedadc54ec53d42b77976ee262aeadf92871357f443ae34b2d07c"));
const getAdminAuditLogs = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ed7a9b2fcd974cd4052ad0228069e2af66e6b5abf564b68d3980f8362ec96389"));
const uploadAdminImage = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    base64Data: stringType().min(10),
    contentType: enumType(["image/jpeg", "image/png", "image/webp"]),
    alt: stringType().trim().min(2, "Alt text is required for accessibility")
  }).parse(data);
}).handler(createSsrRpc("4930ad76b269cad4dad408de03a49216410542281d91f4885b4a3cceb00b11b3"));
function NotFoundComponent() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { navbarForceSolid: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-[65vh] items-center justify-center px-4 py-20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs font-bold uppercase tracking-wider text-primary", children: "Error 404" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-3 text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight", children: "Page Not Found" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: "The page you are looking for may have been moved, renamed, or is temporarily unavailable." }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "default", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this),
        " Return to Home"
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/contact", children: "Contact Secretariat" }, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function RootErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { navbarForceSolid: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-[65vh] items-center justify-center px-4 py-20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-lg text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TriangleAlert, { className: "h-7 w-7", "aria-hidden": "true" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight", children: "Unable to load page" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-base text-muted-foreground leading-relaxed", children: "We encountered an unexpected issue while preparing this content. Please try refreshing or return to the main homepage." }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          variant: "default",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RefreshCw, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/app/applet/src/routes/__root.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            " Refresh Page"
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 65,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", children: "Return to Home" }, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
function RootPendingComponent() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      className: "flex min-h-[50vh] items-center justify-center py-24",
      "aria-busy": "true",
      "aria-live": "polite",
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" }, void 0, false, {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm font-medium text-muted-foreground", children: "Loading page..." }, void 0, false, {
          fileName: "/app/applet/src/routes/__root.tsx",
          lineNumber: 93,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 91,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 86,
      columnNumber: 5
    },
    this
  );
}
const Route$d = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1b4d3e" }
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      }
    ]
  }),
  loader: async () => {
    try {
      const siteData = await getPublicSiteData();
      return { siteData };
    } catch {
      return { siteData: void 0 };
    }
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: RootErrorComponent,
  pendingComponent: RootPendingComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("head", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("body", { children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 136,
    columnNumber: 5
  }, this);
}
function RootComponent() {
  const data = Route$d.useLoaderData();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(DonationDialogProvider, { initialSettings: data?.siteData?.donation, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Outlet, {}, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 152,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 151,
    columnNumber: 5
  }, this);
}
function buildSeoMeta({
  path,
  title,
  description,
  type = "website",
  image,
  imageAlt
}) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
  const resolvedImage = image ? image.startsWith("http") ? image : `${siteConfig.siteUrl}${image.startsWith("/") ? "" : "/"}${image}` : `${siteConfig.siteUrl}/og-image.jpg`;
  const resolvedAlt = imageAlt || "Envo Peace and Development Foundation — Community Work in Ebonyi State";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: resolvedImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: resolvedAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: resolvedImage },
      { name: "twitter:image:alt", content: resolvedAlt }
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl
      }
    ]
  };
}
function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/apple-touch-icon.png`,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founderName,
      jobTitle: siteConfig.founderTitle
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 1, Hilltop Rd",
      addressLocality: "Abakaliki",
      addressRegion: "Ebonyi State",
      addressCountry: "NG"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer support",
      email: siteConfig.email,
      areaServed: "NG",
      availableLanguage: ["English", "Igbo"]
    },
    sameAs: Object.values(siteConfig.socials).filter(Boolean)
  };
}
const $$splitComponentImporter$c = () => import("./index-BLFiN_bg.mjs");
const Route$c = createFileRoute()({
  head: () => {
    const seo = buildSeoMeta({
      path: "/",
      title: "Envo Peace & Development Foundation — Ebonyi State NGO",
      description: "Envo Peace Foundation advances grassroots community development, rural healthcare clinics, child education support, and youth livelihoods across Ebonyi State."
    });
    const jsonLd = getOrganizationJsonLd();
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(jsonLd)
      }]
    };
  },
  loader: async () => {
    const [siteData, stories, outreach] = await Promise.all([getPublicSiteData(), getPublicStories(), getPublicOutreachList()]);
    return {
      siteData,
      stories,
      outreach
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./about-DxVg_56J.mjs");
const Route$b = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/about",
    title: "About Our Foundation — Envo Peace & Development",
    description: "Learn about the mission, leadership, and community history of Envo Peace Foundation, founded by Alh Nasir Ernest Nwagwu Nwaze in Abakaliki, Nigeria."
  }),
  loader: async () => {
    const [team, siteData] = await Promise.all([getPublicTeamList(), getPublicSiteData()]);
    return {
      team,
      siteData
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./contact-jwH-nruH.mjs");
const Route$a = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/contact",
    title: "Contact Us — Envo Peace & Development Secretariat",
    description: "Contact Envo Peace Foundation at our Abakaliki secretariat on Hilltop Road. Reach our coordination team via phone, email, or direct message."
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./donate-aRvYKCBa.mjs");
const Route$9 = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/donate",
    title: "Support Our Cause — Envo Peace Foundation",
    description: "Support Envo Peace Foundation programs in Ebonyi State. Directly fund classroom scholarships, mobile rural clinics, clean water, and relief."
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./get-involved-yt3RrzR_.mjs");
const Route$8 = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/get-involved",
    title: "Get Involved — Volunteer & Partner With Envo Peace",
    description: "Join Envo Peace Foundation as a medical volunteer, educational mentor, or corporate partner to support rural communities in Ebonyi State."
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./hq-9f3k-DmQsJpml.mjs");
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      name: "robots",
      content: "noindex, nofollow"
    }, {
      title: "Management Console"
    }]
  }),
  loader: async () => {
    try {
      const overview = await getAdminOverviewData();
      return {
        admin: {
          email: overview.adminEmail,
          uid: "admin"
        },
        overview
      };
    } catch {
      throw notFound();
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./impact-bQziW3XA.mjs");
const Route$6 = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/impact",
    title: "Verified Community Impact — Envo Peace Foundation",
    description: "Review verified field outcomes from Envo Peace Foundation across Ebonyi State: over 10,000 individuals served in healthcare, education, and relief."
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./privacy-BzIXFodh.mjs");
const Route$5 = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/privacy",
    title: "Privacy Policy — Envo Peace & Development",
    description: "Read the Envo Peace Foundation privacy policy, aligned with Nigeria's NDPA 2023. Learn how contact inquiries and donor records are secured."
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./terms-DYTSyqu5.mjs");
const Route$4 = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/terms",
    title: "Terms of Use — Envo Peace & Development",
    description: "Read the terms governing the use of the Envo Peace Foundation website, intellectual property, donation policies, and community submissions."
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./outreach.index-BApW5EkY.mjs");
const Route$3 = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/outreach",
    title: "Community Outreach & Field Reports | Envo Peace Foundation",
    description: "Field updates, relief distributions, and community outreach missions conducted across rural settlements in Ebonyi State."
  }),
  loader: async () => {
    const [outreachList, siteData] = await Promise.all([getPublicOutreachList(), getPublicSiteData()]);
    return {
      outreachList,
      siteData
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./outreach._slug-Dn5VCp5F.mjs");
const Route$2 = createFileRoute()({
  head: ({
    loaderData
  }) => {
    const item = loaderData?.item;
    if (!item) {
      return buildSeoMeta({
        path: "/outreach",
        title: "Outreach Report | Envo Peace Foundation",
        description: "Field mission report from Envo Peace Foundation."
      });
    }
    const cover = item.images && item.images.length > 0 ? item.images[0].url : void 0;
    return buildSeoMeta({
      path: `/outreach/${item.slug}`,
      title: `${item.title} | Envo Peace Outreach`,
      description: item.summary,
      type: "article",
      image: cover,
      imageAlt: item.images && item.images.length > 0 ? item.images[0].alt : item.title
    });
  },
  loader: async ({
    params
  }) => {
    const [item, siteData] = await Promise.all([getPublicOutreachBySlug({
      data: {
        slug: params.slug
      }
    }), getPublicSiteData()]);
    if (!item) {
      throw notFound();
    }
    return {
      item,
      siteData
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./programs.index-BUhK8q3C.mjs");
const Route$1 = createFileRoute()({
  head: () => buildSeoMeta({
    path: "/programs",
    title: "Our Five Programs — Envo Peace & Development",
    description: "Explore Envo Peace Foundation's five core initiatives: rural outreach, school scholarships, mobile healthcare, youth vocational skills, and clean water development."
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./programs._slug-YgS4KrGp.mjs");
const $$splitNotFoundComponentImporter = () => import("./programs._slug-BL-75H7I.mjs");
const Route = createFileRoute()({
  head: ({
    params
  }) => {
    const program = getProgramBySlug(params.slug);
    if (!program) {
      return buildSeoMeta({
        path: `/programs/${params.slug}`,
        title: "Program Not Found — Envo Peace Foundation",
        description: "The requested program initiative could not be found."
      });
    }
    return buildSeoMeta({
      path: `/programs/${program.slug}`,
      title: `${program.title} — Envo Peace Foundation`,
      description: program.summary.slice(0, 150)
    });
  },
  loader: ({
    params
  }) => {
    const program = getProgramBySlug(params.slug);
    if (!program) {
      throw notFound();
    }
    return {
      program
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const AboutRoute = Route$b.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$d
});
const ContactRoute = Route$a.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$d
});
const DonateRoute = Route$9.update({
  id: "/donate",
  path: "/donate",
  getParentRoute: () => Route$d
});
const GetInvolvedRoute = Route$8.update({
  id: "/get-involved",
  path: "/get-involved",
  getParentRoute: () => Route$d
});
const Hq9f3kRoute = Route$7.update({
  id: "/hq-9f3k",
  path: "/hq-9f3k",
  getParentRoute: () => Route$d
});
const ImpactRoute = Route$6.update({
  id: "/impact",
  path: "/impact",
  getParentRoute: () => Route$d
});
const PrivacyRoute = Route$5.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$d
});
const TermsRoute = Route$4.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$d
});
const OutreachIndexRoute = Route$3.update({
  id: "/outreach/",
  path: "/outreach/",
  getParentRoute: () => Route$d
});
const OutreachSlugRoute = Route$2.update({
  id: "/outreach/$slug",
  path: "/outreach/$slug",
  getParentRoute: () => Route$d
});
const ProgramsIndexRoute = Route$1.update({
  id: "/programs/",
  path: "/programs/",
  getParentRoute: () => Route$d
});
const ProgramsSlugRoute = Route.update({
  id: "/programs/$slug",
  path: "/programs/$slug",
  getParentRoute: () => Route$d
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  DonateRoute,
  GetInvolvedRoute,
  Hq9f3kRoute,
  ImpactRoute,
  PrivacyRoute,
  TermsRoute,
  OutreachSlugRoute,
  ProgramsSlugRoute,
  OutreachIndexRoute,
  ProgramsIndexRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  getAdminStoriesList as A,
  Button as B,
  saveAdminStory as C,
  Dialog as D,
  getAdminFaqsList as E,
  saveAdminFaq as F,
  getAdminGalleryList as G,
  saveAdminGalleryItem as H,
  getAdminMessages as I,
  updateAdminMessageStatus as J,
  uploadAdminImage as K,
  Route$3 as L,
  Route$2 as M,
  Route as N,
  router as O,
  Route$c as R,
  SiteLayout as S,
  Route$b as a,
  Route$7 as b,
  createSsrRpc as c,
  adminLogout as d,
  DialogContent as e,
  DialogHeader as f,
  getAdminOverviewData as g,
  heroImg as h,
  DialogTitle as i,
  DialogDescription as j,
  DialogFooter as k,
  getAdminSiteSettings as l,
  getAdminHomeSettings as m,
  getAdminAuditLogs as n,
  getAdminOutreachList as o,
  programsContent as p,
  deleteAdminOutreach as q,
  getAdminTeamList as r,
  saveAdminOutreach as s,
  reorderAdminTeam as t,
  useDonationDialog as u,
  saveAdminTeamMember as v,
  getAdminDonationSettings as w,
  saveAdminDonationSettings as x,
  saveAdminSiteSettings as y,
  saveAdminHomeSettings as z
};
