import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="approach" className="py-32 relative overflow-hidden" ref={ref}>
      {/* 3D Geometric Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {/* Rotating Hexagons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute border-2 border-primary/30"
            style={{
              width: 100 + i * 20,
              height: 100 + i * 20,
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 2) * 40}%`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Orbiting Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-3 h-3 bg-accent rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * 30 * Math.PI) / 180) * 200],
              y: [0, Math.sin((i * 30 * Math.PI) / 180) * 200],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* 3D Cube Grid */}
        <div className="absolute right-10 top-20">
          {[...Array(3)].map((_, row) =>
            [...Array(3)].map((_, col) => (
              <motion.div
                key={`cube-${row}-${col}`}
                className="absolute w-16 h-16 border border-primary/20"
                style={{
                  left: col * 70,
                  top: row * 70,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 10 + row + col,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-light">
              Our <span className="italic text-primary">Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We partner with exceptional founders who are building the infrastructure 
              for tomorrow's economy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-card border border-border rounded-lg p-10 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] cursor-pointer group"
              >
                <div className="space-y-4">
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 48 } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  />
                  <h3 className="text-2xl font-light group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-12 text-center relative overflow-hidden group"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at center, hsl(168 76% 42% / 0.1), transparent)",
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-light mb-4">
                Ready to build something extraordinary?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                We're always looking for exceptional founders with bold visions. 
                If you're building technology that matters, we'd love to hear from you.
              </p>
              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group/btn relative px-8 py-4 bg-primary text-background rounded-md overflow-hidden uppercase tracking-wider text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start a Conversation</span>
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
