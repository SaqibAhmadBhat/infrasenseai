import { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | InfraSense AI",
  description: "Partner with us to validate and implement road infrastructure intelligence.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-500 uppercase mb-6 self-start">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Status: Engineering Prototype
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let&apos;s build better road intelligence.
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                We are currently seeking validation partners, institutional collaborators, and interested road authorities to pilot the InfraSense AI platform.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-8 bg-card border border-border rounded-2xl shadow-sm hover:border-accent/50 transition-colors">
                  <div className="p-4 bg-muted/50 rounded-xl border border-border/50">
                    <Mail className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Direct Email</div>
                    <a href="mailto:contact@infrasenseai.online" className="font-mono text-xl md:text-2xl hover:text-accent transition-colors">
                      contact@infrasenseai.online
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full"></div>
              
              <h2 className="text-2xl font-bold mb-8 relative z-10">Partnership Inquiry</h2>
              
              {/* Form UI Structure - Frontend only */}
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Name</label>
                    <input type="text" className="w-full p-4 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Organisation</label>
                    <input type="text" className="w-full p-4 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm" placeholder="PWD / Company" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Work Email</label>
                    <input type="email" className="w-full p-4 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Interest Area</label>
                    <select className="w-full p-4 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-sm text-foreground appearance-none">
                      <option>Pilot / Field Validation</option>
                      <option>Government / PWD</option>
                      <option>Infrastructure Partner</option>
                      <option>Research Collaboration</option>
                      <option>Investment / Incubation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-muted-foreground ml-1">Message</label>
                  <textarea rows={4} className="w-full p-4 bg-background border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all resize-none text-sm" placeholder="Tell us about your infrastructure goals..."></textarea>
                </div>

                <div className="pt-2">
                  <button type="button" className="w-full py-4 bg-accent text-accent-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-transform active:scale-[0.98]">
                    Submit Inquiry <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-muted-foreground mt-4 font-mono">
                    Form is currently in demo mode. Please use the direct email above.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
