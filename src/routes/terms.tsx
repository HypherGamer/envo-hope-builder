import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { buildSeoMeta } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeoMeta({
      path: "/terms",
      title: "Terms of Use — Envo Peace & Development",
      description:
        "Read the terms governing the use of the Envo Peace Foundation website, intellectual property, donation policies, and community submissions.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout navbarForceSolid>
      <PageHero
        breadcrumbs={[{ label: "Terms of Use" }]}
        eyebrow="Legal Agreement"
        title="Terms of Use & Site Policies"
        description="Conditions governing access to Envo Peace Foundation web resources, informational publications, and digital engagement."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-4xl px-4 md:px-8 space-y-12 text-foreground/90 leading-relaxed">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft text-sm text-muted-foreground">
            <p>
              <strong>Last Updated:</strong> January 1, 2026
            </p>
            <p className="mt-1">
              <strong>Operating Entity:</strong> Envo Peace and Development Foundation
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
            <p className="mt-3">
              By accessing and using this website, you agree to comply with and be bound by these
              Terms of Use and all applicable laws and regulations of the Federal Republic of
              Nigeria. If you do not agree with any part of these terms, please discontinue use of
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">
              2. Non-Commercial & Educational Purpose
            </h2>
            <p className="mt-3">
              This website is published by Envo Peace and Development Foundation to provide
              transparent information concerning humanitarian aid, education sponsorships,
              healthcare outreaches, and community peace initiatives in Ebonyi State. All content is
              intended for civic awareness, volunteer recruitment, and charitable support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property Rights</h2>
            <p className="mt-3">
              Unless otherwise indicated, all written content, photography, graphics, logos, and
              organizational marks on this website are the property of Envo Peace and Development
              Foundation. You may view, download, and print informational pages for personal,
              non-commercial use, provided that you retain all copyright notices.
            </p>
            <p className="mt-2 text-muted-foreground">
              Unauthorized reproduction, modification, or commercial exploitation of field
              photographs depicting community beneficiaries or minors is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">4. Donation & Transfer Inquiries</h2>
            <p className="mt-3">
              All contributions intended for the foundation must be transferred through official
              foundation bank accounts communicated directly by authorized officers from our
              Abakaliki secretariat. Envo Peace Foundation will never ask you for bank account
              security PINs or passwords.
            </p>
            <p className="mt-2 text-muted-foreground">
              Donations are utilized directly for community programs, procured locally in accordance
              with our financial stewardship standards. Acknowledgments and operational receipts are
              provided upon receipt confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">
              5. Community Submissions & Form Conduct
            </h2>
            <p className="mt-3">
              When submitting volunteer applications, partnership concepts, or contact messages, you
              agree that:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                All information provided is truthful, accurate, and reflects your authentic
                identity.
              </li>
              <li>
                You will not upload or transmit malicious code, automated bot spam, or defamatory
                material.
              </li>
              <li>
                Community referral notices are submitted in good faith to assist vulnerable
                individuals.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p className="mt-3">
              While we endeavor to keep all information on this website timely and accurate, Envo
              Peace and Development Foundation makes no express warranties regarding the
              uninterrupted availability of this website. The Foundation shall not be liable for any
              indirect, incidental, or consequential damages resulting from website downtime or
              technical delays.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">7. Governing Law & Jurisdiction</h2>
            <p className="mt-3">
              These Terms of Use are governed by and construed in accordance with the laws of the
              Federal Republic of Nigeria. Any disputes arising in connection with the use of this
              website shall be subject to the exclusive jurisdiction of the competent courts of
              Ebonyi State, Nigeria.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">8. Contact Information</h2>
            <p className="mt-3">
              For questions regarding these Terms of Use, please write to our secretariat:
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-soft space-y-2 text-sm">
              <p>
                <strong>Secretariat:</strong> Envo Peace and Development Foundation
              </p>
              <p>
                <strong>Address:</strong> {siteConfig.address}
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
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="text-primary font-semibold underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
