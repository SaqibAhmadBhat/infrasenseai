export default function Problem() {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">

        {/* Section label */}
        <div className="section-label mb-10">The Infrastructure Problem</div>

        {/* Editorial statement */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-balance mb-6">
            Most road networks are inspected{" "}
            <span className="text-muted-foreground">periodically.</span>
            <br />
            Infrastructure doesn&apos;t deteriorate{" "}
            <span className="text-gradient-teal">periodically.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The gap between inspection cycles is where maintenance budgets are quietly consumed by problems that could have been caught earlier.
          </p>
        </div>

        {/* Two-column timeline comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Traditional */}
          <div className="relative rounded-2xl border border-border bg-background-2 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-danger/40" />
            <div className="mb-6">
              <div className="text-[9px] font-bold uppercase tracking-widest text-danger/70 mb-2">Current Reality</div>
              <div className="text-xl font-bold text-foreground">Periodic Inspection</div>
            </div>
            <div className="flex flex-col gap-0">
              {[
                { step: "Survey",             detail: "Infrequent manual inspection. Months between cycles.",     dot: "bg-muted-foreground" },
                { step: "Snapshot",           detail: "Point-in-time data. Condition at a single moment.",        dot: "bg-muted-foreground" },
                { step: "Deterioration Gap",  detail: "Defects grow undetected between surveys.",                 dot: "bg-danger" },
                { step: "Complaint-Driven",   detail: "Maintenance triggered by failures, not evidence.",         dot: "bg-danger" },
                { step: "Reactive Response",  detail: "Emergency repairs. Higher cost. Lower outcomes.",          dot: "bg-danger" },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-4 items-start group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-2.5 h-2.5 rounded-full ${s.dot} mt-1`} />
                    {i < 4 && <div className="w-px h-12 bg-border mt-1" />}
                  </div>
                  <div className="pb-4">
                    <div className="text-sm font-semibold text-foreground-dim">{s.step}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* InfraSense approach */}
          <div className="relative rounded-2xl border border-accent/30 bg-background-2 p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(20,184,166,0.04), transparent 70%)" }} />
            <div className="relative mb-6">
              <div className="text-[9px] font-bold uppercase tracking-widest text-accent mb-2">InfraSense AI Direction</div>
              <div className="text-xl font-bold text-foreground">Continuous Intelligence</div>
            </div>
            <div className="relative flex flex-col gap-0">
              {[
                { step: "Continuous Sensing",      detail: "Camera + IMU + GPS streaming while vehicles traverse the network.", dot: "bg-accent" },
                { step: "AI Detection",            detail: "YOLOv8 inference identifies surface anomalies in real time.",        dot: "bg-accent" },
                { step: "Location-Aware Evidence", detail: "Events tied to precise GPS coordinates and road segments.",          dot: "bg-accent" },
                { step: "Network Visibility",      detail: "Condition data aggregated across multiple passes over time.",        dot: "bg-accent" },
                { step: "Prioritized Intelligence","detail": "Ranked intervention list. Evidence-based budget allocation.",      dot: "bg-accent" },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-4 items-start group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-2.5 h-2.5 rounded-full ${s.dot} mt-1`} style={{ boxShadow: "0 0 6px rgba(20,184,166,0.5)" }} />
                    {i < 4 && <div className="w-px h-12 bg-accent/20 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <div className="text-sm font-semibold text-foreground">{s.step}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-16 max-w-3xl mx-auto text-center border-t border-border pt-12">
          <p className="text-xl md:text-2xl font-medium text-foreground-dim leading-relaxed text-balance">
            &ldquo;When maintenance starts with fragmented information, constrained budgets are forced into reactive decisions.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
