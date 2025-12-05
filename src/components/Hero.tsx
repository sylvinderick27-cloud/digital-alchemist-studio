import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import heroImg from "@/assets/img.png";

export const Hero = () => {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-6 pt-24 pb-12 bg-white">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-black/[0.02] to-transparent rounded-l-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-gradient-to-tr from-black/[0.03] to-transparent rounded-tr-[80px] pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-6 md:mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-px w-8 md:w-12 bg-black/30" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-black/50">
                3D Designer & Digital Twin Artist
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black tracking-[-0.04em] leading-[0.85] mb-6 md:mb-8 text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SYLVIN
              <br />
              <span className="text-black/20">DERICK</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-xl max-w-lg mb-10 md:mb-12 text-black/50 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting realistic real-time models and immersive digital twin experiences that blur the line between virtual and reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToWork}
                className="px-6 md:px-8 py-3 md:py-4 bg-black text-white font-bold text-sm md:text-base rounded-full inline-flex items-center justify-center gap-2"
                style={{ boxShadow: "var(--shadow-medium)" }}
                whileHover={{ scale: 1.02, boxShadow: "var(--shadow-strong)" }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </motion.button>
              <motion.a
                href="#"
                className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-black font-bold text-sm md:text-base rounded-full inline-flex items-center justify-center gap-2 ring-1 ring-black/20"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4 md:h-5 md:w-5" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img
                src={heroImg}
                alt="Sylvin Derick - 3D Artist"
                className="w-full h-auto max-h-[70vh] object-contain rounded-3xl"
                style={{ boxShadow: "var(--shadow-strong)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-black/10 rounded-[2rem] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.button
          onClick={scrollToWork}
          className="flex flex-col items-center gap-2 text-black/30 hover:text-black/60 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-bold uppercase tracking-wider">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};
