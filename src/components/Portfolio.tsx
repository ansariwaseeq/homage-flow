import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="portfolio" className="py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-light">
              Portfolio <span className="italic text-primary">Companies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in visionary companies that are redefining their industries
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3 },
                }}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-[var(--shadow-card)] relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-background font-bold text-xl"
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {company.name.charAt(0)}
                    </motion.div>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
