import { Metadata } from "next";
import { companyData } from "@/content/company";
import { teamData } from "@/content/team";
import { Building2, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | InfraSense AI",
  description: "Built at the intersection of AI, engineering and infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Built at the intersection of AI, engineering and infrastructure.
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a team of engineers focused on solving systemic infrastructure challenges through scalable, multimodal platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12">The Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamData.map((member) => (
              <div key={member.name} className="p-8 border border-border bg-card rounded-2xl flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 shrink-0 rounded-full bg-muted flex items-center justify-center border border-border">
                  <User className="w-10 h-10 text-muted-foreground opacity-50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <div className="text-accent font-bold uppercase tracking-wider text-sm mb-3">{member.role}</div>
                  <div className="text-muted-foreground text-sm font-medium mb-4">{member.education}</div>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.focus.map((f) => (
                      <span key={f} className="px-2 py-1 bg-background border border-border text-xs font-mono rounded">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-background border border-border rounded-3xl text-center shadow-lg">
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
              
              <div className="flex-1 p-6 border-2 border-accent rounded-2xl bg-accent/5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Current Stage</h3>
                <div className="text-2xl font-black text-foreground mb-1">WORKING PROTOTYPE</div>
                <div className="text-sm font-medium text-muted-foreground">Engineering refinement phase</div>
              </div>
              
              <div className="flex-1 p-6 border-2 border-border border-dashed rounded-2xl opacity-70">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Next Stage</h3>
                <div className="text-2xl font-black text-foreground mb-1">FIELD VALIDATION</div>
                <div className="text-sm font-medium text-muted-foreground">Institutional pilot pending</div>
              </div>
              
            </div>

            <Building2 className="w-12 h-12 text-foreground mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl font-bold mb-4">Institutional Ecosystem</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              InfraSense AI is built within an academic engineering ecosystem, focusing on rigorous R&D before commercial scaling.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              <div className="p-5 bg-muted/50 border border-border/50 rounded-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Institution</div>
                <div className="font-semibold">{companyData.institution.name}</div>
              </div>
              <div className="p-5 bg-muted/50 border border-border/50 rounded-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Faculty Mentor</div>
                <div className="font-semibold">{companyData.institution.mentor}</div>
              </div>
              <div className="p-5 bg-muted/50 border border-border/50 rounded-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Incubation Forum</div>
                <div className="font-semibold text-muted-foreground">{companyData.institution.incubation}</div>
              </div>
              <div className="p-5 bg-muted/50 border border-border/50 rounded-xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Incubation Ref</div>
                <div className="font-mono text-sm text-muted-foreground">{companyData.institution.incubationNumber}</div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-border/50">
              <div className="text-[10px] text-muted-foreground/60 font-mono flex flex-wrap items-center justify-center gap-4">
                <span>Enterprise: SAQIB AHMAD BHAT (infrasenceai)</span>
                <span className="w-1 h-1 bg-border rounded-full"></span>
                <span>Udyam Reg: UDYAM-JK-04-0054839</span>
                <span className="w-1 h-1 bg-border rounded-full"></span>
                <span>Classification: Micro — 2026–27</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
