import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center space-y-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-light">
              Let's <span className="italic text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're a founder seeking partnership or want to learn more about our portfolio, 
              we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                label: "Email",
                value: "hello@venture.com",
                icon: "✉",
              },
              {
                label: "Location",
                value: "San Francisco, CA",
                icon: "📍",
              },
              {
                label: "Phone",
                value: "+1 (555) 123-4567",
                icon: "📞",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  className="text-3xl mb-3"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {contact.icon}
                </motion.div>
                <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                <div className="text-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.footer
            className="border-t border-border pt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-2xl font-light tracking-wider">VENTURE</div>
              <div className="flex gap-6">
                {["LinkedIn", "Twitter", "Medium"].map((social, index) => (
                  <motion.button
                    key={social}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {social}
                  </motion.button>
                ))}
              </div>
              <div className="text-muted-foreground text-sm">
                © 2025 Venture Capital. All rights reserved.
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
