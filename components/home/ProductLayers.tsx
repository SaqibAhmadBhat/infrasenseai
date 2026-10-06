import { productLayers } from "@/content/product";

export default function ProductLayers() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl">
            From road observation to maintenance intelligence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {productLayers.map((layer) => (
            <div key={layer.number} className="group relative">
              {/* Connector line for desktop - visual only */}
              <div className="hidden lg:block absolute top-6 left-12 right-0 h-[1px] bg-border group-hover:bg-accent/50 transition-colors -z-10"></div>
              
              <div className="flex items-start gap-4 mb-6 relative bg-background pr-4 inline-flex">
                <span className="font-mono text-sm font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                  {layer.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-0.5">
                  {layer.title}
                </h3>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm group-hover:border-accent/50 transition-colors h-[calc(100%-4rem)]">
                <ul className="flex flex-col gap-3">
                  {layer.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
