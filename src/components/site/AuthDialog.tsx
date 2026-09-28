import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { createClientOnlyFn } from "@tanstack/react-start";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { adminLoginWithGoogle } from "@/lib/admin-auth.server";
import { ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const performClientGoogleSignIn = createClientOnlyFn(async () => {
  const { signInWithGoogleClient } = await import("@/lib/firebase.client");
  return signInWithGoogleClient();
});

const performClientSignOut = createClientOnlyFn(async () => {
  const { signOutClient } = await import("@/lib/firebase.client");
  return signOutClient();
});

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      // 1. Client-side Google popup sign-in
      const idToken = await performClientGoogleSignIn();
      if (!idToken) {
        throw new Error("Unable to obtain Google sign-in credentials");
      }

      // 2. Send ID token to server for admin verification & session cookie creation
      const result = await adminLoginWithGoogle({ data: { idToken } });

      if (result.success) {
        onOpenChange(false);
        // Navigate to the obscure admin headquarters
        await navigate({ to: "/hq-9f3k" });
      } else {
        // Disallowed email or invalid token -> immediately sign out client
        await performClientSignOut();
        setErrorMessage(result.error || "Sign-in failed");
      }
    } catch (err: unknown) {
      await performClientSignOut();
      console.error("Sign-in process error:", err);
      setErrorMessage("Sign-in failed. Please check your connection and credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm sm:rounded-2xl">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-bold text-foreground">
            Team Sign-in
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Authorized foundation coordinators and administrative personnel only.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {errorMessage && (
            <div className="flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive font-medium">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full py-5 text-sm font-semibold flex items-center justify-center gap-2.5 shadow-soft cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Verifying credentials...</span>
              </>
            ) : (
              <>
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </Button>

          <p className="text-center text-[11px] text-muted-foreground">
            Access attempts are logged for security and accountability.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
