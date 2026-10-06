/* Traditional vs InfraSense AI differentiation */

const TRADITIONAL = [
  "Periodic inspection cycles",
  "Manual, labor-intensive surveys",
  "Fragmented, spreadsheet-based data",
  "No precise geospatial context",
  "Reactive to failures and complaints",
  "Difficult to scale across networks",
];

const INFRASENSE = [
  "Continuous sensing while traversing",
  "AI-assisted automated detection",
  "Location-aware evidence at GPS precision",
  "Road segment-level condition mapping",
  "Prioritized by evidence and severity",
  "Network-scale intelligence architecture",
];

export default function Differentiation() {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(20,184,166,0.03) 0%, transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="section-label mb-6">The Difference</div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl mb-16 text-balance">
          Not another pothole detector.{" "}
          <span className="text-gradient-teal">An intelligence layer.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden shadow-2xl shadow-black/30">

          {/* Traditional column */}
          <div className="bg-background-2 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-[10px]">
                Traditional Road Inspection
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {TRADITIONAL.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded border border-border flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-px bg-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* InfraSense column */}
          <div className="relative bg-background-2 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top left, rgba(20,184,166,0.05), transparent 60%)" }} />
            <div className="relative flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent" style={{ boxShadow: "0 0 6px rgba(20,184,166,0.7)" }} />
              <div className="text-[10px] font-semibold text-accent uppercase tracking-widest">
                InfraSense AI · Working Prototype
              </div>
            </div>
            <div className="relative flex flex-col gap-4">
              {INFRASENSE.map(item => (
                <div key={item} className="flex items-start gap-3 group">
                  <div className="w-4 h-4 rounded bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/25 transition-colors">
                    <svg viewBox="0 0 8 6" className="w-2 h-1.5 text-accent" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Caveat */}
        <p className="text-xs text-muted-foreground mt-6 text-center max-w-xl mx-auto">
          InfraSense AI capabilities described reflect the design direction of the working prototype. Field validation is the next milestone.
        </p>
      </div>
    </section>
  );
}
