/* Climate / resilience section — lifecycle visualization */
export default function ClimateImpact() {
  const stages = [
    { label: "Detect Earlier",        detail: "Identify deterioration at early stages when intervention is smaller.",    color: "bg-accent" },
    { label: "Assess Accurately",     detail: "Evidence-based severity and location — not estimates from surveys.",       color: "bg-accent/80" },
    { label: "Prioritize Efficiently","detail": "Direct constrained maintenance budgets to highest-impact segments.",      color: "bg-accent/60" },
    { label: "Maintain Proactively",  detail: "Targeted repair before escalation to costly reconstruction.",              color: "bg-amber/80" },
    { label: "Extend Asset Life",     detail: "Longer-lived infrastructure means reduced resource consumption over time.", color: "bg-amber/60" },
  ];

  return (
    <section className="relative py-28 bg-background-2 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(20,184,166,0.04) 0%, transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="section-label mb-6">Infrastructure Resilience</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
              Earlier intelligence.
              <br />
              <span className="text-gradient-teal">More resilient roads.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Earlier detection can support more resource-efficient maintenance pathways. When infrastructure receives attention before advanced deterioration, less material, energy, and cost are involved.
            </p>
            <div className="p-4 rounded-xl border border-border bg-background-3/60">
              <div className="text-[9px] font-bold uppercase tracking-widest text-amber/70 mb-2">Important Note</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                InfraSense AI makes no specific claims about CO₂ savings, cost reductions, or other quantified environmental outcomes. Any such impact would depend on implementation at scale and validated field data. These are directional observations only.
              </p>
            </div>
          </div>

          {/* Lifecycle diagram */}
          <div className="flex flex-col gap-0">
            {stages.map((s, i) => (
              <div key={s.label} className="flex gap-4 items-start">
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-3 h-3 rounded-full ${s.color} mt-1 shrink-0`} />
                  {i < stages.length - 1 && <div className="w-px flex-1 bg-border my-1 min-h-[2.5rem]" />}
                </div>
                <div className={`pb-6 ${i === stages.length-1 ? "pb-0" : ""}`}>
                  <div className="text-sm font-bold text-foreground mb-0.5">{s.label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed max-w-xs">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-box comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          {[
            {
              title: "Early Intervention",
              stages: ["Small defect detected", "Targeted patch repair", "Surface restored", "Asset life extended"],
              color: "border-accent/30 bg-accent/5",
              label: "Preferred pathway",
            },
            {
              title: "Late Reconstruction",
              stages: ["Defect grows undetected", "Alligator cracking", "Base layer failure", "Full reconstruction required"],
              color: "border-danger/20 bg-danger/5",
              label: "Avoidable scenario",
            },
          ].map(box => (
            <div key={box.title} className={`rounded-2xl border p-6 ${box.color}`}>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">{box.label}</div>
              <div className="font-bold text-base mb-4">{box.title}</div>
              <div className="flex items-center gap-2 flex-wrap">
                {box.stages.map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{s}</span>
                    {i < box.stages.length - 1 && (
                      <svg viewBox="0 0 12 12" className="w-3 h-3 text-border shrink-0" fill="none">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
