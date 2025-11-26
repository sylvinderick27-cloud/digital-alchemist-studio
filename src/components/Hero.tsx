import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 bg-white">
       <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 glass-blur rounded-[4rem] border border-black/10"
        animate={{
          y: [0, -30, 0],
          rotate: [12, 15, 12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ boxShadow: "var(--shadow-soft)" }}
      />
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <motion.h1
              className="text-massive font-black tracking-tighter mb-2 text-black"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              SYLVIN DERICK
            </motion.h1>
            <motion.div
              className="flex items-center gap-4 ml-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="h-1 w-24 bg-black rounded-full" />
              <p className="text-2xl md:text-4xl font-bold tracking-tight text-black/60">
                3D Generalist & Digital Twin Artist
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mb-12 text-black/60 ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Crafting photorealistic digital twins and cinematic Blender assets for
            next-generation experiences. From hard-surface to organic, from scan to
            final render.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 ml-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#work"
              className="px-8 py-4 bg-black text-white font-bold text-lg rounded-full inline-flex items-center gap-2"
              style={{ boxShadow: "var(--shadow-medium)" }}
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-strong)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full inline-flex items-center gap-2 ring-2 ring-black ring-inset"
              style={{ boxShadow: "var(--shadow-soft)" }}
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-medium)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/5 to-transparent" />
    </section>
  );
};
