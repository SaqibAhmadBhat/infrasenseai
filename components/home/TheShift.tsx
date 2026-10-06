/* The full Road → Intelligence pipeline diagram */

const PIPELINE_STAGES = [
  { id: "01", label: "Physical Road",     sub: "Asphalt, surface, geometry",        accent: false },
  { id: "02", label: "Sensing",           sub: "Camera · IMU · GPS",               accent: false },
  { id: "03", label: "AI Detection",      sub: "YOLOv8 edge inference",             accent: true  },
  { id: "04", label: "Geolocation",       sub: "GPS + road segment binding",        accent: true  },
  { id: "05", label: "Reconciliation",    sub: "Multi-pass event consensus",        accent: true  },
  { id: "06", label: "Network Map",       sub: "Segment-level condition state",     accent: true  },
  { id: "07", label: "Risk Scoring",      sub: "Severity + frequency + priority",   accent: true  },
  { id: "08", label: "Decision Support",  sub: "Maintenance intelligence output",   accent: true  },
];

export default function TheShift() {
  return (
    <section className="relative py-28 bg-background-2 overflow-hidden">
      {/* Faint radial from bottom */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 50% at 50% 100%, rgba(20,184,166,0.04) 0%, transparent 65%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="section-label mb-6">The InfraSense AI Pipeline</div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-balance lg:max-w-md">
            From road surface to{" "}
            <span className="text-gradient-teal">maintenance intelligence.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed lg:max-w-sm lg:pt-4">
            Every stage in our pipeline transforms raw physical signal into actionable insight — making individual detections meaningful at network scale.
          </p>
        </div>

        {/* Horizontal pipeline — scrollable on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex items-start gap-0 min-w-max lg:min-w-0 lg:grid lg:grid-cols-8">
            {PIPELINE_STAGES.map((stage, i) => (
              <div key={stage.id} className="flex flex-col lg:flex-row lg:col-span-1 items-start lg:items-stretch w-36 lg:w-auto">
                {/* Stage card */}
                <div className={`relative flex flex-col p-4 rounded-xl border transition-all group ${
                  stage.accent
                    ? "border-accent/20 bg-accent/5 hover:border-accent/40 hover:bg-accent/10"
                    : "border-border bg-background-3/60 hover:border-border-bright"
                }`}>
                  {/* Stage number */}
                  <div className="text-[9px] font-mono text-muted-foreground mb-3">{stage.id}</div>
                  {/* Label */}
                  <div className={`text-sm font-bold mb-1 ${stage.accent ? "text-foreground" : "text-foreground-dim"}`}>
                    {stage.label}
                  </div>
                  {/* Sub */}
                  <div className="text-[10px] text-muted-foreground leading-relaxed">{stage.sub}</div>
                  {/* Accent dot if active stage */}
                  {stage.accent && (
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent" style={{ boxShadow: "0 0 5px rgba(20,184,166,0.6)" }} />
                  )}
                </div>
                {/* Arrow connector */}
                {i < PIPELINE_STAGES.length - 1 && (
                  <div className="flex items-center justify-center px-1 shrink-0">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 lg:w-4 lg:h-4 text-border rotate-90 lg:rotate-0" fill="none">
                      <path d="M 3 10 L 13 10 M 10 6 L 14 10 L 10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom explainer strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-10">
          {[
            {
              label: "Not just detection",
              body:  "Detecting defects is the starting point — not the destination. Value lies in what happens after detection.",
            },
            {
              label: "Network-scale understanding",
              body:  "Aggregating events across multiple passes and segments reveals the true condition of a road network.",
            },
            {
              label: "Prioritization as the product",
              body:  "The final output is a prioritized action list — making constrained maintenance budgets more effective.",
            },
          ].map(c => (
            <div key={c.label} className="border-t-2 border-accent/30 pt-4">
              <div className="font-semibold text-sm text-foreground mb-2">{c.label}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
