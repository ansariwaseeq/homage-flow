const Approach = () => {
  const values = [
    {
      title: "Long-term Partnership",
      description: "We build lasting relationships with founders, supporting them through every stage of growth.",
    },
    {
      title: "Hands-on Support",
      description: "Our team provides strategic guidance, operational expertise, and network access.",
    },
    {
      title: "Sector Expertise",
      description: "Deep domain knowledge across technology, healthcare, and emerging industries.",
    },
    {
      title: "Global Network",
      description: "Connect with industry leaders, potential customers, and strategic partners worldwide.",
    },
  ];

  return (
    <section id="approach" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl lg:text-6xl font-light">
              Our <span className="italic text-primary">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with exceptional founders who are building the infrastructure 
              for tomorrow's economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-10 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
                  <h3 className="text-2xl font-light">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-light mb-4">
              Ready to build something extraordinary?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional founders with bold visions. 
              If you're building technology that matters, we'd love to hear from you.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-primary text-background rounded-md hover:shadow-[var(--shadow-glow)] transition-all duration-300 uppercase tracking-wider text-sm font-medium"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
