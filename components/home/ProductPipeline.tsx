import { ArrowRight } from "lucide-react";

export default function ProductPipeline() {
  const steps = [
    { name: "CAMERA + VIBRATION + GPS", type: "input" },
    { name: "AI DETECTION", type: "process" },
    { name: "CONFIRMATION", type: "process" },
    { name: "LOCATION", type: "process" },
    { name: "ROAD SEGMENT", type: "process" },
    { name: "RISK ANALYSIS", type: "analyze" },
    { name: "MAINTENANCE PRIORITY", type: "output" }
  ];

  return (
    <section className="py-24 bg-card border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase tracking-widest text-sm">
            Core Intelligence Pipeline
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step.name} className="flex flex-col items-center w-full group">
              <div 
                className={`
                  w-full md:w-2/3 text-center py-4 px-6 rounded-xl border-2 font-bold tracking-wider transition-all duration-300
                  ${step.type === 'input' ? 'bg-muted border-border text-muted-foreground' : ''}
                  ${step.type === 'process' ? 'bg-card border-border text-foreground hover:border-accent hover:text-accent' : ''}
                  ${step.type === 'analyze' ? 'bg-accent/10 border-accent/30 text-accent' : ''}
                  ${step.type === 'output' ? 'bg-foreground border-foreground text-background shadow-xl' : ''}
                `}
              >
                {step.name}
              </div>
              
              {index < steps.length - 1 && (
                <div className="h-10 w-0.5 bg-border my-2 relative">
                  <div className="absolute top-0 left-0 w-full bg-accent h-0 group-hover:h-full transition-all duration-500"></div>
                  <ArrowRight className="absolute -bottom-3 -left-[9px] w-5 h-5 text-border group-hover:text-accent transition-colors rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
