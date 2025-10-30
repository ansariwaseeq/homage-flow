const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <h2 className="text-5xl lg:text-6xl font-light">
              Building the <span className="italic text-primary">future</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a technology investment firm focused on partnering with exceptional entrepreneurs 
              who are building transformative companies across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "$2B+",
                label: "Assets Under Management",
              },
              {
                number: "50+",
                label: "Portfolio Companies",
              },
              {
                number: "15+",
                label: "Years of Experience",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]"
              >
                <div className="text-4xl font-light text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-12">
            <h3 className="text-3xl font-light mb-6">Our Focus</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Artificial Intelligence",
                "Healthcare Innovation",
                "Enterprise SaaS",
                "Cybersecurity",
                "Climate Tech",
                "Fintech",
              ].map((focus, index) => (
                <div
                  key={index}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {focus}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
