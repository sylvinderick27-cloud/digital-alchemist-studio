import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export const ProjectCard = ({
  title,
  category,
  imageUrl,
  featured = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      className={`group relative overflow-hidden border-2 border-foreground cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <ExternalLink className="h-12 w-12 text-accent-foreground" />
        </motion.div>

        {/* Glass blur on hover */}
        <motion.div
          className="absolute inset-0 glass-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
        <span className="text-xs font-bold text-accent uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
          {title}
        </h3>
      </div>

      {/* Border accent on hover */}
      <motion.div
        className="absolute inset-0 border-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
};
