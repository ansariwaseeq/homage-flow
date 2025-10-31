import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Fellowships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const fellowships = [
    {
      id: "001",
      title: "Investment Fellowship",
      description: "Join our investment team to work alongside experienced investors, analyze cutting-edge technologies, and help identify the next generation of transformative companies.",
      duration: "12 months",
    },
    {
      id: "002",
      title: "Engineering Fellowship",
      description: "Work directly with our portfolio companies on challenging technical problems, from infrastructure to AI, while being part of an exceptional peer group of rising technologists.",
      duration: "6-12 months",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="fellowships"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden bg-muted/30"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 right-1/4 w-2 h-2 bg-primary rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-2 h-2 bg-accent rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block px-4 py-2 mb-6 border border-primary/30 rounded-full"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
          >
            <span className="text-sm font-medium text-primary">Fellowships</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The most compelling industry opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For the most accomplished rising technologists. Become a contributor to our portfolio companies and part of an exceptional peer group.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {fellowships.map((fellowship, index) => (
            <motion.div
              key={fellowship.id}
              variants={itemVariants}
              custom={index}
            >
              <Card className="group h-full relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <motion.span
                      className="text-6xl font-bold text-primary/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 }}
                    >
                      {fellowship.id}
                    </motion.span>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {fellowship.duration}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {fellowship.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {fellowship.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection("contact")}
                    className="group/btn w-full justify-between"
                  >
                    <span>Discover Program</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Fellows Placed" },
            { number: "25+", label: "Portfolio Companies" },
            { number: "95%", label: "Full-Time Conversion" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
              whileHover={{ 
                y: -5, 
                borderColor: "hsl(var(--primary) / 0.5)",
                backgroundColor: "hsl(var(--card) / 0.8)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Fellowships;
