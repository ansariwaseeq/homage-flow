import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companies = [
    {
      name: "QuantumFlow",
      category: "AI",
      description: "Next-generation AI infrastructure for enterprise",
      featured: true,
    },
    {
      name: "MediSync",
      category: "Healthcare",
      description: "Transforming patient care with intelligent systems",
      featured: true,
    },
    {
      name: "SecureNet",
      category: "Government & Defense",
      description: "Advanced threat detection and prevention",
      featured: true,
    },
    {
      name: "CloudScale",
      category: "IT Infrastructure",
      description: "Scalable infrastructure for modern businesses",
      featured: false,
    },
    {
      name: "BioGenix",
      category: "Life Sciences",
      description: "Revolutionary biotech solutions",
      featured: true,
    },
    {
      name: "PayStream",
      category: "Financial Services",
      description: "Next-gen payment processing platform",
      featured: true,
    },
    {
      name: "LogiTech",
      category: "Logistics",
      description: "Smart supply chain automation",
      featured: false,
    },
    {
      name: "DefenseCore",
      category: "Government & Defense",
      description: "Advanced defense technology systems",
      featured: false,
    },
    {
      name: "NeuralNet",
      category: "AI",
      description: "Machine learning infrastructure",
      featured: false,
    },
    {
      name: "HealthAI",
      category: "Healthcare",
      description: "AI-powered diagnostics platform",
      featured: false,
    },
    {
      name: "FinCore",
      category: "Financial Services",
      description: "Enterprise banking solutions",
      featured: false,
    },
    {
      name: "ManufactureX",
      category: "Manufacturing",
      description: "Industrial automation platform",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const featuredCompanies = companies.filter(c => c.featured);
  const allCompanies = companies;

  return (
    <section id="portfolio" className="py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 border border-primary/30 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-primary">Our Portfolio</span>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-light leading-tight">
              Companies are transforming{" "}
              <span className="italic text-primary">industries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Life Sciences. Healthcare. Manufacturing. Enterprise. Logistics. Defense.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-full hover:border-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="text-sm uppercase tracking-wider">View Portfolio</span>
              <span>→</span>
            </motion.button>
          </motion.div>

          {/* Core Investments - Featured Grid */}
          <div className="space-y-8">
            <motion.h3 
              className="text-2xl font-light text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Core Investments
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {featuredCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="group bg-card border border-border rounded-xl aspect-square flex items-center justify-center p-6 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-[var(--shadow-card)] relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <div className="relative z-10 text-center space-y-3">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-background font-bold text-3xl shadow-lg"
                      whileHover={{
                        rotate: [0, -5, 5, -5, 0],
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                    >
                      {company.name.charAt(0)}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
                        {company.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {company.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* View indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary text-xs"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    view →
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* All Portfolio Companies - Full Grid */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {allCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 },
                  }}
                  className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-[var(--shadow-card)] relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-start justify-between">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-primary/80 to-accent/80 rounded-lg flex items-center justify-center text-background font-bold text-xl"
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        {company.name.charAt(0)}
                      </motion.div>
                      <span className="text-xs uppercase tracking-wider text-primary/80">
                        {company.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light group-hover:text-primary transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {company.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
