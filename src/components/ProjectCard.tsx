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
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{
        boxShadow: "var(--shadow-medium)",
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "var(--shadow-strong)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] rounded-3xl group-hover:rounded-[3rem] transition-all duration-500">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
          <span className="text-xs font-bold text-white uppercase tracking-wider opacity-70">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
