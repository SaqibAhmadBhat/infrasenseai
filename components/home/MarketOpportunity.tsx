import { marketData } from "@/content/market";

export default function MarketOpportunity() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
              {marketData.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {marketData.description}
            </p>
            <div className="h-[1px] w-full bg-border mb-8"></div>
            <p className="text-sm font-semibold text-foreground tracking-wider uppercase">
              The Indian Road Network Opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {marketData.stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`p-8 rounded-3xl border ${index === 0 ? 'bg-foreground text-background border-transparent' : 'bg-card text-foreground border-border shadow-sm'}`}
              >
                <div className={`text-4xl md:text-5xl font-bold mb-4 ${index === 0 ? 'text-accent' : 'text-foreground'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${index === 0 ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
