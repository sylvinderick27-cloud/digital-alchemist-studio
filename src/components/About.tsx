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
    <section className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Large statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -top-20 -left-20 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none leading-none">
            &
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            I build the digital
            <br />
            <span className="text-white/30">before the real</span>
            <br />
            exists.
          </h2>
        </motion.div>

        {/* Process - Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm font-bold text-white/40 tracking-widest mb-12">
            THE PROCESS
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="group relative py-8 md:py-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Vertical line connector for mobile */}
                {index < process.length - 1 && (
                  <div className="md:hidden absolute left-8 top-24 w-px h-full bg-white/10" />
                )}
                
                {/* Horizontal line connector for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-16 right-0 h-px bg-white/10" />
                )}
                
                <div className="relative z-10 flex md:flex-col items-start gap-6 md:gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold text-white/60 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-1 group-hover:text-white/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/40 font-medium max-w-[180px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats or highlights */}
        <motion.div
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Dedicated Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-sm text-white/40 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
