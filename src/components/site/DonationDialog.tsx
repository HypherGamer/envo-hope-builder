import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDonationDialog } from "@/lib/donation-context";
import { siteConfig } from "@/content/site";
import { Copy, Check, Heart, Building2, Phone, Mail, ArrowRight } from "lucide-react";

export function DonationDialog() {
  const { isOpen, closeDonationModal, donationSettings } = useDonationDialog();
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const hasAccountNumber = Boolean(donationSettings?.accountNumber && donationSettings.accountNumber.trim().length > 0);
  const bankName = donationSettings?.bankName || siteConfig.bankName || "Official Partner Bank";
  const accountName = donationSettings?.accountName || siteConfig.bankAccountName || siteConfig.name;
  const accountNumber = donationSettings?.accountNumber || "";
  const suggestedAmounts = donationSettings?.suggestedAmounts || [5000, 15000, 35000, 75000, 150000];

  const handleCopy = async () => {
    if (!accountNumber) return;
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeDonationModal()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-2">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl font-extrabold text-foreground">
            {hasAccountNumber ? "Support Community Programs" : "Direct Bank Transfer Inquiries"}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-sm">
            {hasAccountNumber
              ? "Your donation directly funds clean water boreholes, school retention kits, and medical relief across rural Ebonyi State."
              : "Our official audited foundation accounts are undergoing scheduled secretariat verification."}
          </DialogDescription>
        </DialogHeader>

        {hasAccountNumber ? (
          <div className="space-y-5 pt-2">
            {/* Bank Card */}
            <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary-soft/50 to-primary-soft/20 p-5 shadow-soft">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" /> Official Bank Account
                </span>
                {donationSettings?.accountType && (
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-primary text-[10px] font-extrabold">
                    {donationSettings.accountType}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <p className="text-xs text-muted-foreground font-medium">Bank Name</p>
                <p className="text-base font-bold text-foreground">{bankName}</p>
              </div>

              <div className="mt-3">
                <p className="text-xs text-muted-foreground font-medium">Account Name</p>
                <p className="text-sm font-semibold text-foreground/90">{accountName}</p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-primary/20 pt-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Account Number</p>
                  <p className="font-mono text-2xl font-black text-foreground tracking-wider">
                    {accountNumber}
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={handleCopy}
                  variant={copied ? "default" : "outline"}
                  size="sm"
                  className="gap-1.5 font-semibold shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-primary-foreground" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Number
                    </>
                  )}
                </Button>
              </div>

              {donationSettings?.extraNote && (
                <p className="mt-3 text-xs text-muted-foreground italic border-t border-border/40 pt-2">
                  {donationSettings.extraNote}
                </p>
              )}
            </div>

            {/* Suggested Amounts */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Suggested Sponsorship Amounts
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedAmounts.map((amt) => {
                  const isSelected = selectedAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedAmount(isSelected ? null : amt)}
                      className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-soft scale-105"
                          : "bg-secondary text-secondary-foreground hover:bg-primary-soft hover:text-primary"
                      }`}
                    >
                      {formatNaira(amt)}
                    </button>
                  );
                })}
              </div>

              {selectedAmount && (
                <div className="mt-3 rounded-xl bg-accent/15 border border-accent/30 p-3 text-xs font-semibold text-foreground flex items-center justify-between">
                  <span>Send <strong className="text-primary-deep">{formatNaira(selectedAmount)}</strong> to the verified account above</span>
                  <span className="text-[10px] text-muted-foreground">Reference: Donation</span>
                </div>
              )}
            </div>

            {/* Post-donation confirmation link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-4 text-xs">
              <Link
                to="/contact"
                search={{ reason: "donation" }}
                onClick={closeDonationModal}
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                I&apos;ve sent a gift & want a receipt <ArrowRight className="h-3 w-3" />
              </Link>
              {donationSettings?.updatedAt && (
                <span className="text-muted-foreground text-[11px]">
                  Details updated: {new Date(donationSettings.updatedAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        ) : (
          /* Fallback when bank account is pending verification */
          <div className="space-y-4 pt-2">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 space-y-3 text-sm">
              <p className="text-foreground/90 font-medium">
                Please contact our secretariat directly to receive official verified bank transfer instructions:
              </p>
              <div className="space-y-2 pt-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a href={`tel:${siteConfig.phoneClean}`} className="font-semibold text-foreground hover:text-primary">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="font-semibold text-foreground hover:text-primary">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button asChild variant="default" className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  search={{ reason: "transfer-request" }}
                  onClick={closeDonationModal}
                >
                  Request Bank Transfer Details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
