import { motion } from "framer-motion";

export const About = () => {
  const process = [
    { step: "01", title: "Modeling", desc: "Precision topology and edge flow" },
    { step: "02", title: "Texturing", desc: "PBR materials and surface detail" },
    { step: "03", title: "Simulation", desc: "Physics-based motion and dynamics" },
    { step: "04", title: "Optimization", desc: "Performance-ready geometry" },
    { step: "05", title: "Render/Export", desc: "Final output for any pipeline" },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-huge font-black mb-12 leading-tight">
            I build the digital version
            <br />
            <span className="text-accent">before the real one exists.</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-8 mt-20">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-7xl font-black text-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.desc}
                </p>

                {/* Connecting line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-accent/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
