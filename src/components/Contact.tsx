import { motion } from "framer-motion";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-huge font-black mb-8">
            Let's build something
            <br />
            <span className="opacity-50">unreal.</span>
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Available for freelance projects, full-time opportunities, and
            collaborative ventures in 3D visualization.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <motion.a
              href="mailto:your.email@example.com"
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full transition-all duration-300"
              style={{ boxShadow: "var(--shadow-medium)" }}
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-strong)" }}
              whileTap={{ scale: 0.95 }}
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-full transition-all duration-300"
              style={{ boxShadow: "var(--shadow-soft)" }}
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-medium)" }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://artstation.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-full transition-all duration-300"
              style={{ boxShadow: "var(--shadow-soft)" }}
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-medium)" }}
              whileTap={{ scale: 0.95 }}
            >
              ArtStation
            </motion.a>
          </div>

          <div className="mt-20 pt-12 border-t border-white/10">
            <p className="text-sm text-white/50 font-bold">
              © 2024 YOUR NAME — Digital Twin Specialist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
