import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { companyData } from "@/content/company";

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

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(20,184,166,0.06), transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 text-center">

        {/* Accent rule */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-border" />
          <div className="w-2 h-2 rounded-full bg-accent" style={{ boxShadow: "0 0 8px rgba(20,184,166,0.6)" }} />
          <div className="h-px w-16 bg-border" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-balance">
          Let&apos;s make every road
          <br />
          <span className="text-gradient-teal">more observable.</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
          We are looking for institutional partners, pilot opportunities, research collaborators, and infrastructure stakeholders who want to help build the intelligence layer for physical roads.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-accent/15"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/solution"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-xl font-semibold text-sm hover:border-border-bright hover:bg-muted/40 transition-all"
          >
            Explore the Platform
          </Link>
        </div>

        {/* Compact Contact Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`${companyData.contact.whatsapp}?text=${encodeURIComponent(companyData.contact.whatsappMsg || "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact InfraSense AI on WhatsApp"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg border border-accent/30 bg-accent/5 hover:bg-accent/15 hover:border-accent text-xs font-semibold text-foreground transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-accent" />
            WhatsApp Us
          </a>
          <a
            href={`mailto:${companyData.contact.email}`}
            aria-label="Email InfraSense AI"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg border border-border bg-background-2 hover:bg-muted/50 hover:border-border-bright text-xs font-semibold text-foreground transition-all"
          >
            <Mail className="w-4 h-4 text-foreground-dim" />
            Email Us
          </a>
          <a
            href={companyData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Saqib Ahmad Bhat on LinkedIn"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg border border-border bg-background-2 hover:bg-muted/50 hover:border-border-bright text-xs font-semibold text-foreground transition-all"
          >
            <LinkedinIcon className="w-4 h-4 text-foreground-dim" />
            LinkedIn
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs text-muted-foreground mt-12">
          InfraSense AI · Working Prototype · AIoT Road Infrastructure Intelligence · infrasenseai.online
        </p>
      </div>
    </section>
  );
}
