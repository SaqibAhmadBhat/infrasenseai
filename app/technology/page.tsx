import { Metadata } from "next";
import { Server, Cpu, Database, Network, Code, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology | InfraSense AI",
  description: "Dive into the deep-tech stack powering InfraSense AI's infrastructure intelligence.",
};

export default function TechnologyPage() {
  const stack = [
    { title: "Computer Vision", tech: "YOLOv8, OpenCV", desc: "Optimized models process visual frames at the edge to detect surface degradation and geometric anomalies.", icon: <Cpu /> },
    { title: "Embedded & IoT", tech: "ESP32, Vibration Sensors, Telemetry", desc: "Fuses inertial data with visual feeds to provide a multi-modal assessment of structural road integrity.", icon: <Layers /> },
    { title: "Backend Architecture", tech: "FastAPI, Node.js / Express, WebSockets", desc: "High-throughput asynchronous servers handle incoming telemetry payloads and stream real-time events.", icon: <Server /> },
    { title: "Data Storage", tech: "PostgreSQL, Supabase, ThingSpeak", desc: "Relational mapping of geospatial entities combined with time-series datastores for historical trending.", icon: <Database /> },
    { title: "Frontend Platform", tech: "React / Vite", desc: "A reactive spatial intelligence dashboard that translates complex datasets into interactive maps.", icon: <Code /> },
    { title: "Infrastructure", tech: "Docker, Docker Compose", desc: "Containerized microservices ensuring portability, scale, and environment consistency.", icon: <Network /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Engineering the road intelligence layer.
            </h1>
            <p className="text-xl text-muted-foreground">
              A scalable, multimodal sensor fusion and intelligence pipeline built to operate at the edge and scale in the cloud.
            </p>
          </div>

          {/* Architecture Diagram Visualization */}
          <div className="p-8 md:p-16 border border-border rounded-2xl bg-card shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted-foreground opacity-50 z-20">architecture_v2.0</div>
            
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-tech" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-tech)" />
              </svg>
            </div>

            <div className="flex flex-col items-center gap-0 relative z-10 w-full max-w-2xl mx-auto">
              
              {/* Layer 1: Vehicle */}
              <div className="w-full text-center p-6 border border-border bg-background rounded-xl shadow-lg relative group">
                <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">Vehicle Layer</span>
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border"><span className="text-xs font-mono">RGB</span></div>
                    <span className="text-[10px] uppercase text-muted-foreground">Camera</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border"><span className="text-xs font-mono">IMU</span></div>
                    <span className="text-[10px] uppercase text-muted-foreground">Vibration</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border"><span className="text-xs font-mono">RTK</span></div>
                    <span className="text-[10px] uppercase text-muted-foreground">GPS</span>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="h-10 w-full flex justify-center relative opacity-50">
                <div className="w-0.5 h-full bg-border"></div>
                <div className="absolute top-0 w-1.5 h-3 bg-accent rounded-full animate-[scan_2s_infinite_linear]"></div>
              </div>

              {/* Layer 2: Edge */}
              <div className="w-3/4 text-center p-5 border border-accent bg-accent/10 rounded-xl shadow-[0_0_20px_rgba(13,148,136,0.1)] relative">
                <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">Edge Device</span>
                <div className="font-mono text-sm font-bold text-foreground">AI Detection Pipeline</div>
                <div className="text-[10px] text-muted-foreground mt-1">YOLOv8 Edge Inference</div>
              </div>

              {/* Connector */}
              <div className="h-10 w-full flex justify-center relative opacity-50">
                <div className="w-0.5 h-full bg-border"></div>
                <div className="absolute top-0 w-1.5 h-3 bg-accent rounded-full animate-[scan_2s_infinite_linear]" style={{ animationDelay: '0.6s' }}></div>
              </div>

              {/* Layer 3: Backend */}
              <div className="w-full text-center p-5 border border-border bg-background rounded-xl shadow-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Backend Architecture</span>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="text-left">
                    <div className="text-sm font-bold">Telemetry Stream</div>
                    <div className="text-[10px] font-mono text-muted-foreground">FastAPI / WebSockets</div>
                  </div>
                  <div className="w-px h-8 bg-border"></div>
                  <div className="text-left">
                    <div className="text-sm font-bold">Geospatial Data</div>
                    <div className="text-[10px] font-mono text-muted-foreground">PostGIS / Supabase</div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="h-10 w-full flex justify-center relative opacity-50">
                <div className="w-0.5 h-full bg-border"></div>
                <div className="absolute top-0 w-1.5 h-3 bg-accent rounded-full animate-[scan_2s_infinite_linear]" style={{ animationDelay: '1.2s' }}></div>
              </div>

              {/* Layer 4: Platform */}
              <div className="w-full text-center p-6 border-2 border-foreground bg-foreground text-background rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted block mb-4 relative z-10">Web Platform</span>
                <div className="flex justify-center gap-4 relative z-10">
                  <span className="px-4 py-2 bg-background/10 border border-background/20 rounded font-bold text-sm">Risk Analytics</span>
                  <span className="px-4 py-2 bg-background/10 border border-background/20 rounded font-bold text-sm">Maintenance Priority</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Details */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stack.map((item, idx) => (
              <div key={idx} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-foreground text-background rounded-lg">{item.icon}</div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-muted text-xs font-mono font-medium rounded text-muted-foreground">{item.tech}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
