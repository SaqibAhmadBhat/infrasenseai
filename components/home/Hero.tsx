"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Radio } from "lucide-react";

/* ── Simulated telemetry events ─────────────────────────────── */
const EVENTS = [
  { t: "10:41:08", msg: "IMU anomaly detected — vibration spike registered.", lvl: "dim" },
  { t: "10:41:12", msg: "Visual confirmation via YOLOv8 — potential surface defect.", lvl: "dim" },
  { t: "10:41:18", msg: "GPS lock confirmed. Segment: R-014 · LAT 8.7312° · LON 77.7045°", lvl: "normal" },
  { t: "10:41:24", msg: "Multi-frame consensus reached. Defect severity: HIGH.", lvl: "amber" },
  { t: "10:41:31", msg: "Segment R-014 priority escalated → CRITICAL. Maintenance flag active.", lvl: "teal" },
];

/* ── Road network nodes for the GIS map ─────────────────────── */
const ROADS = [
  { id: "R-011", path: "M 20 80 Q 80 60 140 40",  status: "low" },
  { id: "R-012", path: "M 140 40 Q 200 30 270 50", status: "low" },
  { id: "R-013", path: "M 270 50 Q 330 70 380 90", status: "med" },
  { id: "R-014", path: "M 140 40 Q 160 120 170 200", status: "crit" },  // selected
  { id: "R-015", path: "M 170 200 Q 200 260 240 300", status: "high" },
  { id: "R-016", path: "M 20 80 Q 60 150 80 220",  status: "low" },
  { id: "R-017", path: "M 80 220 Q 120 280 170 200", status: "med" },
  { id: "R-018", path: "M 240 300 Q 310 320 380 300", status: "low" },
  { id: "R-019", path: "M 380 90 Q 400 160 380 300", status: "med" },
];

const ROAD_COLOR: Record<string, string> = {
  low:  "#1c2438",
  med:  "#f59e0b55",
  high: "#ef444466",
  crit: "#14b8a6",
};

const DEFECT_MARKERS = [
  { cx: 155, cy: 120, r: 3.5, fill: "#ef4444", pulsed: true  },
  { cx: 162, cy: 155, r: 3,   fill: "#f59e0b", pulsed: false },
  { cx: 168, cy: 180, r: 3.5, fill: "#ef4444", pulsed: true  },
];

