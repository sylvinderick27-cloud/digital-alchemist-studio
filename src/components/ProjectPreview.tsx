import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProjectPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    imageUrl: string;
  } | null;
}

export const ProjectPreview = ({ isOpen, onClose, project }: ProjectPreviewProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full max-w-5xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              className="absolute -top-12 right-0 md:top-4 md:right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Image */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-strong)" }}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto max-h-[70vh] object-contain bg-black"
              />
            </div>

            {/* Info */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white mt-2">
                {project.title}
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
