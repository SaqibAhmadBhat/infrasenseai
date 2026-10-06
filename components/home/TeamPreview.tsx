import { teamData } from "@/content/team";
import { companyData } from "@/content/company";

export default function TeamPreview() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            The Team
          </h2>
          <p className="text-muted-foreground">
            Built by engineers focused on AI, hardware, and scalable platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
          {teamData.map((member) => (
            <div key={member.name} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-muted-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-accent font-semibold tracking-wider text-sm uppercase mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm font-medium mb-4">{member.education}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {member.focus.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-background border border-border rounded text-xs font-mono text-foreground/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-background rounded-2xl border border-border p-8 text-center">
          <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">
            Built within an engineering and incubation ecosystem.
          </p>
          <h4 className="text-xl font-semibold text-foreground mb-2">
            {companyData.institution.name}
          </h4>
          <p className="text-muted-foreground text-sm mb-6">
            Faculty Mentor: {companyData.institution.mentor}
          </p>
          <div className="inline-flex gap-4 text-xs font-mono text-muted-foreground">
            <span>College Incubation: {companyData.institution.incubation}</span>
            <span>Ref: {companyData.institution.incubationNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
