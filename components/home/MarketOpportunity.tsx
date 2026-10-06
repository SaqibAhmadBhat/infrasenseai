/* India-specific context + designed for section */
export default function MarketOpportunity() {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="section-label mb-6">Designed For India</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
              Built for the complexity of{" "}
              <span className="text-gradient-teal">India&apos;s road infrastructure.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              InfraSense AI is being developed in India, with Indian road conditions, Indian road authorities, and Indian infrastructure constraints at the center of the design process — not as an afterthought.
            </p>

            {/* Context factors */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Heterogeneous road networks", detail: "Urban expressways, district roads, rural paths — often in the same jurisdiction." },
                { label: "Distributed road authorities", detail: "PWDs, Urban Local Bodies, NHAI, district authorities — each with different mandates." },
                { label: "Constrained maintenance budgets", detail: "Prioritization matters more when resources are limited." },
                { label: "Monsoon and weather exposure", detail: "Seasonal deterioration cycles create predictable maintenance demand." },
                { label: "Large geographic scale", detail: "Network-level intelligence is necessary — spot inspections cannot cover the whole picture." },
              ].map(f => (
                <div key={f.label} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-background-2 hover:border-border-bright transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{f.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: target institutions + India map SVG */}
          <div className="flex flex-col gap-8">
            {/* Stylized India outline (approximate) */}
            <div className="rounded-2xl border border-border bg-background-2 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="relative flex items-center justify-center min-h-[220px]">
                <svg viewBox="0 0 200 240" className="w-48 opacity-60" fill="none">
                  {/* Simplified India polygon — approximate only for visual */}
                  <path
                    d="M90 10 L110 12 L130 20 L150 35 L160 55 L165 80 L158 105 L148 125 L155 145 L145 165 L130 180 L115 200 L100 220 L85 200 L70 180 L55 165 L45 145 L42 125 L35 105 L28 80 L35 55 L48 35 L65 20 Z"
                    stroke="#14b8a6"
                    strokeWidth="1.5"
                    fill="rgba(20,184,166,0.05)"
                  />
                  {/* Dots for hypothetical regions — no real data implied */}
                  {[
                    [100,90],[85,130],[115,140],[90,165],[105,55],[130,100],[70,100],
                  ].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#14b8a6" opacity="0.5" />
                  ))}
                  <text x="100" y="240" fill="#6b7a99" fontSize="9" textAnchor="middle" fontFamily="monospace">
                    Conceptual · No real deployment shown
                  </text>
                </svg>
              </div>
            </div>

            {/* Designed for */}
            <div>
              <div className="section-label mb-4">Designed For</div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { org: "State PWDs",              desc: "State public works departments managing arterial networks." },
                  { org: "Urban Local Bodies",       desc: "Municipalities overseeing city road maintenance." },
                  { org: "District Road Authorities","desc": "District-level networks with mixed condition profiles." },
                  { org: "Highway Operators",        desc: "Operators needing continuous condition awareness." },
                ].map(o => (
                  <div key={o.org} className="flex gap-3 items-start p-3 rounded-lg border border-border bg-background-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-foreground">{o.org}</div>
                      <div className="text-[10px] text-muted-foreground">{o.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                These are target user categories — not current customers or partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
