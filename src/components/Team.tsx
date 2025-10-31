import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "./ui/button";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="team"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-medium text-primary">Our Team</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our investment, portfolio support, fund operations, and administrative teams
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Team Card 1 */}
          <motion.div
            className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
            whileHover={{ y: -8, borderColor: "hsl(var(--primary) / 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Investment Team</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced investors identify and partner with exceptional founders building transformative technology companies across multiple sectors.
              </p>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group/btn"
              >
                <span>Learn More</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </div>
          </motion.div>

          {/* Team Card 2 */}
          <motion.div
            className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
            whileHover={{ y: -8, borderColor: "hsl(var(--primary) / 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Portfolio Support</h3>
              <p className="text-muted-foreground mb-6">
                Dedicated team providing strategic guidance, operational expertise, and resources to help portfolio companies scale and succeed.
              </p>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group/btn"
              >
                <span>Learn More</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="relative p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're looking for exceptional individuals to join our mission of building transformative technology companies
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              <span>View Open Positions</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team;
