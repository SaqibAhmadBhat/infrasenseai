import { Metadata } from "next";
import { ArrowRight, CheckCircle2, LocateFixed, BarChart3, AlertTriangle, Layers } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solution | InfraSense AI",
  description: "Explore how InfraSense AI turns road sensing into actionable maintenance intelligence.",
};

export default function SolutionPage() {
  const steps = [
    { title: "Continuous Sensing", desc: "Vehicle-mounted cameras and IMU sensors capture visual and inertial data constantly.", icon: <Layers className="w-5 h-5" /> },
    { title: "AI Defect Detection", desc: "YOLOv8-based computer vision identifies and categorizes surface anomalies in real-time.", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "Geospatial Localization", desc: "GPS telematics precisely map every observation to specific coordinates.", icon: <LocateFixed className="w-5 h-5" /> },
    { title: "Road-Segment Intelligence", desc: "Data is aggregated onto established road networks to evaluate the entire segment.", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Risk Analysis", desc: "Defects are clustered and scored based on density, severity, and potential hazard.", icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              From road sensing to maintenance intelligence.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Traditional monitoring is episodic and fragmented. We deliver continuous, location-aware intelligence that empowers proactive decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">The Shift in Workflow</h2>
          
          <div className="flex flex-col gap-8 md:gap-16 items-center">
            
            {/* The Old Model */}
            <div className="w-full max-w-4xl p-8 md:p-12 border-2 border-border/50 rounded-3xl bg-muted/10 opacity-70 flex flex-col items-center text-center">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">The Old Model: Reactive</h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl border-2 border-muted flex items-center justify-center text-muted-foreground mb-3 font-mono font-bold">01</div>
                  <div className="font-semibold text-sm">Periodic inspection</div>
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-muted rotate-90 md:rotate-0" />
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl border-2 border-muted flex items-center justify-center text-muted-foreground mb-3 font-mono font-bold">02</div>
                  <div className="font-semibold text-sm">Delayed info</div>
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-muted rotate-90 md:rotate-0" />
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl border-2 border-muted flex items-center justify-center text-muted-foreground mb-3 font-mono font-bold">03</div>
                  <div className="font-semibold text-sm">Fragmented records</div>
                </div>
                <ArrowRight className="hidden md:block w-6 h-6 text-muted rotate-90 md:rotate-0" />
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl border-2 border-muted flex items-center justify-center text-muted-foreground mb-3 font-mono font-bold bg-muted/20">04</div>
                  <div className="font-semibold text-sm text-foreground">Reactive repair</div>
                </div>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="w-px h-16 bg-border relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
              </div>
            </div>

            {/* The InfraSense Model */}
            <div className="w-full max-w-5xl p-8 md:p-16 border-2 border-accent/20 rounded-3xl bg-accent/5 shadow-[0_0_50px_rgba(13,148,136,0.1)] flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.15),transparent_60%)]"></div>
              
              <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-12 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                The InfraSense Model: Intelligence
              </h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 w-full relative z-10">
                
                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl border border-accent/40 bg-background flex items-center justify-center text-accent mb-4 transition-transform group-hover:scale-110 shadow-lg">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-sm uppercase tracking-wide">Continuous<br/>Sensing</div>
                </div>
                
                <div className="w-0.5 h-6 md:w-12 md:h-0.5 bg-accent/30 relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-accent origin-left scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 hidden md:block"></div>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl border border-accent/40 bg-background flex items-center justify-center text-accent mb-4 transition-transform group-hover:scale-110 shadow-lg">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-sm uppercase tracking-wide">Detection</div>
                </div>

                <div className="w-0.5 h-6 md:w-12 md:h-0.5 bg-accent/30 relative"></div>

                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl border border-accent/40 bg-background flex items-center justify-center text-accent mb-4 transition-transform group-hover:scale-110 shadow-lg">
                    <LocateFixed className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-sm uppercase tracking-wide">Location</div>
                </div>

                <div className="w-0.5 h-6 md:w-12 md:h-0.5 bg-accent/30 relative"></div>

                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl border border-accent/40 bg-background flex items-center justify-center text-accent mb-4 transition-transform group-hover:scale-110 shadow-lg">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-sm uppercase tracking-wide">Intelligence</div>
                </div>

                <div className="w-0.5 h-6 md:w-12 md:h-0.5 bg-accent/30 relative"></div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 border-accent bg-accent text-accent-foreground flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(13,148,136,0.4)]">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div className="font-bold text-base uppercase tracking-wider text-accent">Prioritization</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-muted text-foreground flex items-center justify-center rounded-xl mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Detection is only the beginning.</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            The true value proposition isn&apos;t merely identifying a pothole—it is aggregating billions of sensor data points to rank and score the precise road segments that require immediate capital allocation.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Link href="/technology" className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2">
              Explore the Technology <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
