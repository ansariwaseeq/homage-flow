import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* 3D Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-primary/20 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Floating spheres */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`sphere-${i}`}
            className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-6 text-center" variants={itemVariants}>
            <h2 className="text-5xl lg:text-6xl font-light">
              Building the <span className="italic text-primary">future</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a technology investment firm focused on partnering with exceptional entrepreneurs 
              who are building transformative companies across multiple industries.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
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
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] cursor-pointer relative overflow-hidden group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                <div className="relative z-10">
                <motion.div
                  className="text-4xl font-light text-primary mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-lg p-12 hover:border-primary/50 transition-all duration-500"
          >
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
                <motion.div
                  key={index}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  → {focus}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
