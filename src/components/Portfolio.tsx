const Portfolio = () => {
  const companies = [
    {
      name: "QuantumFlow",
      category: "AI & Machine Learning",
      description: "Next-generation AI infrastructure for enterprise",
    },
    {
      name: "MediSync",
      category: "Healthcare",
      description: "Transforming patient care with intelligent systems",
    },
    {
      name: "SecureNet",
      category: "Cybersecurity",
      description: "Advanced threat detection and prevention",
    },
    {
      name: "CloudScale",
      category: "Enterprise SaaS",
      description: "Scalable infrastructure for modern businesses",
    },
    {
      name: "GreenTech Solutions",
      category: "Climate Tech",
      description: "Sustainable technology for a better tomorrow",
    },
    {
      name: "PayStream",
      category: "Fintech",
      description: "Revolutionary payment processing platform",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl lg:text-6xl font-light">
              Portfolio <span className="italic text-primary">Companies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in visionary companies that are redefining their industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-[var(--shadow-card)] hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-background font-bold text-xl">
                      {company.name.charAt(0)}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-primary">
                      {company.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {company.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
