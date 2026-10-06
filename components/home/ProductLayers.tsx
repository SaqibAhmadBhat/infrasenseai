/* Sensor + AI technical stack diagram */

const STACK_LAYERS = [
  {
    id: "sensing",
    label: "Physical Sensing",
    color: "border-border text-foreground-dim",
    bg: "bg-background-3/60",
    nodes: [
      { name: "Camera",     detail: "RGB · 30fps",   status: "active" },
      { name: "IMU",        detail: "Vibration · 100Hz", status: "active" },
      { name: "GPS",        detail: "Location lock",  status: "active" },
      { name: "ESP32",      detail: "Edge MCU",       status: "active" },
    ],
  },
  {
    id: "ai",
    label: "AI Perception",
    color: "border-accent/30 text-foreground",
    bg: "bg-accent/5",
    nodes: [
      { name: "YOLOv8",     detail: "Object detection", status: "active" },
      { name: "OpenCV",     detail: "Frame pipeline",   status: "active" },
      { name: "Edge Inf.",  detail: "Real-time",        status: "active" },
    ],
  },
  {
    id: "backend",
    label: "Intelligence Layer",
    color: "border-accent/20 text-foreground",
    bg: "bg-accent/3",
    nodes: [
      { name: "FastAPI",    detail: "Data ingestion",  status: "active" },
      { name: "PostgreSQL", detail: "Spatial storage", status: "active" },
      { name: "Docker",     detail: "Containerized",   status: "active" },
    ],
  },
  {
    id: "frontend",
    label: "Intelligence Interface",
    color: "border-border text-foreground-dim",
    bg: "bg-background-3/60",
    nodes: [
      { name: "React/Vite", detail: "Dashboard UI",   status: "active" },
      { name: "Node.js",    detail: "API gateway",    status: "active" },
      { name: "Supabase",   detail: "Auth + DB",      status: "prototype" },
    ],
  },
];

export default function ProductLayers() {
  return (
    <section className="relative py-28 bg-background-2 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="section-label mb-6">Technical Architecture</div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] lg:max-w-sm">
            Sensor to intelligence,{" "}
            <span className="text-gradient-teal">end to end.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed lg:max-w-sm lg:pt-2 self-end">
            Every layer is purpose-built for real road environments — connecting physical signal all the way to decision-ready output.
          </p>
        </div>

        {/* Stack visualization */}
        <div className="flex flex-col gap-0">
          {STACK_LAYERS.map((layer, li) => (
            <div key={layer.id}>
              {/* Connector arrow between layers */}
              {li > 0 && (
                <div className="flex items-center justify-center h-8 text-border">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-px h-4 bg-accent/30" />
                    <svg viewBox="0 0 10 6" className="w-2.5 h-1.5 text-accent/40" fill="currentColor">
                      <path d="M0 0 L5 6 L10 0 Z" />
                    </svg>
                  </div>
                </div>
              )}

              <div className={`rounded-2xl border ${layer.color} ${layer.bg} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Layer {String(li+1).padStart(2,"0")}</div>
                  <div className="font-semibold text-sm">{layer.label}</div>
                  <div className="ml-auto flex items-center gap-1.5 text-[9px] font-mono text-accent/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    ACTIVE · PROTOTYPE
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {layer.nodes.map(node => (
                    <div key={node.name} className="bg-background-2/80 border border-border rounded-xl p-3 hover:border-border-bright transition-colors group">
                      <div className="text-sm font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                        {node.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground">{node.detail}</div>
                      <div className={`mt-2 inline-flex items-center gap-1 text-[9px] font-mono ${
                        node.status === "prototype" ? "text-amber/70" : "text-accent/70"
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${node.status === "prototype" ? "bg-amber" : "bg-accent"}`} />
                        {node.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">
          Technology stack reflects current working prototype state. Architecture may evolve during field validation.
        </p>
      </div>
    </section>
  );
}
