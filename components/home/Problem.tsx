import { AlertCircle, Clock, FileWarning, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <FileWarning className="w-6 h-6 text-foreground" />,
      title: "Manual Inspection",
      description: "Relies on infrequent, labor-intensive visual surveys that cover only a fraction of the network."
    },
    {
      icon: <Clock className="w-6 h-6 text-foreground" />,
      title: "Delayed Reporting",
      description: "Critical defects grow in severity between survey cycles, increasing eventual repair costs."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-foreground" />,
      title: "Fragmented Information",
      description: "Data lives in isolated reports or spreadsheets, lacking precise geospatial context."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-foreground" />,
      title: "Reactive Maintenance",
      description: "Authorities are forced to respond to complaints rather than prioritizing based on objective risk."
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Road condition is discovered late — and in fragments.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center border-t border-border pt-12">
          <p className="text-lg md:text-xl font-medium text-foreground text-balance">
            &quot;When maintenance starts with fragmented information, limited budgets are forced into reactive decisions.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
