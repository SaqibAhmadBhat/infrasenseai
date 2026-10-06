export default function BusinessStatus() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2">
              Current Validation Stage
            </h3>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="font-semibold text-foreground">Working Prototype</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">0</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">Paying Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">0</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">External Pilots</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground">0</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">Revenue</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
