import { Metadata } from "next";
import { BookOpen, Network, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Research | InfraSense AI",
  description: "Academic and technical research underlying the InfraSense AI platform.",
};

export default function ResearchPage() {
  const roadmap = [
    { phase: "Prototype", status: "completed" },
    { phase: "Engineering refinement", status: "current" },
    { phase: "Field validation", status: "pending" },
    { phase: "Institutional pilot", status: "pending" },
    { phase: "Scalable implementation", status: "pending" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Advancing the intersection of computer vision, multimodal sensing, and infrastructure analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-muted/30 border border-border rounded-xl">
              <Network className="w-6 h-6 text-foreground mb-4" />
              <h3 className="font-bold text-lg mb-2">Computer Vision</h3>
              <p className="text-muted-foreground text-sm">Edge-optimized models for continuous surface defect recognition under variable conditions.</p>
            </div>
            <div className="p-6 bg-muted/30 border border-border rounded-xl">
              <BookOpen className="w-6 h-6 text-foreground mb-4" />
              <h3 className="font-bold text-lg mb-2">Geospatial Intelligence</h3>
              <p className="text-muted-foreground text-sm">Translating asynchronous video and inertial telemetry into rigid map-segment projections.</p>
            </div>
            <div className="p-6 bg-muted/30 border border-border rounded-xl">
              <Database className="w-6 h-6 text-foreground mb-4" />
              <h3 className="font-bold text-lg mb-2">Infrastructure Analytics</h3>
              <p className="text-muted-foreground text-sm">Clustering methodologies to derive maintenance risk profiles from millions of noisy data points.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Core Research Questions</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                  <p className="font-medium">How can road defects be detected continuously at low cost without specialized LiDAR surveying equipment?</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                  <p className="font-medium">How can heterogeneous observations (vision + vibration) be reconciled geographically in real-time?</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                  <p className="font-medium">How can limited bandwidth telemetry be used efficiently to stream critical anomalies while discarding normal road frames?</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</div>
                  <p className="font-medium">How can raw road observations be transformed into actionable, budget-aware maintenance intelligence?</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">5</div>
                  <p className="font-medium">How can infrastructure monitoring structurally contribute to climate-conscious maintenance cycles?</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">R&D Timeline</h2>
              <div className="bg-background border border-border rounded-2xl p-8">
                <div className="flex flex-col gap-6">
                  {roadmap.map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className={`w-3 h-3 rounded-full border-2 
                        ${stage.status === 'completed' ? 'bg-foreground border-foreground' : ''}
                        ${stage.status === 'current' ? 'bg-accent border-accent animate-pulse' : ''}
                        ${stage.status === 'pending' ? 'bg-transparent border-border' : ''}
                      `}></div>
                      <span className={`font-semibold text-lg
                        ${stage.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'}
                      `}>{stage.phase}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 font-mono">
                Note: InfraSense AI is currently in the engineering refinement phase. We do not claim published peer-reviewed research papers at this stage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
