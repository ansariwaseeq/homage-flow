const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-5xl lg:text-6xl font-light">
              Let's <span className="italic text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a founder seeking partnership or want to learn more about our portfolio, 
              we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                label: "Email",
                value: "hello@venture.com",
                icon: "✉",
              },
              {
                label: "Location",
                value: "San Francisco, CA",
                icon: "📍",
              },
              {
                label: "Phone",
                value: "+1 (555) 123-4567",
                icon: "📞",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300"
              >
                <div className="text-3xl mb-3">{contact.icon}</div>
                <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                <div className="text-foreground">{contact.value}</div>
              </div>
            ))}
          </div>

          <footer className="border-t border-border pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-2xl font-light tracking-wider">VENTURE</div>
              <div className="flex gap-6">
                {["LinkedIn", "Twitter", "Medium"].map((social) => (
                  <button
                    key={social}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                  >
                    {social}
                  </button>
                ))}
              </div>
              <div className="text-muted-foreground text-sm">
                © 2025 Venture Capital. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
