import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | InfraSense AI",
  description: "Privacy policy and data handling practices for InfraSense AI.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last Updated: October 2026</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
              <p>Welcome to InfraSense AI. This Privacy Policy explains how we collect, use, and protect information when you visit our website (infrasenseai.online) or interact with our platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
              <p>Currently, as a working prototype, InfraSense AI operates as an informational website. We may collect the following:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Contact Information:</strong> If you voluntarily reach out via our contact email or form, we collect your name, email address, and the contents of your message.</li>
                <li><strong>Website Analytics:</strong> We may use basic analytics (such as Vercel Analytics) to understand aggregated traffic patterns, which does not personally identify individuals.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p>We use collected information solely to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Respond to your partnership, validation, or general inquiries.</li>
                <li>Improve the performance and structure of our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing and Disclosure</h2>
              <p>We do not sell, rent, or trade your personal information. We only share data if required by law or to protect the rights and safety of our company, users, or the public.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Prototype and Field Validation Notice</h2>
              <p>The road intelligence data presented on this website represents prototype functionality and field validation objectives. We do not collect or store live public telemetry data through this website interface.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-4 font-mono font-bold">contact@infrasenseai.online</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
