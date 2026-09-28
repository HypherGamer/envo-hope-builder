import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { buildSeoMeta } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeoMeta({
      path: "/privacy",
      title: "Privacy Policy — Envo Peace & Development",
      description:
        "Read the Envo Peace Foundation privacy policy, aligned with Nigeria's NDPA 2023. Learn how contact inquiries and donor records are secured.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout navbarForceSolid>
      <PageHero
        breadcrumbs={[{ label: "Privacy Policy" }]}
        eyebrow="Compliance & Governance"
        title="Privacy Policy & Data Protection"
        description="Aligned with the Nigeria Data Protection Act (NDPA) 2023. How we collect, safeguard, and process your personal information."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-4xl px-4 md:px-8 space-y-12 text-foreground/90 leading-relaxed">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft text-sm text-muted-foreground">
            <p>
              <strong>Effective Date:</strong> January 1, 2026
            </p>
            <p className="mt-1">
              <strong>Data Controller:</strong> Envo Peace and Development Foundation, Abakaliki,
              Ebonyi State, Nigeria
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">
              1. Introduction & Statutory Scope
            </h2>
            <p className="mt-3">
              Envo Peace and Development Foundation ("the Foundation", "we", "us", or "our") is
              committed to protecting the privacy and personal data of visitors, donors, volunteers,
              and partners. This policy is formulated in strict compliance with the{" "}
              <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and applicable regulations
              enforced by the Nigeria Data Protection Commission (NDPC).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">2. Data We Collect</h2>
            <p className="mt-3">
              We only collect personal information that you voluntarily submit to us through our
              online inquiry forms, volunteer registration portals, partnership requests, or direct
              correspondence. This information includes:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Contact Information:</strong> Full name, personal or official email address,
                and telephone/WhatsApp numbers.
              </li>
              <li>
                <strong>Organization Details:</strong> Institutional affiliations, NGO names, or
                company titles submitted on partnership forms.
              </li>
              <li>
                <strong>Inquiry Content:</strong> Specific messages, community nomination notes, and
                volunteer availability details.
              </li>
              <li>
                <strong>Pledge & Transfer Notices:</strong> Pledged contribution amounts and
                preferred project designations submitted via our transfer request forms. (Note: We
                do not process or store credit card details or bank passwords on this website).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">
              3. Purpose and Legal Basis for Processing
            </h2>
            <p className="mt-3">
              In accordance with Section 25 of the NDPA 2023, we process your personal data solely
              on legitimate, lawful grounds:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Responding to Inquiries:</strong> Answering questions regarding community
                programs, scholarship procedures, and mobile health missions.
              </li>
              <li>
                <strong>Volunteer & Partner Onboarding:</strong> Coordinating clinical staff,
                teachers, and field logistics for scheduled village outreaches.
              </li>
              <li>
                <strong>Issuing Transfer Details:</strong> Providing official foundation bank
                account information to verified donors and sending donation acknowledgment receipts.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Retaining necessary governance and accounting
                records required under Nigerian civil law.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">4. Who Has Access to Your Data</h2>
            <p className="mt-3">
              Access to submitted personal information is strictly restricted to designated
              administrative and field leadership officers at our Abakaliki secretariat who require
              the information to perform their duties.
            </p>
            <p className="mt-2 text-muted-foreground">
              <strong>
                We never sell, rent, lease, or monetize your personal data to any commercial third
                party or marketing agency.
              </strong>{" "}
              Third-party infrastructure providers (such as secure email delivery systems) process
              information strictly on our instructions and under confidentiality safeguards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">5. Data Retention & Storage</h2>
            <p className="mt-3">
              We retain personal data only for as long as is strictly necessary to fulfill the
              operational purpose for which it was gathered, or to comply with statutory audit
              regulations. General contact messages are retained for a maximum of twenty-four (24)
              months, after which they are securely purged from our active mail archives.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">
              6. Your Rights Under the NDPA 2023
            </h2>
            <p className="mt-3">
              Under Sections 34 through 39 of the Nigeria Data Protection Act 2023, you enjoy
              statutory rights regarding your personal information:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Right of Access:</strong> You may request a copy of the personal information
                we hold concerning you.
              </li>
              <li>
                <strong>Right to Rectification:</strong> You may request the correction of
                inaccurate or incomplete contact records.
              </li>
              <li>
                <strong>Right to Erasure ("Right to Be Forgotten"):</strong> You may request the
                deletion of your personal contact records from our databases.
              </li>
              <li>
                <strong>Right to Object or Restrict Processing:</strong> You may withdraw consent at
                any time for communications or updates.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">
              7. Exercising Data Rights & Privacy Contact
            </h2>
            <p className="mt-3">
              To exercise any of your data protection rights, or if you have questions regarding
              this Privacy Policy, please write directly to our Data Protection Officer at:
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-soft space-y-2 text-sm">
              <p>
                <strong>Data Protection Desk:</strong> Envo Peace and Development Foundation
              </p>
              <p>
                <strong>Physical Address:</strong> {siteConfig.address}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary font-semibold underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <strong>Telephone:</strong>{" "}
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="text-primary font-semibold underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              We investigate and respond to all verified data protection requests within thirty (30)
              calendar days without charge.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
