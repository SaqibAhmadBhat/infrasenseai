import { roadmapData } from "@/content/roadmap";

export default function RoadmapPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Product Maturity Roadmap
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
            Current Stage — Working Prototype
          </div>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2 hidden md:block z-0">
            <div className="h-full bg-accent w-1/5"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {roadmapData.map((item) => (
              <div 
                key={item.phase} 
                className={`flex flex-col md:items-center p-6 md:p-4 rounded-xl border-2 transition-colors bg-card
                  ${item.status === 'current' ? 'border-accent shadow-[0_0_20px_rgba(13,148,136,0.15)]' : 'border-border'}
                `}
              >
                <span className={`font-mono text-sm font-bold mb-3 ${item.status === 'current' ? 'text-accent' : 'text-muted-foreground'}`}>
                  {item.phase}
                </span>
                <h3 className={`text-base font-bold md:text-center leading-tight ${item.status === 'current' ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
