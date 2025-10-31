import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const newsItems = [
    {
      category: "News Post",
      date: "March 15, 2025",
      title: "Leading the Future of Enterprise Technology",
      description: "Announcing our strategic partnership to accelerate innovation across cloud infrastructure and AI-powered enterprise solutions.",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      category: "Insight",
      date: "March 8, 2025",
      title: "From Innovation to Impact: Building Tomorrow's Leaders",
      description: "Exploring how we identify and nurture exceptional talent through our fellowship programs and mentorship initiatives.",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      category: "Analysis",
      date: "March 1, 2025",
      title: "The Future of Autonomous Systems",
      description: "A deep dive into robotics, AI autonomy, and the companies building the infrastructure for an intelligent automated future.",
      gradient: "from-orange-500/20 to-red-500/20",
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
      id="news"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <motion.div
            className="inline-block px-4 py-2 mb-6 border border-primary/30 rounded-full"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
          >
            <span className="text-sm font-medium text-primary">Latest Updates</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            In Other News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Insights, analysis, and updates from our team and portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              custom={index}
            >
              <Card className="group h-full relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated top border */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection("contact")}
                    className="group/btn w-full justify-between"
                  >
                    <span>Read More</span>
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </CardContent>

                {/* Corner decoration */}
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Resources Categories */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-8 text-center">Discover More</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Posts", count: "100+" },
              { title: "Whitepapers", count: "15+" },
              { title: "Podcasts", count: "25+" },
              { title: "Videos", count: "50+" },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="group relative p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-center cursor-pointer overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  borderColor: "hsl(var(--primary) / 0.5)",
                  backgroundColor: "hsl(var(--card) / 0.8)"
                }}
                transition={{ duration: 0.3 }}
                onClick={() => scrollToSection("contact")}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <motion.div
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {category.count}
                  </motion.div>
                  <div className="text-lg font-semibold mb-4">{category.title}</div>
                  <motion.div
                    className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    View →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default News;
