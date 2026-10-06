import Link from "next/link";
import { companyData } from "@/content/company";

const NAV = [
  {
    title: "Platform",
    links: [
      { label: "Solution",          href: "/solution" },
      { label: "Road Intelligence", href: "/road-intelligence" },
      { label: "Technology",        href: "/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Research", href: "/research" },
      { label: "Innovation",href: "/innovation"},
      { label: "Contact",  href: "/contact" },
    ],
  },
  {
    title: "Impact",
    links: [
      { label: "Climate Impact", href: "/climate-impact" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms",          href: "/legal/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-2">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-5">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <rect width="32" height="32" rx="6" fill="rgba(20,184,166,0.12)" />
                <path d="M8 22 L16 10 L24 22" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M11 18 L21 18" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <span className="font-semibold text-sm text-foreground tracking-tight">
                InfraSense<span className="text-accent">.</span>AI
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mb-5">
              AIoT Road Infrastructure Intelligence. Working Prototype.
            </p>
            <div className="status-pill status-pill-prototype text-[9px] w-fit">
              <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
              PROTOTYPE STAGE
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map(col => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`${companyData.contact.whatsapp}?text=${encodeURIComponent(companyData.contact.whatsappMsg || "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={companyData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} InfraSense AI · UDYAM-JK-04-0054839 · SAQIB AHMAD BHAT
            </p>
            <p className="text-[10px] text-muted-foreground/60">
              Government College of Engineering, Tirunelveli · Mentor: Prof. G. Sona
            </p>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground/50 tracking-wider">
            infrasenseai.online
          </div>
        </div>
      </div>
    </footer>
  );
}
