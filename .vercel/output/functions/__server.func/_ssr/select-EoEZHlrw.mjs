import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { c as cn } from "./about-founder-CCLG_U39.mjs";
import { d as ChevronDown, a as Check, w as ChevronUp } from "../_libs/lucide-react.mjs";
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex min-h-[44px] w-full items-center justify-between whitespace-nowrap rounded-lg border border-input bg-background px-3.5 py-2 text-base md:text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/app/applet/src/components/ui/select.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  void 0
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronUp, { className: "h-4 w-4" }, void 0, false, {
      fileName: "/app/applet/src/components/ui/select.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/select.tsx",
    lineNumber: 39,
    columnNumber: 3
  },
  void 0
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronDown, { className: "h-4 w-4" }, void 0, false, {
      fileName: "/app/applet/src/components/ui/select.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/select.tsx",
    lineNumber: 53,
    columnNumber: 3
  },
  void 0
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectPortal, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectScrollUpButton, {}, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/components/ui/select.tsx",
          lineNumber: 80,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectScrollDownButton, {}, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/app/applet/src/components/ui/select.tsx",
    lineNumber: 68,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/app/applet/src/components/ui/select.tsx",
  lineNumber: 67,
  columnNumber: 3
}, void 0));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/select.tsx",
    lineNumber: 99,
    columnNumber: 3
  },
  void 0
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItemIndicator, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 119,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SelectItemText, { children }, void 0, false, {
        fileName: "/app/applet/src/components/ui/select.tsx",
        lineNumber: 124,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/app/applet/src/components/ui/select.tsx",
    lineNumber: 111,
    columnNumber: 3
  },
  void 0
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/app/applet/src/components/ui/select.tsx",
    lineNumber: 133,
    columnNumber: 3
  },
  void 0
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
export {
  Select as S,
  SelectTrigger as a,
  SelectValue as b,
  SelectContent as c,
  SelectItem as d
};
