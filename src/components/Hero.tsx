const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
              Innovation is <br />
              <span className="italic text-gradient">transforming tomorrow.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              We partner with visionary founders to build technology that shapes industries and creates lasting impact.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-primary text-background rounded-md hover:shadow-[var(--shadow-glow)] transition-all duration-300 uppercase tracking-wider text-sm font-medium"
              >
                View Portfolio
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-96 h-96">
              {/* Geometric Animation */}
              <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border-2 border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full shadow-[var(--shadow-glow)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
