import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Phone,
  Send,
  AlertCircle,
  Building,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildSeoMeta } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import { submitInquiryForm } from "@/lib/server-fn";

export const Route = createFileRoute("/donate")({
  head: () =>
    buildSeoMeta({
      path: "/donate",
      title: "Support Our Cause — Envo Peace Foundation",
      description:
        "Support Envo Peace Foundation programs in Ebonyi State. Directly fund classroom scholarships, mobile rural clinics, clean water, and relief.",
    }),
  component: DonatePage,
});

function DonatePage() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number>(25000);
  const [customAmount, setCustomAmount] = useState("");

  // Bank transfer request form state
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorNotes, setDonorNotes] = useState("");
  const [donorHoneypot, setDonorHoneypot] = useState("");
  const [donorLoading, setDonorLoading] = useState(false);
  const [donorSuccess, setDonorSuccess] = useState<string | null>(null);
  const [donorError, setDonorError] = useState<string | null>(null);

  const presets = [10000, 25000, 50000, 100000, 250000];

  const effectiveAmount = customAmount ? Number(customAmount) || 0 : selectedAmount;

  function getImpactDescription(amt: number): string {
    if (amt >= 250000) {
      return "Sponsors a full artisan starter toolkit and 4-month vocational training for an unemployed youth in Ebonyi.";
    }
    if (amt >= 100000) {
      return "Covers malaria rapid test kits, clinical consultations, and prescribed treatment for ten rural families.";
    }
    if (amt >= 50000) {
      return "Funds full annual public school tuition levies, textbooks, uniform, and footwear for a primary school pupil.";
    }
    if (amt >= 25000) {
      return "Provides a rural family with a comprehensive clean water filtration storage container and hygiene essentials.";
    }
    if (amt >= 10000) {
      return "Supplies school exercise books, stationery sets, and supplementary readers for two elementary children.";
    }
    return "Every contribution directly supports community procurement of grains, medicines, and learning supplies.";
  }

  async function handleTransferRequest(e: FormEvent) {
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
          message: donorNotes
            ? `Pledged ₦${effectiveAmount.toLocaleString()} (${frequency}). Notes: ${donorNotes}`
            : `Pledged ₦${effectiveAmount.toLocaleString()} (${frequency}). Requesting bank transfer details.`,
          honeypot: donorHoneypot,
        },
      });

      if (res.success) {
        setDonorSuccess(
          res.message ||
            "Thank you. Our finance desk has received your request and will forward official bank transfer credentials.",
        );
        setDonorName("");
        setDonorEmail("");
        setDonorPhone("");
        setDonorNotes("");
      } else {
        setDonorError(res.error || "Unable to send transfer request.");
      }
    } catch (err: unknown) {
      setDonorError(
        err instanceof Error
          ? err.message
          : "Error submitting request. Please email hello@envopeace.org directly.",
      );
    } finally {
      setDonorLoading(false);
    }
  }

  const hasDirectBankInfo = Boolean(siteConfig.bankAccountNumber && siteConfig.bankName);

  return (
    <SiteLayout>
      <PageHero
        breadcrumbs={[{ label: "Donate" }]}
        eyebrow="Financial Stewardship"
        title="Direct Support for Ebonyi Communities"
        description="Every naira contributed is directed to verifiable village relief, school sponsorships, free medical treatments, and solar water installations."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Giving Calculator & Stewardship */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
                  Select Giving Level
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Choose Your Contribution
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pick an intended amount in Nigerian Naira (NGN) to view direct field impact.
                </p>
              </div>

              {/* Frequency Toggle */}
              <div className="inline-flex rounded-full border border-border bg-secondary p-1">
                <button
                  type="button"
                  onClick={() => setFrequency("one-time")}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    frequency === "one-time"
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={frequency === "one-time"}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    frequency === "monthly"
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={frequency === "monthly"}
                >
                  Monthly Sustainer
                </button>
              </div>

              {/* Preset Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {presets.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    className={`rounded-2xl border-2 p-4 text-left transition-all cursor-pointer ${
                      selectedAmount === amt && !customAmount
                        ? "border-primary bg-primary-soft text-primary-deep shadow-soft"
                        : "border-border bg-card text-foreground hover:border-primary/40"
                    }`}
                  >
                    <span className="block text-xl font-extrabold">₦{amt.toLocaleString()}</span>
                    <span className="block text-xs font-semibold text-muted-foreground mt-0.5">
                      {frequency === "monthly" ? "Per Month" : "One-off"}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Amount Field */}
              <div>
                <Label
                  htmlFor="custom-amount"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Or specify a custom amount (NGN)
                </Label>
                <div className="mt-1.5 flex items-center rounded-xl border border-input bg-card px-4 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary shadow-sm">
                  <span className="text-lg font-bold text-muted-foreground mr-2">₦</span>
                  <Input
                    id="custom-amount"
                    type="number"
                    min={1000}
                    step={1000}
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      const n = Number(e.target.value);
                      if (n > 0) setSelectedAmount(n);
                    }}
                    className="border-0 shadow-none focus-visible:ring-0 px-0 text-lg font-bold"
                  />
                </div>
              </div>

              {/* Impact Banner */}
              <div className="rounded-2xl border border-primary/20 bg-primary-soft/50 p-6 shadow-soft">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Projected Direct Impact
                </span>
                <p className="mt-2 text-base font-semibold text-foreground">
                  {getImpactDescription(effectiveAmount)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Calculated against standard operational costs across Ebonyi rural projects.
                </p>
              </div>

              {/* Accountability Points */}
              <div className="space-y-4 pt-4 border-t border-border">
                <h3 className="text-base font-bold text-foreground">Our Financial Principles</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>School levies paid directly to registered school bank accounts.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Foodstuffs procured from local Ebonyi markets to sustain farmers.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Free medical drugs dispensed only by licensed healthcare officers.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      Transparent reporting and receipts issued upon transfer confirmation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bank Transfer Details / Request Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Bank Transfer Details</h3>
                    <p className="text-xs text-muted-foreground">
                      Official Direct Transfer Procedure
                    </p>
                  </div>
                </div>

                {hasDirectBankInfo ? (
                  <div className="space-y-4 rounded-xl border border-border bg-secondary/50 p-5 text-sm">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block">
                        Bank Name
                      </span>
                      <strong className="text-base text-foreground">{siteConfig.bankName}</strong>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block">
                        Account Number
                      </span>
                      <strong className="text-xl text-primary font-mono">
                        {siteConfig.bankAccountNumber}
                      </strong>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block">
                        Account Name
                      </span>
                      <strong className="text-sm text-foreground">
                        {siteConfig.bankAccountName}
                      </strong>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="rounded-xl border border-border bg-secondary/60 p-5 text-sm text-muted-foreground leading-relaxed">
                      <p className="font-semibold text-foreground mb-1">
                        Contact us for bank transfer details
                      </p>
                      <p>
                        To ensure security and accurate receipting, our official foundation account
                        details are provided directly upon request. You can call our secretariat or
                        submit the request form below:
                      </p>
                      <div className="mt-4 pt-3 border-t border-border space-y-1.5 text-xs font-semibold text-foreground">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-primary" />
                          <a href={`tel:${siteConfig.phoneClean}`} className="hover:underline">
                            {siteConfig.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 text-primary" />
                          <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleTransferRequest} className="space-y-4 pt-2">
                      {/* Honeypot */}
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="donor-hp">Leave this blank</label>
                        <input
                          id="donor-hp"
                          type="text"
                          value={donorHoneypot}
                          onChange={(e) => setDonorHoneypot(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <div>
                        <Label htmlFor="donor-name">Your Full Name *</Label>
                        <Input
                          id="donor-name"
                          required
                          maxLength={100}
                          placeholder="Your Name"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="donor-email">Your Email Address *</Label>
                        <Input
                          id="donor-email"
                          type="email"
                          required
                          maxLength={100}
                          placeholder="donor@example.com"
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="donor-phone">Phone / WhatsApp</Label>
                        <Input
                          id="donor-phone"
                          type="tel"
                          maxLength={30}
                          placeholder="+234 800 000 0000"
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="donor-notes">
                          Designation / Program of Interest (Optional)
                        </Label>
                        <Textarea
                          id="donor-notes"
                          rows={2}
                          maxLength={500}
                          placeholder="e.g. For Afikpo scholarships or Ishielu borehole"
                          value={donorNotes}
                          onChange={(e) => setDonorNotes(e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      {donorSuccess && (
                        <div className="flex items-start gap-2.5 rounded-xl border border-primary/30 bg-primary-soft p-3 text-xs text-primary-deep">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{donorSuccess}</span>
                        </div>
                      )}

                      {donorError && (
                        <div className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
                          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{donorError}</span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        disabled={donorLoading}
                        className="w-full"
                      >
                        {donorLoading ? (
                          "Sending Request..."
                        ) : (
                          <>
                            <Send className="h-4 w-4" /> Request Transfer Details (₦
                            {effectiveAmount.toLocaleString()})
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
