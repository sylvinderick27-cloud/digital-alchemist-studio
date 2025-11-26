import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-black tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          YN
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {["Work", "About", "Skills", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button className="md:hidden p-2 hover:bg-accent hover:text-accent-foreground transition-colors border-2 border-foreground">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </motion.nav>
  );
};
