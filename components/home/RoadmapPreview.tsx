
const MILESTONES = [
  { id: "01", label: "Working Prototype",       sub: "Camera + IMU + GPS + AI detection system built and functional.", status: "now",   active: true  },
  { id: "02", label: "Field Validation",        sub: "Real-world testing on public roads. Accuracy and coverage validation.", status: "next",   active: false },
  { id: "03", label: "Institutional Pilot",     sub: "Partnered pilot with a road authority or municipality.",              status: "then",   active: false },
  { id: "04", label: "Scalable Implementation","sub": "Multi-vehicle, multi-segment deployment. Network-level intelligence.", status: "later",  active: false },
  { id: "05", label: "Platform Scale",          sub: "Infrastructure Intelligence Platform at city/state network scale.",   status: "future", active: false },
];

export default function RoadmapPreview() {
  return (
    <section className="relative py-28 bg-background-2 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(20,184,166,0.04) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="section-label mb-6">Development Roadmap</div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-xl text-balance">
            From prototype to{" "}
            <span className="text-gradient-teal">platform.</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Each stage requires genuine milestones — not just time. We move forward when the evidence justifies it.
          </p>
        </div>

        {/* Horizontal roadmap */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-border" />
          <div className="hidden lg:block absolute top-7 left-0 h-px bg-accent transition-all" style={{ width: "12%" }} />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {MILESTONES.map((m) => (
              <div key={m.id} className={`relative flex flex-col gap-3 p-5 rounded-2xl border transition-all ${
                m.active
                  ? "border-accent/40 bg-accent/6 shadow-lg"
                  : "border-border bg-background-3/40 opacity-70"
              }`}>
                {/* Stage marker */}
                <div className="relative z-10">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                    m.active ? "border-accent bg-accent" : "border-border bg-background-2"
                  }`} />
                </div>

                <div>
                  <div className={`text-[9px] font-bold uppercase tracking-widest mb-1 ${
                    m.active ? "text-accent" : "text-muted-foreground"
                  }`}>{m.status}</div>
                  <div className={`text-sm font-bold mb-1 ${m.active ? "text-foreground" : "text-foreground-dim"}`}>
                    {m.label}
                  </div>
                  <div className="text-[10px] text-muted-foreground leading-relaxed">{m.sub}</div>
                </div>

                {m.active && (
                  <div className="status-pill status-pill-prototype text-[9px] w-fit">
                    <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                    CURRENT
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Status transparency */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-12">
          {[
            { label: "Paying Customers", value: "0",            note: "Pre-revenue" },
            { label: "External Pilots",  value: "0",            note: "Pre-pilot"   },
            { label: "Revenue",          value: "₹0",           note: "Bootstrapped"},
            { label: "Funding Ask",      value: "₹15 Lakh",     note: "Seed target" },
          ].map(m => (
            <div key={m.label}>
              <div className="text-2xl font-bold font-mono text-foreground">{m.value}</div>
              <div className="text-xs font-semibold text-foreground-dim mt-0.5">{m.label}</div>
              <div className="text-[10px] text-muted-foreground">{m.note}</div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground mt-4">
          Transparent current status. We believe honesty about stage is a sign of technical seriousness, not weakness.
        </p>
      </div>
    </section>
  );
}
