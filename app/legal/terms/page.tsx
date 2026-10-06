import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | InfraSense AI",
  description: "Terms of service and acceptable use for InfraSense AI.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last Updated: October 2026</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p>By accessing and using the InfraSense AI website (infrasenseai.online), you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Informational Purpose and Prototype Status</h2>
              <p>The content provided on this website is for informational purposes. InfraSense AI is currently in the <strong>Working Prototype</strong> phase. All dashboards, metrics, carbon-reduction claims, and risk scores displayed on this site are illustrative representations of our field validation objectives and capabilities, not real-time live deployments, unless explicitly stated otherwise.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. No Guarantee of Infrastructure Outcomes</h2>
              <p>InfraSense AI provides intelligence for decision support. We make no guarantees regarding actual infrastructure outcomes, maintenance results, or accident prevention based on the use of our prospective platform. Responsibility for road safety and capital allocation remains solely with the respective governing authorities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Intellectual Property</h2>
              <p>All content, designs, graphics, and underlying architecture concepts presented on this website are the intellectual property of InfraSense AI and its founders. IP development is under evaluation. You may not reproduce, distribute, or create derivative works from this content without explicit written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Limitation of Liability</h2>
              <p>InfraSense AI shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website. The website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will indicate the date of the latest update at the top of this page. Your continued use of the website after any such changes constitutes your acceptance of the new terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Contact Information</h2>
              <p>For any questions regarding these Terms of Service, please contact:</p>
              <p className="mt-4 font-mono font-bold">contact@infrasenseai.online</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
