import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  size: string;
}

interface ProjectPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  projects: Project[];
  onNavigate: (project: Project) => void;
}

export const ProjectPreview = ({ isOpen, onClose, project, projects, onNavigate }: ProjectPreviewProps) => {
  if (!project) return null;

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projects.length - 1;

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasPrev) {
      onNavigate(projects[currentIndex - 1]);
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasNext) {
      onNavigate(projects[currentIndex + 1]);
    }
  };

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

          {/* Previous Button */}
          {hasPrev && (
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrev}
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </motion.button>
          )}

          {/* Next Button */}
          {hasNext && (
            <motion.button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </motion.button>
          )}

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
              <motion.img
                key={project.id}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto max-h-[70vh] object-contain bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
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
              <p className="text-white/40 text-sm mt-2">
                {currentIndex + 1} / {projects.length}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
