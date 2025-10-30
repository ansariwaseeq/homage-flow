import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      number: "001",
      title: "Innovation Fellowship",
      subtitle: "Fellowship",
      description:
        "Empowering exceptional entrepreneurs to build transformative companies from the ground up.",
    },
    {
      number: "002",
      title: "Engineering Excellence",
      subtitle: "Fellowship",
      description:
        "Supporting technical founders in creating breakthrough technologies that shape the future.",
    },
    {
      number: "003",
      title: "Founder Studio",
      subtitle: "Program",
      description:
        "Intensive program providing resources, mentorship, and capital to early-stage ventures.",
    },
  ];

  return (
    <section id="programs" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Heading */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              Compelling opportunities{" "}
              <span className="italic text-primary">for accomplished scientists</span>
            </h2>
          </motion.div>

          {/* Right: 3D Animation */}
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            {/* Multiple interconnected cubes */}
            {[
              { x: 0, y: 0, z: 0, delay: 0 },
              { x: 150, y: -50, z: 50, delay: 0.2 },
              { x: -150, y: 50, z: -50, delay: 0.4 },
              { x: 100, y: 100, z: 100, delay: 0.6 },
              { x: -100, y: -100, z: -100, delay: 0.8 },
            ].map((cube, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 border border-primary/30"
                style={{
                  width: "100px",
                  height: "100px",
                  transform: `translate(-50%, -50%) translateX(${cube.x}px) translateY(${cube.y}px) rotateX(60deg) rotateZ(45deg)`,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: [0, 360],
                  y: [cube.y, cube.y + 20, cube.y],
                }}
                transition={{
                  duration: 15 + index * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: cube.delay,
                }}
              >
                {/* Corner dots */}
                {[0, 1, 2, 3].map((corner) => (
                  <motion.div
                    key={corner}
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                    style={{
                      left: corner % 2 === 0 ? 0 : "100%",
                      top: corner < 2 ? 0 : "100%",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: corner * 0.3 + cube.delay,
                    }}
                  />
                ))}
              </motion.div>
            ))}

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="40%"
                y1="50%"
                x2="60%"
                y2="50%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 },
              }}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">
                    {program.number}
                  </span>
                  <h3 className="text-3xl font-light group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm italic text-muted-foreground">
                    {program.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="uppercase tracking-[0.2em] text-xs px-0 hover:bg-transparent hover:text-primary group/btn"
                >
                  Discover
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </div>

              {/* Decorative corner element */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
