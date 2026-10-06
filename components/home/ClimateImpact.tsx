import { ArrowDown } from "lucide-react";

export default function ClimateImpact() {
  const primaryChain = [
    "Continuous monitoring",
    "Earlier defect identification",
    "Preventive maintenance",
    "Longer asset life",
    "Less reconstruction",
    "Less material waste"
  ];
  
  const secondaryChain = [
    "Smoother roads",
    "Lower rolling resistance",
    "Potentially lower fuel use / emissions"
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl text-balance">
            Better maintenance can mean less carbon.
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-background/10 border border-background/20 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-accent-secondary"></span>
            Validation objective: To be measured in field testing
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Primary Chain */}
          <div className="bg-background/5 rounded-3xl p-8 md:p-12 border border-border/10">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-10">
              Primary Climate Mechanism
            </h3>
            <div className="flex flex-col gap-2">
              {primaryChain.map((step, index) => (
                <div key={step} className="flex flex-col items-center group">
                  <div className="w-full text-center py-4 px-6 rounded-xl bg-background/10 border border-background/5 text-lg font-medium transition-colors group-hover:bg-background/20">
                    {step}
                  </div>
                  {index < primaryChain.length - 1 && (
                    <ArrowDown className="w-5 h-5 text-accent my-2 opacity-70" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Chain & Info */}
          <div className="flex flex-col justify-between gap-12">
            <div className="bg-background/5 rounded-3xl p-8 md:p-12 border border-border/10">
              <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-10">
                Secondary Mechanism
              </h3>
              <div className="flex flex-col gap-2">
                {secondaryChain.map((step, index) => (
                  <div key={step} className="flex flex-col items-center group">
                    <div className="w-full text-center py-4 px-6 rounded-xl bg-background/10 border border-background/5 text-lg font-medium transition-colors group-hover:bg-background/20">
                      {step}
                    </div>
                    {index < secondaryChain.length - 1 && (
                      <ArrowDown className="w-5 h-5 text-accent-secondary my-2 opacity-70" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <p className="text-sm text-accent-foreground/80 leading-relaxed font-mono">
                Note: The above diagrams illustrate intended climate mechanisms and hypotheses. Specific emissions reductions are validation objectives and not yet verified performance metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
