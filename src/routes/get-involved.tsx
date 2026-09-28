import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Users,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildSeoMeta } from "@/lib/seo";
import { submitInquiryForm } from "@/lib/server-fn";
import { siteConfig } from "@/content/site";

export const Route = createFileRoute("/get-involved")({
  head: () =>
    buildSeoMeta({
      path: "/get-involved",
      title: "Get Involved — Volunteer & Partner With Envo Peace",
      description:
        "Join Envo Peace Foundation as a medical volunteer, educational mentor, or corporate partner to support rural communities in Ebonyi State.",
    }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "partner">("volunteer");

  // Volunteer form state
  const [volName, setVolName] = useState("");
  const [volEmail, setVolEmail] = useState("");
  const [volPhone, setVolPhone] = useState("");
  const [volLga, setVolLga] = useState("");
  const [volSkill, setVolSkill] = useState("medical");
  const [volMessage, setVolMessage] = useState("");
  const [volHoneypot, setVolHoneypot] = useState("");
  const [volLoading, setVolLoading] = useState(false);
  const [volSuccess, setVolSuccess] = useState<string | null>(null);
  const [volError, setVolError] = useState<string | null>(null);

  // Partner form state
  const [partnerName, setPartnerName] = useState("");
  const [partnerOrg, setPartnerOrg] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerPhone, setPartnerPhone] = useState("");
  const [partnerArea, setPartnerArea] = useState("water");
  const [partnerMessage, setPartnerMessage] = useState("");
  const [partnerHoneypot, setPartnerHoneypot] = useState("");
  const [partnerLoading, setPartnerLoading] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState<string | null>(null);
  const [partnerError, setPartnerError] = useState<string | null>(null);

  async function handleVolunteerSubmit(e: FormEvent) {
    e.preventDefault();
    setVolLoading(true);
    setVolError(null);
    setVolSuccess(null);

    try {
      const res = await submitInquiryForm({
        data: {
          formType: "volunteer",
          name: volName,
          email: volEmail,
          phone: volPhone,
          category: `${volSkill} (LGA: ${volLga || "Not specified"})`,
          message: volMessage,
          honeypot: volHoneypot,
        },
      });

      if (res.success) {
        setVolSuccess(res.message || "Your volunteer registration has been received.");
        setVolName("");
        setVolEmail("");
        setVolPhone("");
        setVolLga("");
        setVolMessage("");
      } else {
        setVolError(res.error || "Unable to submit registration.");
      }
    } catch (err: unknown) {
      setVolError(
        err instanceof Error
          ? err.message
          : "Submission error. Please email hello@envopeace.org directly.",
      );
    } finally {
      setVolLoading(false);
    }
  }

  async function handlePartnerSubmit(e: FormEvent) {
    e.preventDefault();
    setPartnerLoading(true);
    setPartnerError(null);
    setPartnerSuccess(null);

    try {
      const res = await submitInquiryForm({
        data: {
          formType: "partner",
          name: partnerName,
          email: partnerEmail,
          phone: partnerPhone,
          organization: partnerOrg,
          category: partnerArea,
          message: partnerMessage,
          honeypot: partnerHoneypot,
        },
      });

      if (res.success) {
        setPartnerSuccess(res.message || "Your partnership proposal has been submitted.");
        setPartnerName("");
        setPartnerOrg("");
        setPartnerEmail("");
        setPartnerPhone("");
        setPartnerMessage("");
      } else {
        setPartnerError(res.error || "Unable to submit proposal.");
      }
    } catch (err: unknown) {
      setPartnerError(
        err instanceof Error
          ? err.message
          : "Submission error. Please email hello@envopeace.org directly.",
      );
    } finally {
      setPartnerLoading(false);
    }
  }

  return (
    <SiteLayout>
      <PageHero
        breadcrumbs={[{ label: "Get Involved" }]}
        eyebrow="Community Collaboration"
        title="Volunteer Your Skills or Partner on Sustainable Programs"
        description="We collaborate with medical workers, teachers, local artisans, civil organizations, and corporate partners to multiply grassroots impact across Ebonyi State."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          {/* Navigation Toggle between Volunteer & Partner */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full border border-border bg-secondary p-1.5 shadow-soft">
              <button
                type="button"
                onClick={() => setActiveTab("volunteer")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  activeTab === "volunteer"
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeTab === "volunteer"}
              >
                <Users className="h-4 w-4" /> Volunteer With Us
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("partner")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  activeTab === "partner"
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeTab === "partner"}
              >
                <Building2 className="h-4 w-4" /> Institutional Partnership
              </button>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column: Context & Guidelines */}
            <div className="lg:col-span-5 space-y-6">
              {activeTab === "volunteer" ? (
                <>
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
                    <h3 className="text-xl font-bold text-foreground">Volunteer Opportunities</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      We organize regular community drives in rural wards across Ebonyi. We are
                      actively looking for:
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                        <span>
                          <strong>Medical Officers & Nurses:</strong> Clinical screening, drug
                          dispensing, maternal health triage.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                        <span>
                          <strong>Teachers & Mentors:</strong> Weekend study clubs, homework
                          assistance, reading coaching.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                        <span>
                          <strong>Artisans & Instructors:</strong> Practical tailoring, basic ICT,
                          wiring, and trade workshops.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                        <span>
                          <strong>Logistics Coordinators:</strong> Field distribution, vehicle
                          coordination, packing relief bundles.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Prefer direct contact?</p>
                    <p className="mt-1">
                      Email volunteer inquiries directly to{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-primary font-semibold underline"
                      >
                        {siteConfig.email}
                      </a>{" "}
                      or call our Hilltop Road secretariat at {siteConfig.phone}.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
                    <h3 className="text-xl font-bold text-foreground">
                      Institutional Partnerships
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      We collaborate with NGOs, faith-based institutions, corporate CSR departments,
                      and diaspora associations seeking reliable local implementation partners in
                      Southeastern Nigeria.
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                        <span>
                          <strong>Clean Water Infrastructure:</strong> Joint co-funding of solar
                          community boreholes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                        <span>
                          <strong>Educational Endowments:</strong> Multi-year school sponsorship
                          funds for rural schools.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-1" />
                        <span>
                          <strong>Medical Supplies Grants:</strong> Donated diagnostic equipment and
                          bulk pharmaceutical aid.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Direct Partnership Liaison:</p>
                    <p className="mt-1">
                      Write to{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-primary font-semibold underline"
                      >
                        {siteConfig.email}
                      </a>{" "}
                      with subject line <em>"Partnership Proposal"</em>.
                    </p>
                  </div>
                </>
              )}

              {/* Donate Card */}
              <div className="rounded-2xl border border-border bg-primary-soft/40 p-6 shadow-soft">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Financial Giving
                </span>
                <h4 className="mt-2 text-lg font-bold text-foreground">
                  Prefer to support with funds?
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Direct financial gifts allow us to buy foodstuffs from local Ebonyi markets and
                  settle school tuition directly with schools.
                </p>
                <div className="mt-4">
                  <Button asChild variant="hero" size="sm" className="w-full">
                    <Link to="/donate">Visit Donate Page</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Working Forms */}
            <div className="lg:col-span-7">
              {activeTab === "volunteer" ? (
                <form
                  onSubmit={handleVolunteerSubmit}
                  className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft"
                >
                  <h3 className="text-2xl font-bold text-foreground">Volunteer Application Form</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill out the fields below to register for upcoming community missions.
                  </p>

                  {/* Honeypot field (hidden from screen reader and visual layout) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="vol-hp">Leave this empty</label>
                    <input
                      id="vol-hp"
                      type="text"
                      value={volHoneypot}
                      onChange={(e) => setVolHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="vol-name">Full Name *</Label>
                      <Input
                        id="vol-name"
                        required
                        maxLength={100}
                        placeholder="e.g. Chinelo Nwachukwu"
                        value={volName}
                        onChange={(e) => setVolName(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="vol-email">Email Address *</Label>
                        <Input
                          id="vol-email"
                          type="email"
                          required
                          maxLength={100}
                          placeholder="chinelo@example.com"
                          value={volEmail}
                          onChange={(e) => setVolEmail(e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="vol-phone">Phone Number</Label>
                        <Input
                          id="vol-phone"
                          type="tel"
                          maxLength={30}
                          placeholder="+234 800 000 0000"
                          value={volPhone}
                          onChange={(e) => setVolPhone(e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="vol-skill">Primary Skillset / Role</Label>
                        <Select value={volSkill} onValueChange={setVolSkill}>
                          <SelectTrigger id="vol-skill" className="mt-1.5">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medical">Doctor / Nurse / Pharmacist</SelectItem>
                            <SelectItem value="education">Teacher / Mentor</SelectItem>
                            <SelectItem value="vocational">Vocational Trade Specialist</SelectItem>
                            <SelectItem value="field">Logistics & Field Distribution</SelectItem>
                            <SelectItem value="media">Photography & Communications</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="vol-lga">Preferred LGA Location</Label>
                        <Input
                          id="vol-lga"
                          maxLength={60}
                          placeholder="e.g. Abakaliki / Ishielu"
                          value={volLga}
                          onChange={(e) => setVolLga(e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="vol-message">Availability & Relevant Experience *</Label>
                      <Textarea
                        id="vol-message"
                        required
                        minLength={5}
                        maxLength={2000}
                        rows={4}
                        placeholder="Tell us about your background, typical availability (weekends, weekdays), and reasons for joining..."
                        value={volMessage}
                        onChange={(e) => setVolMessage(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  {volSuccess && (
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft p-4 text-sm text-primary-deep">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Application Received</p>
                        <p className="mt-0.5">{volSuccess}</p>
                      </div>
                    </div>
                  )}

                  {volError && (
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Notice</p>
                        <p className="mt-0.5">{volError}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={volLoading}
                      className="w-full sm:w-auto"
                    >
                      {volLoading ? (
                        "Submitting Application..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Submit Volunteer Application
                        </>
                      )}
                    </Button>
                    <a
                      href={`mailto:${siteConfig.email}?subject=Volunteer Application`}
                      className="text-xs text-muted-foreground underline hover:text-foreground hidden sm:inline"
                    >
                      Email form instead
                    </a>
                  </div>
                </form>
              ) : (
                <form
                  onSubmit={handlePartnerSubmit}
                  className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft"
                >
                  <h3 className="text-2xl font-bold text-foreground">Partnership Proposal</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Connect with our executive leadership for institutional or corporate
                    collaboration.
                  </p>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="partner-hp">Leave this empty</label>
                    <input
                      id="partner-hp"
                      type="text"
                      value={partnerHoneypot}
                      onChange={(e) => setPartnerHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="partner-name">Contact Person *</Label>
                        <Input
                          id="partner-name"
                          required
                          maxLength={100}
                          placeholder="Your Name"
                          value={partnerName}
                          onChange={(e) => setPartnerName(e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="partner-org">Organization / Entity Name *</Label>
                        <Input
                          id="partner-org"
                          required
                          maxLength={100}
                          placeholder="Company, NGO, or Group"
                          value={partnerOrg}
                          onChange={(e) => setPartnerOrg(e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="partner-email">Official Email *</Label>
                        <Input
                          id="partner-email"
                          type="email"
                          required
                          maxLength={100}
                          placeholder="partner@organization.com"
                          value={partnerEmail}
                          onChange={(e) => setPartnerEmail(e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="partner-phone">Phone / WhatsApp</Label>
                        <Input
                          id="partner-phone"
                          type="tel"
                          maxLength={30}
                          placeholder="+234 800 000 0000"
                          value={partnerPhone}
                          onChange={(e) => setPartnerPhone(e.target.value)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="partner-area">Program Pillar of Interest</Label>
                      <Select value={partnerArea} onValueChange={setPartnerArea}>
                        <SelectTrigger id="partner-area" className="mt-1.5">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="water">Clean Water Infrastructure</SelectItem>
                          <SelectItem value="education">Scholarships & School Libraries</SelectItem>
                          <SelectItem value="healthcare">Mobile Health & Maternal Care</SelectItem>
                          <SelectItem value="youth">Youth Vocational Toolkits</SelectItem>
                          <SelectItem value="outreach">Seasonal Food Outreach Relief</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="partner-message">Partnership Concept & Scope *</Label>
                      <Textarea
                        id="partner-message"
                        required
                        minLength={5}
                        maxLength={2000}
                        rows={5}
                        placeholder="Outline the nature of proposed collaboration, geographic target, and estimated timeline..."
                        value={partnerMessage}
                        onChange={(e) => setPartnerMessage(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  {partnerSuccess && (
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft p-4 text-sm text-primary-deep">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Proposal Submitted</p>
                        <p className="mt-0.5">{partnerSuccess}</p>
                      </div>
                    </div>
                  )}

                  {partnerError && (
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Notice</p>
                        <p className="mt-0.5">{partnerError}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={partnerLoading}
                      className="w-full sm:w-auto"
                    >
                      {partnerLoading ? (
                        "Submitting Proposal..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Submit Partnership Inquiry
                        </>
                      )}
                    </Button>
                    <a
                      href={`mailto:${siteConfig.email}?subject=Partnership Proposal`}
                      className="text-xs text-muted-foreground underline hover:text-foreground hidden sm:inline"
                    >
                      Email proposal directly
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
