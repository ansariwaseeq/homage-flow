import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="min-h-screen flex items-center relative overflow-hidden bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-light leading-tight">
                Our companies are transforming industries{" "}
                <span className="italic text-primary">and pioneering new ones</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Life Sciences. Healthcare. Manufacturing. Enterprise. Logistics. Defense.
              </p>
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
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Portfolio
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

          {/* Right: 3D Cube Network Animation */}
          <motion.div
            className="relative h-[500px] flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Cube Network Grid */}
            {[
              { x: -100, y: -100 },
              { x: 0, y: -100 },
              { x: 100, y: -100 },
              { x: -100, y: 0 },
              { x: 0, y: 0 },
              { x: 100, y: 0 },
              { x: -100, y: 100 },
              { x: 0, y: 100 },
              { x: 100, y: 100 },
            ].map((pos, index) => (
              <motion.div
                key={index}
                className="absolute border border-primary/30"
                style={{
                  width: "60px",
                  height: "60px",
                  left: "50%",
                  top: "50%",
                  marginLeft: pos.x - 30,
                  marginTop: pos.y - 30,
                  transform: "rotateX(60deg) rotateZ(45deg)",
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateZ: [45, 405],
                  scale: [1, 1.1, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8 + index * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.2,
                }}
              >
                {/* Corner nodes */}
                {[0, 1, 2, 3].map((corner) => (
                  <motion.div
                    key={corner}
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                    style={{
                      left: corner % 2 === 0 ? -2 : "calc(100% - 2px)",
                      top: corner < 2 ? -2 : "calc(100% - 2px)",
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: corner * 0.2 + index * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Connecting lines between cubes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {[
                { x1: "35%", y1: "35%", x2: "50%", y2: "35%" },
                { x1: "50%", y1: "35%", x2: "65%", y2: "35%" },
                { x1: "35%", y1: "50%", x2: "50%", y2: "50%" },
                { x1: "50%", y1: "50%", x2: "65%", y2: "50%" },
                { x1: "35%", y1: "65%", x2: "50%", y2: "65%" },
                { x1: "50%", y1: "65%", x2: "65%", y2: "65%" },
                { x1: "35%", y1: "35%", x2: "35%", y2: "50%" },
                { x1: "35%", y1: "50%", x2: "35%", y2: "65%" },
                { x1: "50%", y1: "35%", x2: "50%", y2: "50%" },
                { x1: "50%", y1: "50%", x2: "50%", y2: "65%" },
                { x1: "65%", y1: "35%", x2: "65%", y2: "50%" },
                { x1: "65%", y1: "50%", x2: "65%", y2: "65%" },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
