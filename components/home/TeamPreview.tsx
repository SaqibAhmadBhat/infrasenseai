import Link from "next/link";

const TEAM = [
  {
    initial: "S",
    name: "Saqib Ahmad Bhat",
    role: "Co-Founder",
    focus: "System architecture, AI pipeline, sensor integration",
  },
  {
    initial: "A",
    name: "Aqib Majeed",
    role: "Co-Founder",
    focus: "Product development, data systems, infrastructure intelligence",
  },
];

export default function TeamPreview() {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="section-label mb-6">The Builders</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
              Building something{" "}
              <span className="text-gradient-teal">infrastructure-grade.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-8">
              InfraSense AI is being built by engineers who understand that infrastructure intelligence is not a product — it is a discipline. Our work is grounded in real technical constraints, not theoretical capability.
            </p>

            {/* Institution */}
            <div className="p-5 rounded-2xl border border-border bg-background-2">
              <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Institutional Foundation</div>
              <div className="text-sm font-semibold text-foreground mb-1">
                Government College of Engineering, Tirunelveli
              </div>
              <div className="text-xs text-muted-foreground mb-3">
                Faculty Mentor: Prof. G. Sona
              </div>
              <div className="status-pill status-pill-prototype text-[9px] w-fit">
                Working Prototype · Academic Origin
              </div>
            </div>
          </div>

          {/* Founder cards */}
          <div className="flex flex-col gap-4">
            {TEAM.map(person => (
              <div key={person.name} className="group p-6 rounded-2xl border border-border bg-background-2 hover:border-border-bright transition-all">
                <div className="flex items-start gap-5">
                  {/* Monogram portrait */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                    <span className="text-2xl font-bold text-accent font-mono">{person.initial}</span>
                  </div>
                  <div>
                    <div className="font-bold text-base text-foreground">{person.name}</div>
                    <div className="text-xs text-accent font-semibold mb-2">{person.role}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{person.focus}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Udyam */}
            <div className="p-4 rounded-xl border border-border bg-background-3/60">
              <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Legal Entity</div>
              <div className="text-xs text-foreground-dim font-mono">UDYAM-JK-04-0054839</div>
              <div className="text-[10px] text-muted-foreground">Micro Enterprise · 2026–27 · Registered</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Read the full team story
            <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
