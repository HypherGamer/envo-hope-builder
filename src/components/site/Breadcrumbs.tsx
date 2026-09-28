import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
  params?: Record<string, string>;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
}

export function Breadcrumbs({ items, className = "", variant = "dark" }: BreadcrumbsProps) {
  const isDark = variant === "dark";
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            to="/"
            className={`transition-colors font-medium ${
              isDark
                ? "text-primary-foreground/75 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              <ChevronRight
                className={`h-4 w-4 shrink-0 ${
                  isDark ? "text-primary-foreground/50" : "text-muted-foreground/60"
                }`}
                aria-hidden="true"
              />
              {isLast || !item.to ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`font-semibold ${
                    isDark ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  params={item.params}
                  className={`transition-colors font-medium ${
                    isDark
                      ? "text-primary-foreground/75 hover:text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
