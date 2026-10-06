import { differentiationData } from "@/content/product";
import { Layers, Network } from "lucide-react";

export default function Differentiation() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              The defensible part is not detection. It is everything after.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="bg-muted p-6 rounded-2xl border border-border/50">
                <Layers className="w-6 h-6 text-muted-foreground mb-4" />
                <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2">Detection</h4>
                <p className="text-foreground font-medium">&quot;Something is wrong.&quot;</p>
              </div>
              
              <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
                <Network className="w-6 h-6 text-accent mb-4" />
                <h4 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Intelligence</h4>
                <p className="text-foreground font-medium text-balance">&quot;Which road segment matters most, and what should be addressed first?&quot;</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {differentiationData.map((item) => (
                <div key={item.title} className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors"></div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
