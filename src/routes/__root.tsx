import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react";
import { getPublicSiteData } from "@/lib/content.server";
import { DonationDialogProvider } from "@/lib/donation-context";

function NotFoundComponent() {
  return (
    <SiteLayout navbarForceSolid>
      <div className="flex min-h-[65vh] items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Error 404</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily
            unavailable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="default">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" /> Return to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Secretariat</Link>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();

  return (
    <SiteLayout navbarForceSolid>
      <div className="flex min-h-[65vh] items-center justify-center px-4 py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Unable to load page
          </h1>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            We encountered an unexpected issue while preparing this content. Please try refreshing
            or return to the main homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              variant="default"
            >
              <RefreshCw className="h-4 w-4" /> Refresh Page
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function RootPendingComponent() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center py-24"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <span className="text-sm font-medium text-muted-foreground">Loading page...</span>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1b4d3e" },
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
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
    ],
  }),
  loader: async () => {
    try {
      const siteData = await getPublicSiteData();
      return { siteData };
    } catch {
      return { siteData: undefined };
    }
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: RootErrorComponent,
  pendingComponent: RootPendingComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const data = Route.useLoaderData();
  return (
    <DonationDialogProvider initialSettings={data?.siteData?.donation}>
      <Outlet />
    </DonationDialogProvider>
  );
}
