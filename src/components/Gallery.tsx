import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import digitalTwinImg from "@/assets/project-digital-twin.jpg";
import weaponImg from "@/assets/project-weapon.jpg";
import characterImg from "@/assets/project-character.jpg";
import scannerImg from "@/assets/project-scanner.jpg";
import environmentImg from "@/assets/project-environment.jpg";
import animationImg from "@/assets/project-animation.jpg";

const categories = ["All", "Digital Twin", "Hard Surface", "Characters", "Environments", "Animation"];

const projects = [
  {
    id: 1,
    title: "Architectural Digital Twin",
    category: "Digital Twin",
    imageUrl: digitalTwinImg,
    featured: true,
  },
  {
    id: 2,
    title: "Sci-Fi Weapon Asset",
    category: "Hard Surface",
    imageUrl: weaponImg,
  },
  {
    id: 3,
    title: "Character Portrait",
    category: "Characters",
    imageUrl: characterImg,
  },
  {
    id: 4,
    title: "Industrial Scanner",
    category: "Digital Twin",
    imageUrl: scannerImg,
  },
  {
    id: 5,
    title: "Cyberpunk Environment",
    category: "Environments",
    imageUrl: environmentImg,
    featured: true,
  },
  {
    id: 6,
    title: "Mechanical Rig",
    category: "Animation",
    imageUrl: animationImg,
  },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-huge font-black mb-4">
            Digital Craft in Motion.
          </h2>
          <div className="h-2 w-40 bg-accent" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-bold text-sm uppercase tracking-wider border-2 transition-all ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
