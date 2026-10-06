import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road Intelligence | InfraSense AI",
  description: "See the road as a continuously changing system with our road intelligence platform.",
};

export default function RoadIntelligencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            See the road as a continuously changing system.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A dynamic interface that translates raw video and telemetry into geospatial maintenance logic.
          </p>
        </div>
      </section>

      {/* Simulated Product Interface */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Platform Overview</h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Prototype visualization
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[800px]">
            
            {/* LEFT: Segments */}
            <div className="lg:col-span-3 flex flex-col gap-4 overflow-hidden border border-border rounded-xl bg-card p-4">
              <div className="font-semibold uppercase tracking-wider text-xs text-muted-foreground pb-2 border-b border-border">Network Segments</div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                {[
                  { id: "SEG-A4-01", risk: "Critical", score: 92, selected: true },
                  { id: "SEG-A4-02", risk: "Moderate", score: 45, selected: false },
                  { id: "SEG-B1-05", risk: "Low", score: 12, selected: false },
                  { id: "SEG-B1-06", risk: "Low", score: 18, selected: false },
                  { id: "SEG-C9-12", risk: "High", score: 78, selected: false },
                ].map(seg => (
                  <div key={seg.id} className={`p-3 rounded-lg border cursor-pointer transition-colors ${seg.selected ? 'bg-accent/10 border-accent' : 'bg-background border-border hover:border-foreground/30'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className={`font-mono text-sm font-bold ${seg.selected ? 'text-accent' : 'text-foreground'}`}>{seg.id}</div>
                      <div className={`text-[10px] uppercase px-1.5 py-0.5 rounded ${
                        seg.risk === 'Critical' ? 'bg-destructive/20 text-destructive' :
                        seg.risk === 'High' ? 'bg-amber-500/20 text-amber-500' :
                        'bg-muted text-muted-foreground'
                      }`}>{seg.risk}</div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Risk Score</span>
                      <span className="font-mono">{seg.score}/100</span>
                    </div>
                    <div className="w-full h-1 bg-muted mt-2 rounded-full overflow-hidden">
                      <div className={`h-full ${
                        seg.score > 80 ? 'bg-destructive' :
                        seg.score > 60 ? 'bg-amber-500' :
                        'bg-accent'
                      }`} style={{ width: `${seg.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER: Map */}
            <div className="lg:col-span-6 border border-border rounded-xl bg-card relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-[#0a0a0c]">
                {/* Mock Map Grid */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                  <defs>
                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapgrid)" />
                </svg>
                
                {/* Road Lines */}
                <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0" preserveAspectRatio="xMidYMid slice">
                  <path d="M 50 350 Q 150 200 300 100" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 100 50 Q 200 150 250 350" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round" />
                  
                  {/* Selected Segment */}
                  <path d="M 170 170 Q 210 200 240 280" fill="none" stroke="#0d9488" strokeWidth="8" strokeLinecap="round" className="animate-pulse" />
                  
                  {/* Defect Markers */}
                  <circle cx="210" cy="200" r="4" fill="#ef4444" />
                  <circle cx="220" cy="225" r="4" fill="#ef4444" />
                  <circle cx="230" cy="250" r="4" fill="#f59e0b" />
                </svg>
              </div>
              
              <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
                <div className="px-3 py-1.5 bg-background/80 backdrop-blur border border-border rounded text-xs font-mono">
                  LAT: 8.7139, LNG: 77.7567
                </div>
                <div className="px-3 py-1.5 bg-background/80 backdrop-blur border border-border rounded text-xs font-mono text-accent flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  LIVE TELEMETRY
                </div>
              </div>
              
              {/* BOTTOM Event Timeline overlay in map */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur border border-border rounded-xl p-3 pointer-events-auto">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Event Feed</div>
                <div className="flex flex-col gap-2 h-24 overflow-y-auto custom-scrollbar pr-2 font-mono text-xs">
                  <div className="flex gap-4 items-start text-foreground">
                    <span className="text-muted-foreground shrink-0">12:41:31</span>
                    <span>Priority updated: <span className="text-destructive">CRITICAL</span>. Maintenance alert dispatched.</span>
                  </div>
                  <div className="flex gap-4 items-start text-foreground">
                    <span className="text-muted-foreground shrink-0">12:41:18</span>
                    <span>Location locked to SEG-A4-01. Geospatial reconciliation complete.</span>
                  </div>
                  <div className="flex gap-4 items-start text-foreground">
                    <span className="text-muted-foreground shrink-0">12:41:12</span>
                    <span>Event confirmed via multi-frame consensus. Severity: High.</span>
                  </div>
                  <div className="flex gap-4 items-start text-muted-foreground">
                    <span className="shrink-0">12:41:08</span>
                    <span>Potential surface anomaly detected (confidence 87%).</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Intelligence Panel */}
            <div className="lg:col-span-3 flex flex-col gap-4 overflow-hidden border border-border rounded-xl bg-card p-4">
              <div className="font-semibold uppercase tracking-wider text-xs text-muted-foreground pb-2 border-b border-border">Segment Intelligence</div>
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                
                <div className="mb-6">
                  <div className="text-2xl font-mono font-bold text-accent mb-1">SEG-A4-01</div>
                  <div className="text-sm text-muted-foreground">Main Arterial Route</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-background border border-border rounded-lg p-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Condition Score</div>
                    <div className="text-3xl font-bold text-destructive">92<span className="text-sm text-muted-foreground font-normal">/100 (Risk)</span></div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg p-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Detected Defects</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Potholes (Deep)</span>
                        <span className="font-mono font-bold">4</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Alligator Cracking</span>
                        <span className="font-mono font-bold text-amber-500">12m²</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Edge Deformation</span>
                        <span className="font-mono font-bold text-muted-foreground">None</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg p-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Observation Metadata</div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-muted-foreground">
                      <div>Passes (7d):</div><div className="text-right text-foreground">14</div>
                      <div>Last seen:</div><div className="text-right text-foreground">2h ago</div>
                      <div>Confidence:</div><div className="text-right text-foreground">96.4%</div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-accent text-accent-foreground font-bold rounded-lg text-sm transition-colors hover:bg-accent/90">
                    Flag for Maintenance
                  </button>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intelligence Pipeline Breakdown */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-foreground pt-6">
              <h3 className="text-xl font-bold mb-3">Detection</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Continuous edge inference identifies road conditions, discarding unhelpful frames and registering potential defects.</p>
            </div>
            <div className="border-t-2 border-accent pt-6">
              <h3 className="text-xl font-bold mb-3">Location & Aggregation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Multiple passes and sensors confirm defects, tying them definitively to precise GPS coordinates and road segments.</p>
            </div>
            <div className="border-t-2 border-accent-secondary pt-6">
              <h3 className="text-xl font-bold mb-3">Risk Assessment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">The system evaluates the density and severity of anomalies on a segment to determine the localized risk profile.</p>
            </div>
            <div className="border-t-2 border-destructive pt-6">
              <h3 className="text-xl font-bold mb-3">Prioritization</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Budgets are finite. The final output is a ranked list of segments where capital allocation will have the greatest impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
