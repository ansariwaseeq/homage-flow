import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background with Parallax */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovation is <br />
              <motion.span
                className="italic text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                transforming tomorrow.
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              We partner with visionary founders to build technology that shapes industries and creates lasting impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-4 bg-primary text-background rounded-md overflow-hidden transition-all duration-300 uppercase tracking-wider text-sm font-medium"
              >
                <span className="relative z-10">View Portfolio</span>
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Geometric Animation */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              className="relative w-[500px] h-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Rotating Rings */}
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="absolute border border-primary/30 rounded-full"
                  style={{
                    inset: `${index * 60}px`,
                  }}
                  animate={{
                    rotate: index % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 20 + index * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Orbital Dots */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
                const angle = (index * 360) / 8;
                const radius = 200;
                return (
                  <motion.div
                    key={`dot-${index}`}
                    className="absolute w-3 h-3 bg-primary rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * radius - 6,
                      y: Math.sin((angle * Math.PI) / 180) * radius - 6,
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      },
                    }}
                  />
                );
              })}

              {/* Center Glow */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow" />
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
                  const angle = (index * 360) / 8;
                  const radius = 200;
                  const x = 250 + Math.cos((angle * Math.PI) / 180) * radius;
                  const y = 250 + Math.sin((angle * Math.PI) / 180) * radius;
                  return (
                    <motion.line
                      key={`line-${index}`}
                      x1="250"
                      y1="250"
                      x2={x}
                      y2={y}
                      stroke="hsl(168 76% 42% / 0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + index * 0.1,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
