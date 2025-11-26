import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Floating glass element */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 glass-blur border border-accent/20 rotate-12"
        animate={{
          y: [0, -30, 0],
          rotate: [12, 15, 12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <motion.h1
              className="text-massive font-black tracking-tighter mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              YOUR NAME
            </motion.h1>
            <motion.div
              className="flex items-center gap-4 ml-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="h-1 w-24 bg-accent" />
              <p className="text-2xl md:text-4xl font-bold tracking-tight text-muted-foreground">
                3D Generalist & Digital Twin Artist
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mb-12 text-muted-foreground ml-2"
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
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 border-2 border-foreground"
            >
              View Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-lg px-8 py-6 border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
