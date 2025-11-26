import { motion } from "framer-motion";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-32 px-6 bg-foreground text-background">
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
            <span className="text-accent">unreal.</span>
          </h2>

          <p className="text-xl text-background/70 mb-12 max-w-2xl mx-auto">
            Available for freelance projects, full-time opportunities, and
            collaborative ventures in 3D visualization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 border-2 border-background"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-lg px-8 py-6 border-2 border-background hover:bg-background hover:text-foreground text-background"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-lg px-8 py-6 border-2 border-background hover:bg-background hover:text-foreground text-background"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              ArtStation
            </Button>
          </div>

          <div className="mt-20 pt-12 border-t border-background/20">
            <p className="text-sm text-background/50 font-bold">
              © 2024 YOUR NAME — Digital Twin Specialist
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
