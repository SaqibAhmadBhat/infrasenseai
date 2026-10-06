import { Metadata } from "next";
import { ArrowDown, Leaf, Target, Wind, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Climate Impact | InfraSense AI",
  description: "Road maintenance is also a climate decision. Understanding the carbon reduction mechanisms associated with continuous infrastructure monitoring.",
};

export default function ClimateImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-card text-foreground">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Road maintenance is also a climate decision.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              By shifting from reactive repair to continuous intelligence, authorities can optimize resource allocation, extend asset lifespans, and potentially reduce the massive carbon footprint associated with heavy road reconstruction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="p-8 border border-border bg-card rounded-2xl">
              <Wind className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">01. In-Use Vehicle Emissions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rougher pavement can significantly increase the rolling resistance of vehicles. This increased friction demands more fuel consumption, directly raising the associated emissions of the transportation network.
              </p>
            </div>
            
            <div className="p-8 border border-border bg-card rounded-2xl">
              <Factory className="w-8 h-8 text-foreground mb-6" />
              <h3 className="text-xl font-bold mb-4">02. Embodied Carbon of Rebuilding</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Delayed maintenance allows minor surface degradation to penetrate base layers, leading to extensive reconstruction. These deep repairs require carbon-intensive materials like asphalt and concrete.
              </p>
            </div>

            <div className="p-8 border border-border bg-card rounded-2xl">
              <Target className="w-8 h-8 text-accent-secondary mb-6" />
              <h3 className="text-xl font-bold mb-4">03. Wasted Material & Budget</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reactive maintenance without geospatial intelligence results in the inefficient deployment of repair crews and material, fixing symptoms rather than prioritizing critical network segments.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-card text-foreground p-8 md:p-16 rounded-3xl relative overflow-hidden border border-border shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Leaf className="w-96 h-96 text-accent" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
              
              {/* Maintain Earlier */}
              <div className="flex-1 w-full p-8 rounded-2xl bg-accent/10 border-2 border-accent text-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">MAINTAIN<br/>EARLIER</h3>
                  <div className="h-px w-16 bg-accent mx-auto mb-4"></div>
                  <ul className="text-sm font-medium space-y-2 text-foreground/80">
                    <li>Surface treatment only</li>
                    <li>Minimal material used</li>
                    <li>Low embodied carbon</li>
                    <li>Preserved base structure</li>
                  </ul>
                </div>
              </div>

              {/* VS / Instead of */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Instead of</div>
                <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center bg-background z-20">
                  <ArrowDown className="w-5 h-5 text-muted-foreground md:-rotate-90" />
                </div>
              </div>

              {/* Rebuild Later */}
              <div className="flex-1 w-full p-8 rounded-2xl bg-destructive/5 border-2 border-destructive/30 text-center relative group overflow-hidden opacity-80">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-destructive/20 text-destructive flex items-center justify-center mx-auto mb-6 grayscale group-hover:grayscale-0 transition-all">
                    <Factory className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground/60 group-hover:text-foreground transition-colors">REBUILD<br/>LATER</h3>
                  <div className="h-px w-16 bg-destructive/30 mx-auto mb-4"></div>
                  <ul className="text-sm font-medium space-y-2 text-muted-foreground">
                    <li>Deep reconstruction</li>
                    <li>Massive material footprint</li>
                    <li>High embodied carbon</li>
                    <li>Structural failure</li>
                  </ul>
                </div>
              </div>
              
            </div>
            
            <div className="mt-12 text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-bold border border-accent/30">
                <Leaf className="w-4 h-4" />
                Continuous Intelligence Enables Prevention
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-8 text-center p-6 bg-muted/50 rounded-xl border border-border">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
              InfraSense AI&apos;s network-level climate savings are a field-validation objective and have not yet been measured.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
