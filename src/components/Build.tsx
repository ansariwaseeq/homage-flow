import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Build = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="build" className="min-h-screen flex items-center relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Geometric Animation */}
          <motion.div
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {/* Nested Cubes Animation */}
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="absolute border border-primary/30"
                style={{
                  width: `${120 + index * 80}px`,
                  height: `${120 + index * 80}px`,
                  transform: "rotateX(60deg) rotateZ(45deg)",
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateZ: [45, 405],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 20 + index * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Create 3D perspective with connecting lines */}
                <div className="absolute w-full h-full">
                  <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" 
                    style={{ transform: "translateZ(-100px)" }} />
                  <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" 
                    style={{ transform: "translateZ(-100px)" }} />
                  <div className="absolute bottom-0 left-0 w-px h-32 bg-gradient-to-t from-primary/50 to-transparent" 
                    style={{ transform: "translateZ(-100px)" }} />
                  <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-primary/50 to-transparent" 
                    style={{ transform: "translateZ(-100px)" }} />
                </div>
              </motion.div>
            ))}

            {/* Corner accent dots */}
            {[
              { x: -40, y: -40 },
              { x: 40, y: -40 },
              { x: -40, y: 40 },
              { x: 40, y: 40 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{ left: "50%", top: "50%", marginLeft: pos.x, marginTop: pos.y }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Stats Display */}
            <motion.div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary">21+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Companies Built
                  </div>
                </motion.div>
                <div className="h-12 w-px bg-border" />
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary">2016</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Since Year
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom label */}
            <motion.div
              className="absolute bottom-0 left-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-primary" />
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  [vc Build]
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-light leading-tight">
                When the companies we want to back don't exist yet,{" "}
                <span className="italic text-primary">we build them.</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="group border-foreground/20 hover:border-primary uppercase tracking-[0.2em] text-sm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Build Program
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Build;
