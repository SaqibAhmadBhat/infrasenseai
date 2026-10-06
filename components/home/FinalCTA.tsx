import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance max-w-3xl mx-auto">
          Let&apos;s make infrastructure maintenance more intelligent.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          We are looking for validation partners, institutional collaborators, and organisations working on smarter road infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all flex items-center justify-center gap-2 group"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/technology"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-border text-background rounded-full font-medium hover:bg-background/10 transition-colors flex items-center justify-center"
          >
            Explore the Technology
          </Link>
        </div>
      </div>
    </section>
  );
}
