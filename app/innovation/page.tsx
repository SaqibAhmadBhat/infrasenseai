import { Metadata } from "next";
import { Lightbulb, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Innovation | InfraSense AI",
  description: "Learn about the engineering concepts and core innovations behind InfraSense AI.",
};

export default function InnovationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Engineering the new standard for infrastructure.
            </h1>
            <p className="text-xl text-muted-foreground">
              InfraSense AI is built on rigorous engineering methodologies and scalable platform design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Engineering Concepts */}
            <div className="space-y-8">
              <div className="p-8 border border-border bg-card rounded-2xl">
                <div className="w-10 h-10 bg-muted flex items-center justify-center rounded-lg mb-4 text-foreground">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">Core Engineering Concepts</h3>
                <ul className="space-y-4 mt-6">
                  <li className="flex flex-col border-l-2 border-accent pl-4">
                    <span className="font-semibold text-foreground">Multi-frame Confirmation</span>
                    <span className="text-sm text-muted-foreground">Reducing false positives by validating defects across consecutive frames before registering an anomaly.</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-accent pl-4">
                    <span className="font-semibold text-foreground">Telemetry-Aware Event Handling</span>
                    <span className="text-sm text-muted-foreground">Fusing vibrational (IMU) data with visual data to gauge true defect depth and severity.</span>
                  </li>
                  <li className="flex flex-col border-l-2 border-accent pl-4">
                    <span className="font-semibold text-foreground">Geospatial Reconciliation</span>
                    <span className="text-sm text-muted-foreground">Mapping disparate observations accurately onto rigid road network segments.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* IP Status */}
            <div className="space-y-8">
              <div className="p-8 border border-border bg-muted/30 rounded-2xl relative overflow-hidden">
                {/* Subtle visual */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Lock className="w-48 h-48" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-background border border-border flex items-center justify-center rounded-lg mb-4 text-foreground">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Intellectual Property</h3>
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                    Our platform architecture, geospatial algorithms, and multi-modal fusion techniques represent substantial engineering effort. 
                  </p>
                  
                  <div className="inline-flex items-center gap-3 p-4 bg-background border border-border rounded-xl">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                    </span>
                    <span className="font-medium text-sm">IP development is under evaluation.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
