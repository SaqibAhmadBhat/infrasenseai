"use client";

import { useState } from "react";

/* ── Simulated prototype command center data ─── */
const SEGMENTS = [
  { id: "SEG-A4-01", name: "Main Arterial·N",  risk: "Critical", score: 92, events: 7, selected: true  },
  { id: "SEG-B1-07", name: "Urban Ring·E",      risk: "High",     score: 74, events: 4, selected: false },
  { id: "SEG-C9-12", name: "District Road·W",   risk: "Moderate", score: 48, events: 2, selected: false },
  { id: "SEG-D2-03", name: "Industrial Ave",    risk: "Low",      score: 21, events: 1, selected: false },
  { id: "SEG-E5-08", name: "Connector·S",       risk: "Moderate", score: 55, events: 3, selected: false },
];

const RISK_COLOR: Record<string,string> = {
  Critical: "text-danger", High: "text-amber", Moderate: "text-amber/60", Low: "text-muted-foreground",
};

const ROAD_PATHS = [
  { d: "M40 350 Q100 250 180 180", color: "#1c2438", w: 5 },
  { d: "M180 180 Q230 120 300 80", color: "#1c2438", w: 5 },
  { d: "M300 80  Q360 60 420 80",  color: "#f59e0b44", w: 5 },
  { d: "M180 180 Q200 280 220 380",color: "#14b8a6", w: 7 },   // selected
  { d: "M220 380 Q270 420 340 410",color: "#ef444455", w: 5 },
  { d: "M40 350 Q80 390 100 430",  color: "#1c2438", w: 4 },
  { d: "M420 80 Q440 200 420 320", color: "#1c243855", w: 4 },
];

const DEFECTS = [
  { cx: 190, cy: 220, fill: "#ef4444", r: 5, pulse: true  },
  { cx: 200, cy: 265, fill: "#ef4444", r: 4, pulse: false },
  { cx: 210, cy: 300, fill: "#f59e0b", r: 4, pulse: true  },
];

export default function ProductPipeline() {
  const [selected, setSelected] = useState("SEG-A4-01");
  const seg = SEGMENTS.find(s => s.id === selected) ?? SEGMENTS[0];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="section-label mb-3">Prototype Command Interface</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Road intelligence, visualized.
            </h2>
          </div>
          <div className="telemetry-badge text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            PROTOTYPE INTERFACE · SIMULATED DATA
          </div>
        </div>

        {/* 3-column command panel */}
        <div className="rounded-2xl border border-border bg-background-2 overflow-hidden shadow-2xl shadow-black/50">

          {/* Chrome bar */}
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-background-3/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground tracking-widest">INFRASENSE ROAD INTELLIGENCE CONSOLE · v0.9 PROTOTYPE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">

            {/* LEFT: segment list */}
            <div className="lg:col-span-3 border-r border-border p-4 flex flex-col gap-2">
              <div className="data-panel-header">Network Segments</div>
              {SEGMENTS.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    selected === s.id
                      ? "border-accent bg-accent/8"
                      : "border-border hover:border-border-bright hover:bg-muted/30"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-mono text-xs font-bold ${selected===s.id?"text-accent":"text-foreground-dim"}`}>{s.id}</span>
                    <span className={`text-[9px] font-bold uppercase ${RISK_COLOR[s.risk]}`}>{s.risk}</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-2">{s.name}</div>
                  <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${s.score>75?"bg-danger":s.score>50?"bg-amber":"bg-accent"}`}
                      style={{ width: `${s.score}%` }}
                    />
                  </div>
                  <div className="text-right text-[9px] font-mono text-muted-foreground mt-1">{s.score}/100</div>
                </button>
              ))}
            </div>

            {/* CENTER: GIS map */}
            <div className="lg:col-span-6 border-r border-border relative overflow-hidden bg-[#06080f] min-h-[360px] lg:min-h-0">
              {/* Grid bg */}
              <svg className="absolute inset-0 opacity-[0.05]" width="100%" height="100%">
                <defs>
                  <pattern id="console-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#fff" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#console-grid)" />
              </svg>

              {/* Road network */}
              <svg viewBox="0 0 460 480" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
                {ROAD_PATHS.map((r, i) => (
                  <path key={i} d={r.d} fill="none" stroke={r.color} strokeWidth={r.w} strokeLinecap="round" />
                ))}
                {/* Glow on selected */}
                <path d="M180 180 Q200 280 220 380" fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" opacity="0.25" style={{ filter: "blur(5px)" }} />
                {/* Defects */}
                {DEFECTS.map((d,i) => (
                  <g key={i}>
                    {d.pulse && (
                      <circle cx={d.cx} cy={d.cy} r={d.r+5} fill={d.fill} opacity="0.12">
                        <animate attributeName="r" values={`${d.r+3};${d.r+9};${d.r+3}`} dur="2.2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.12;0.04;0.12" dur="2.2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} />
                  </g>
                ))}
                {/* Coordinates text */}
                <text x="16" y="28" fill="#6b7a99" fontSize="9" fontFamily="monospace">LAT 8.7312°</text>
                <text x="16" y="42" fill="#6b7a99" fontSize="9" fontFamily="monospace">LON 77.7045°</text>
              </svg>

              {/* Overlays */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                <div className="telemetry-badge text-[9px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  PROTOTYPE · SIM DATA
                </div>
              </div>

              {/* Event feed overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-background/90 backdrop-blur-md border border-border rounded-xl p-3">
                <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-2">
                  Event Stream
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="flex flex-col gap-1 font-mono text-[10px] max-h-16 overflow-hidden">
                  {[
                    { t:"10:41:31", msg:"Segment R-014 priority → CRITICAL", c:"text-accent" },
                    { t:"10:41:24", msg:"Event confirmed. Severity: HIGH",   c:"text-amber" },
                    { t:"10:41:18", msg:"GPS lock: SEG-A4-01 · R-014",       c:"text-foreground-dim" },
                  ].map((e,i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-muted-foreground shrink-0">{e.t}</span>
                      <span className={e.c}>{e.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: intelligence panel */}
            <div className="lg:col-span-3 p-4 flex flex-col gap-3">
              <div className="data-panel-header">Segment Intelligence</div>

              <div>
                <div className="font-mono text-xl font-bold text-accent">{seg.id}</div>
                <div className="text-xs text-muted-foreground">{seg.name}</div>
              </div>

              <div className="data-panel">
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">Risk Score</div>
                <div className={`text-3xl font-bold font-mono ${seg.score>75?"text-danger":seg.score>50?"text-amber":"text-accent"}`}>
                  {seg.score}
                </div>
                <div className="text-[10px] text-muted-foreground">/100 · {seg.risk}</div>
                <div className="w-full h-1 bg-border rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${seg.score>75?"bg-danger":seg.score>50?"bg-amber":"bg-accent"}`}
                    style={{ width: `${seg.score}%` }}
                  />
                </div>
              </div>

              <div className="data-panel">
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Observations</div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Event count</span>
                  <span className="font-mono font-bold text-foreground">{seg.events}</span>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className="font-mono font-bold text-foreground">Prototype</span>
                </div>
              </div>

              <div className="data-panel">
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-2">Status</div>
                <div className="status-pill status-pill-prototype text-[9px] w-fit">PROTOTYPE · NOT VALIDATED</div>
                <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
                  Data shown is simulated for prototype demonstration. Not from live field operation.
                </p>
              </div>

              <button className="mt-auto w-full py-2.5 bg-accent/10 border border-accent/30 text-accent rounded-lg text-xs font-semibold hover:bg-accent/20 transition-colors">
                Flag for Inspection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
