import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
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
import { siteConfig } from "@/content/site";
import { submitInquiryForm } from "@/lib/server-fn";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoMeta({
      path: "/contact",
      title: "Contact Us — Envo Peace & Development Secretariat",
      description:
        "Contact Envo Peace Foundation at our Abakaliki secretariat on Hilltop Road. Reach our coordination team via phone, email, or direct message.",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("general");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
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
          honeypot,
        },
      });

      if (res.success) {
        setSuccess(
          res.message || "Thank you. Your message has been delivered to our secretariat desk.",
        );
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setError(res.error || "Unable to send message.");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Submission failed. Please write to hello@envopeace.org directly.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteLayout>
      <PageHero
        breadcrumbs={[{ label: "Contact Us" }]}
        eyebrow="Secretariat Desk"
        title="Connect with Our Abakaliki Headquarters"
        description="Whether you have questions about community nominations, wish to visit our secretariat, or need program verification, we are available to help."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Contact Directory */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary">
                  Direct Inquiries
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  Our Secretariat Office
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Our permanent office is located in the heart of Abakaliki, accessible to community
                  leaders, school principals, and regional partners.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Physical Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{siteConfig.address}</p>
                      <a
                        href={siteConfig.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary hover:underline"
                      >
                        Open in Google Maps
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Telephone Contact</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Direct Secretariat Line & WhatsApp
                      </p>
                      <a
                        href={`tel:${siteConfig.phoneClean}`}
                        className="inline-block mt-1 text-sm font-semibold text-primary hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Official Email</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        For correspondence, proposal letters, and verification
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="inline-block mt-1 text-sm font-semibold text-primary hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-deep mt-0.5">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Office Hours</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{siteConfig.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft"
              >
                <h3 className="text-2xl font-bold text-foreground">Send an Inquiry</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our communications desk reviews all submissions and replies within two working
                  days.
                </p>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-hp">Do not fill this</label>
                  <input
                    id="contact-hp"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Your Full Name *</Label>
                    <Input
                      id="contact-name"
                      required
                      maxLength={100}
                      placeholder="e.g. Obinna Nwankwo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={100}
                        placeholder="obinna@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone">Phone Number (Optional)</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        maxLength={30}
                        placeholder="+234 800 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-category">Subject / Department</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="contact-category" className="mt-1.5">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Secretariat Inquiry</SelectItem>
                        <SelectItem value="community-nomination">
                          Community Outreach Nomination
                        </SelectItem>
                        <SelectItem value="education">School Scholarship Inquiry</SelectItem>
                        <SelectItem value="healthcare">Mobile Health Mission Request</SelectItem>
                        <SelectItem value="peace">Inter-Community Peace Consultation</SelectItem>
                        <SelectItem value="press">Media & Press Relations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      minLength={5}
                      maxLength={2000}
                      rows={5}
                      placeholder="Please share details regarding your inquiry, community location, or proposal..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                </div>

                {success && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary-soft p-4 text-sm text-primary-deep">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Message Dispatched</p>
                      <p className="mt-0.5">{success}</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Notice</p>
                      <p className="mt-0.5">{error}</p>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Direct Message
                      </>
                    )}
                  </Button>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs text-muted-foreground underline hover:text-foreground hidden sm:inline"
                  >
                    Send via email client
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
