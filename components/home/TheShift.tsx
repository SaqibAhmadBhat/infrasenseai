export default function TheShift() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Paradigm Shift
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Moving from manual sampling to continuous intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Traditional Workflow */}
          <div className="space-y-8 p-8 rounded-2xl border border-border/10 bg-background/5">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8">
              Traditional Approach
            </h3>
            <div className="flex flex-col gap-6">
              {['Observe', 'Report', 'Inspect', 'Decide'].map((step, index) => (
                <div key={step} className="flex items-center gap-4 opacity-50">
                  <div className="w-8 h-8 rounded-full border border-border/30 flex items-center justify-center font-mono text-xs">
                    {index + 1}
                  </div>
                  <div className="h-[1px] flex-1 bg-border/20"></div>
                  <span className="font-medium text-lg w-24">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* InfraSense AI Workflow */}
          <div className="space-y-8 p-8 rounded-2xl border border-accent/30 bg-accent/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
            
            <h3 className="text-sm font-bold tracking-widest text-accent uppercase mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              InfraSense AI
            </h3>
            
            <div className="flex flex-col gap-4">
              {['Sense', 'Detect', 'Locate', 'Map', 'Analyze', 'Prioritize'].map((step, index) => (
                <div key={step} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded bg-accent/20 text-accent flex items-center justify-center font-mono text-xs font-bold border border-accent/30 transition-colors group-hover:bg-accent group-hover:text-background">
                    {index + 1}
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent"></div>
                  <span className="font-semibold text-xl w-32">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
