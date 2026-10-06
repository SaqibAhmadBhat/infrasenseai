"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Prototype validation stage
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Turning road conditions into actionable infrastructure intelligence.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            AI-powered road monitoring that turns continuous sensing into location-aware, prioritised maintenance decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/solution"
              className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 group"
            >
              Explore the Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors flex items-center justify-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Technical Visualization (SVG / CSS) */}
        <div className="mt-20 w-full border border-border rounded-xl bg-card shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.05),transparent_70%)]"></div>
          
          <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between z-10 relative">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
                <div className="w-3 h-3 rounded-full bg-border"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground ml-4">
                pipeline_telemetry_sim.svg
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-accent/10 border border-accent/20 text-[10px] uppercase font-mono text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Prototype System Visualization
            </div>
          </div>
          
          <div className="p-8 md:p-16 relative flex flex-col items-center justify-center min-h-[400px] bg-card overflow-hidden">
            
            {/* Background Grid & Road Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative w-full max-w-4xl z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
              
              {/* Inputs */}
              <div className="flex flex-col gap-6 w-full md:w-1/4">
                <div className="flex items-center justify-end gap-4 group">
                  <div className="text-right">
                    <div className="text-xs font-bold text-foreground uppercase tracking-widest">Camera</div>
                    <div className="text-[10px] font-mono text-muted-foreground">30fps RGB</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center group-hover:border-accent transition-colors relative">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-4 group">
                  <div className="text-right">
                    <div className="text-xs font-bold text-foreground uppercase tracking-widest">Vibration</div>
                    <div className="text-[10px] font-mono text-muted-foreground">IMU 100Hz</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center group-hover:border-accent transition-colors relative">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-4 group">
                  <div className="text-right">
                    <div className="text-xs font-bold text-foreground uppercase tracking-widest">GPS</div>
                    <div className="text-[10px] font-mono text-muted-foreground">RTK Lock</div>
                  </div>
                  <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center group-hover:border-accent transition-colors relative">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>

              {/* Connecting Data Lines (Desktop) */}
              <div className="hidden md:block w-16 h-32 relative opacity-50">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0 15 C 50 15, 50 50, 100 50" fill="none" stroke="currentColor" stroke-width="2" className="text-border" />
                  <path d="M 0 50 L 100 50" fill="none" stroke="currentColor" stroke-width="2" className="text-border" />
                  <path d="M 0 85 C 50 85, 50 50, 100 50" fill="none" stroke="currentColor" stroke-width="2" className="text-border" />
                  
                  {/* Animated Data Packets */}
                  <circle r="3" fill="#0d9488" className="animate-[movePath1_2s_infinite_linear]">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 0 15 C 50 15, 50 50, 100 50" />
                  </circle>
                  <circle r="3" fill="#0d9488" className="animate-[movePath2_2.5s_infinite_linear]">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 0 50 L 100 50" />
                  </circle>
                  <circle r="3" fill="#0d9488" className="animate-[movePath3_1.8s_infinite_linear]">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 0 85 C 50 85, 50 50, 100 50" />
                  </circle>
                </svg>
              </div>

              {/* Central Processing */}
              <div className="flex flex-col items-center w-full md:w-1/4">
                <div className="w-32 h-32 rounded-2xl border-2 border-accent bg-accent/5 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(13,148,136,0.15)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">AI Detection</div>
                  <div className="text-[10px] font-mono text-muted-foreground">YOLOv8 Edge</div>
                  
                  {/* Scanning line */}
                  <div className="absolute left-0 right-0 h-0.5 bg-accent/50 blur-[1px] animate-[scan_2s_infinite_ease-in-out]"></div>
                </div>
              </div>

              {/* Connecting Data Lines (Desktop) */}
              <div className="hidden md:block w-16 h-8 relative opacity-50">
                <div className="w-full h-0.5 bg-border absolute top-1/2 -translate-y-1/2"></div>
                <div className="w-4 h-0.5 bg-accent absolute top-1/2 -translate-y-1/2 animate-[pulse_1s_infinite]"></div>
              </div>

              {/* Output Pipeline */}
              <div className="flex flex-col gap-3 w-full md:w-1/3 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-foreground transition-colors">
                  <div className="w-6 h-6 rounded bg-muted flex items-center justify-center font-mono text-xs">1</div>
                  <div className="font-semibold uppercase tracking-wider text-xs flex-1">Location Lock</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-foreground transition-colors">
                  <div className="w-6 h-6 rounded bg-muted flex items-center justify-center font-mono text-xs">2</div>
                  <div className="font-semibold uppercase tracking-wider text-xs flex-1">Road Segment</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-foreground transition-colors">
                  <div className="w-6 h-6 rounded bg-muted flex items-center justify-center font-mono text-xs">3</div>
                  <div className="font-semibold uppercase tracking-wider text-xs flex-1">Risk Score</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-accent bg-accent/10 hover:bg-accent/20 transition-colors shadow-sm">
                  <div className="w-6 h-6 rounded bg-accent text-accent-foreground flex items-center justify-center font-mono text-xs">4</div>
                  <div className="font-bold uppercase tracking-wider text-xs flex-1 text-accent">Maint. Priority</div>
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
