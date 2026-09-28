import { r as reactExports, c as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./about-founder-CCLG_U39.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "textarea",
      {
        className: cn(
          "flex min-h-[100px] w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/components/ui/textarea.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      void 0
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Root, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "/app/applet/src/components/ui/label.tsx",
  lineNumber: 17,
  columnNumber: 3
}, void 0));
Label.displayName = Root.displayName;
export {
  Label as L,
  Textarea as T
};