export default function Hero() {
  const [eventCount, setEventCount] = useState(3);
  const [vehiclePos, setVehiclePos] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);

  /* slowly animate the vehicle on the selected road segment */
  useEffect(() => {
    const id = setInterval(() => {
      setVehiclePos(p => (p >= 100 ? 0 : p + 0.4));
    }, 50);
    return () => clearInterval(id);
  }, []);

  /* tick an event into the feed every few seconds */
  useEffect(() => {
    const id = setInterval(() => {
      setEventCount(c => (c >= EVENTS.length ? 1 : c + 1));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight, behavior: "smooth" });
  }, [eventCount]);

  /* vehicle position along the cubic bezier: M 140 40 Q 160 120 170 200 */
  const t  = vehiclePos / 100;
  const vx = (1-t)*(1-t)*140 + 2*(1-t)*t*160 + t*t*170;
  const vy = (1-t)*(1-t)*40  + 2*(1-t)*t*120  + t*t*200;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-background">

      {/* Background: grid + radial gradient */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(20,184,166,0.06) 0%, transparent 65%)" }}
      />
      {/* Subtle horizontal rule near top */}
      <div className="absolute top-16 left-0 right-0 h-px bg-border/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 items-center">

          {/* ── LEFT: Copy ───────────────────────────────────── */}
          <div className="xl:col-span-5 flex flex-col gap-6">

            {/* Status pill */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="status-pill status-pill-prototype">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Working Prototype
              </div>
              <div className="status-pill status-pill-prototype opacity-70">
                AIoT Road Intelligence
              </div>
            </div>

            {/* H1 */}
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight leading-[1.08] text-balance">
              Roads are physical.
              <br />
              <span className="text-gradient-teal">Their intelligence</span>
              <br />
              shouldn&apos;t be.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
              InfraSense AI transforms road-condition signals into location-aware infrastructure intelligence — enabling more informed, more efficient maintenance decisions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/solution"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/10"
              >
                Explore the Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-background-2 border border-border text-foreground rounded-lg font-semibold text-sm hover:border-border-bright hover:bg-muted/60 transition-all duration-200"
              >
                Partner With Us
              </Link>
            </div>

            {/* Minimal metrics strip */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-border/50">
              {[
                { label: "Sensing Modalities", value: "3" },
                { label: "Detection Model",    value: "YOLOv8" },
                { label: "Current Stage",      value: "Prototype" },
              ].map(m => (
                <div key={m.label}>
                  <div className="text-xl font-bold text-foreground tracking-tight">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Command visualization ─────────────────── */}
          <div className="xl:col-span-7">
            <div className="relative w-full rounded-2xl border border-border bg-background-2 shadow-2xl shadow-black/60 overflow-hidden">

              {/* Window chrome */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background-3/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-muted-foreground tracking-widest uppercase">infrasense://road-intelligence/live</span>
                </div>
                <div className="telemetry-badge">
                  <Radio className="w-2.5 h-2.5" />
                  PROTOTYPE VISUALIZATION
                </div>
              </div>

              {/* Main panel grid */}
              <div className="grid grid-cols-12 min-h-[480px] md:min-h-[520px]">

                {/* ─ LEFT SIDEBAR: segment list ─ */}
                <div className="col-span-3 border-r border-border p-3 flex flex-col gap-2 bg-background/40">
                  <div className="data-panel-header">Segments</div>
                  {[
                    { id: "R-013", score: 38, lvl: "med"  },
                    { id: "R-014", score: 92, lvl: "crit", selected: true },
                    { id: "R-015", score: 71, lvl: "high" },
                    { id: "R-017", score: 22, lvl: "low"  },
                    { id: "R-019", score: 44, lvl: "med"  },
                  ].map(s => (
                    <div
                      key={s.id}
                      className={`p-2 rounded-lg border text-xs transition-all ${
                        s.selected
                          ? "border-accent bg-accent/8"
                          : "border-border hover:border-border-bright"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className={`font-mono font-bold ${s.selected ? "text-accent" : "text-foreground-dim"}`}>{s.id}</span>
                        <span className={`text-[9px] font-bold px-1 py-0.5 rounded ${
                          s.lvl === "crit" ? "text-accent" :
                          s.lvl === "high" ? "text-amber" :
                          s.lvl === "med"  ? "text-amber/60" :
                          "text-muted-foreground"
                        }`}>{s.score}</span>
                      </div>
                      <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            s.score > 80 ? "bg-danger" :
                            s.score > 55 ? "bg-amber" :
                            "bg-accent"
                          }`}
                          style={{ width: `${s.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* ─ CENTER: SVG GIS map ─ */}
                <div className="col-span-6 relative overflow-hidden bg-[#06080f]">
                  {/* Map grid */}
                  <svg className="absolute inset-0 opacity-[0.06]" width="100%" height="100%">
                    <defs>
                      <pattern id="hero-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#fff" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-grid)" />
                  </svg>

                  {/* Road network */}
                  <svg
                    viewBox="0 0 400 360"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Base roads */}
                    {ROADS.map(r => (
                      <path
                        key={r.id}
                        d={r.path}
                        fill="none"
                        stroke={ROAD_COLOR[r.status]}
                        strokeWidth={r.id === "R-014" ? 6 : 4}
                        strokeLinecap="round"
                      />
                    ))}

                    {/* Teal glow on selected segment */}
                    <path
                      d="M 140 40 Q 160 120 170 200"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.35"
                      style={{ filter: "blur(4px)" }}
                    />

                    {/* Defect markers */}
                    {DEFECT_MARKERS.map((m, i) => (
                      <g key={i}>
                        {m.pulsed && (
                          <circle cx={m.cx} cy={m.cy} r={m.r + 4} fill={m.fill} opacity="0.15">
                            <animate attributeName="r" values={`${m.r+2};${m.r+7};${m.r+2}`} dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle cx={m.cx} cy={m.cy} r={m.r} fill={m.fill} />
                      </g>
                    ))}

                    {/* Vehicle */}
                    <circle cx={vx} cy={vy} r="5" fill="#14b8a6">
                      <animate attributeName="r" values="4.5;5.5;4.5" dur="1s" repeatCount="indefinite" />
                    </circle>
                    {/* Vehicle trail */}
                    <circle cx={vx - 5} cy={vy - 3} r="2.5" fill="#14b8a6" opacity="0.3" />

                    {/* Coordinate overlay text */}
                    <text x="12" y="24" fill="#6b7a99" fontSize="8" fontFamily="monospace">LAT 8.7312°</text>
                    <text x="12" y="35" fill="#6b7a99" fontSize="8" fontFamily="monospace">LON 77.7045°</text>

                    {/* Legend */}
                    <rect x="296" y="8" width="96" height="48" rx="4" fill="#0a0d18" opacity="0.85" />
                    <circle cx="306" cy="20" r="3" fill="#14b8a6" />
                    <text x="313" y="24" fill="#6b7a99" fontSize="7" fontFamily="monospace">Critical</text>
                    <circle cx="306" cy="32" r="3" fill="#f59e0b" />
                    <text x="313" y="36" fill="#6b7a99" fontSize="7" fontFamily="monospace">High risk</text>
                    <circle cx="306" cy="44" r="3" fill="#ef4444" />
                    <text x="313" y="48" fill="#6b7a99" fontSize="7" fontFamily="monospace">Defect</text>
                  </svg>

                  {/* Corner overlays */}
                  <div className="absolute top-3 right-3 telemetry-badge text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    SIM · PROTOTYPE
                  </div>
                </div>

                {/* ─ RIGHT: intelligence panel ─ */}
                <div className="col-span-3 border-l border-border p-3 flex flex-col gap-3 bg-background/40">
                  <div className="data-panel-header">Segment Intel</div>

                  <div className="text-accent font-mono font-bold text-base">R-014</div>
                  <div className="text-xs text-muted-foreground -mt-2">Main Arterial · Urban</div>

                  {/* Score */}
                  <div className="data-panel">
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">Risk Score</div>
                    <div className="text-3xl font-bold text-danger font-mono">92</div>
                    <div className="text-[10px] text-muted-foreground">/100 · CRITICAL</div>
                    <div className="w-full h-1 bg-border rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-danger rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>

                  {/* Defects */}
                  <div className="data-panel flex flex-col gap-1.5">
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5">Events</div>
                    {[
                      { label: "Surface Defect", count: "4", color: "text-danger" },
                      { label: "Cracking",       count: "2", color: "text-amber" },
                    ].map(d => (
                      <div key={d.label} className="flex justify-between items-center text-xs">
                        <span className="text-foreground-dim">{d.label}</span>
                        <span className={`font-mono font-bold ${d.color}`}>{d.count}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <button className="mt-auto w-full py-2.5 bg-accent/10 border border-accent/30 text-accent rounded-lg text-xs font-semibold hover:bg-accent/20 transition-colors">
                    Prioritize Segment
                  </button>
                </div>
              </div>

              {/* ─ BOTTOM: Event feed ─ */}
              <div className="border-t border-border px-4 py-3 bg-background/60">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Event Stream</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[9px] font-mono text-muted-foreground ml-auto">SIMULATED DATA</span>
                </div>
                <div ref={feedRef} className="flex flex-col gap-1 h-20 overflow-y-auto scrollbar-thin">
                  {EVENTS.slice(0, eventCount).map((e, i) => (
                    <div key={i} className="flex gap-3 text-[10px] font-mono">
                      <span className="text-muted-foreground shrink-0">{e.t}</span>
                      <span className={
                        e.lvl === "teal"   ? "text-accent" :
                        e.lvl === "amber"  ? "text-amber"  :
                        e.lvl === "normal" ? "text-foreground-dim" :
                        "text-muted-foreground"
                      }>{e.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
        <span className="text-[9px] font-mono tracking-widest uppercase text-muted-foreground">Scroll</span>
      </div>
    </section>
  );
}
