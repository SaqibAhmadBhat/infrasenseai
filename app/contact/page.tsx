import { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";
import { companyData } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact | InfraSense AI",
  description: "Partner with us to validate and implement road infrastructure intelligence.",
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ContactPage() {
  const { contact } = companyData;
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMsg || "")}`;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-background overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Let's Work Together & Premium Buttons */}
            <div className="flex flex-col justify-center">
              
              <div className="section-label mb-6">Let&apos;s Work Together</div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-balance">
                Let&apos;s build better road intelligence.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                We&apos;re looking for institutional partners, pilot opportunities, research collaborators and infrastructure stakeholders.
              </p>

              {/* Opportunities List */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  "Institutional partnerships",
                  "Pilot opportunities",
                  "Research collaboration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" style={{ boxShadow: "0 0 6px rgba(20,184,166,0.6)" }} />
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* Premium Contact Buttons */}
              <div className="flex flex-col gap-4 max-w-md w-full">
                {/* Primary: WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact InfraSense AI on WhatsApp"
                  className="group relative flex items-center gap-4 w-full p-4 rounded-xl border border-accent/40 bg-accent/10 hover:bg-accent/20 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">WhatsApp Us</span>
                    <span className="text-xs text-muted-foreground">Fastest response for partnerships</span>
                  </div>
                </a>

                {/* Secondary: Email */}
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Email InfraSense AI"
                  className="group relative flex items-center gap-4 w-full p-4 rounded-xl border border-border bg-background-2 hover:bg-muted/40 hover:border-border-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-background-3 flex items-center justify-center shrink-0 border border-border">
                    <Mail className="w-5 h-5 text-foreground-dim group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-foreground">Email Us</span>
                    <span className="text-xs text-muted-foreground">{contact.email}</span>
                  </div>
                </a>

                {/* Tertiary: LinkedIn */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Saqib Ahmad Bhat on LinkedIn"
                  className="group relative flex items-center gap-4 w-full p-4 rounded-xl border border-border bg-background-2 hover:bg-muted/40 hover:border-border-bright focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-background-3 flex items-center justify-center shrink-0 border border-border">
                    <LinkedinIcon className="w-5 h-5 text-foreground-dim group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-foreground">Connect on LinkedIn</span>
                    <span className="text-xs text-muted-foreground">Saqib Ahmad Bhat</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-background-2 border border-border rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full pointer-events-none"></div>
              
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Contact Form</div>
              <h2 className="text-2xl font-bold mb-8 relative z-10 text-foreground">Send an Inquiry</h2>
              
              {/* Form UI Structure - Frontend only */}
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Name</label>
                    <input type="text" className="w-full p-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Organization</label>
                    <input type="text" className="w-full p-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm" placeholder="PWD / Company" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Email</label>
                    <input type="email" className="w-full p-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Message</label>
                    <textarea rows={4} className="w-full p-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all resize-none text-sm" placeholder="Tell us about your infrastructure goals..."></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="button" className="w-full py-4 bg-background-3 border border-border text-muted-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-muted/60 transition-transform active:scale-[0.98]">
                    Send Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-amber-500/80 mt-4 font-mono uppercase tracking-widest">
                    Demo Mode — Backend Integration Pending
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
