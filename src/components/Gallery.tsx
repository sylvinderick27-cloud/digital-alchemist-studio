import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectPreview } from "./ProjectPreview";

import image1 from "@/assets/project-animation.jpg";
import image2 from "@/assets/project-character.jpg";
import image3 from "@/assets/project-digital-twin.jpg";
import image4 from "@/assets/project-environment.jpg";
import image5 from "@/assets/project-scanner.jpg";
import image6 from "@/assets/project-weapon.jpg";

interface Project {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    size: string;
}

// const projects: Project[] = [
//     {
//         id: 1,
//         title: "Architectural Digital Twin",
//         category: "Digital Twin",
//         imageUrl: img1,
//         size: "large",
//     },
//     {
//         id: 2,
//         title: "Sci-Fi Weapon Asset",
//         category: "Hard Surface",
//         imageUrl: img2,
//         size: "small",
//     },
//     {
//         id: 3,
//         title: "Character Portrait",
//         category: "Characters",
//         imageUrl: img3,
//         size: "medium",
//     },
//     {
//         id: 4,
//         title: "Industrial Scanner",
//         category: "Digital Twin",
//         imageUrl: img4,
//         size: "small",
//     },
//     {
//         id: 5,
//         title: "Cyberpunk Environment",
//         category: "Environments",
//         imageUrl: img5,
//         size: "large",
//     },
//     {
//         id: 6,
//         title: "Mechanical Rig",
//         category: "Animation",
//         imageUrl: img6,
//         size: "medium",
//     },
//     {
//         id: 7,
//         title: "Futuristic Drone Asset",
//         category: "Hard Surface",
//         imageUrl: img7,
//         size: "small",
//     },
//     {
//         id: 8,
//         title: "Desert Outpost Environment",
//         category: "Environments",
//         imageUrl: img8,
//         size: "medium",
//     },
//     {
//         id: 9,
//         title: "Creature Bust",
//         category: "Characters",
//         imageUrl: img9,
//         size: "small",
//     },
//     {
//         id: 10,
//         title: "Sci-Fi Corridor",
//         category: "Environments",
//         imageUrl: img10,
//         size: "large",
//     },
//     {
//         id: 11,
//         title: "Robot Concept Model",
//         category: "Hard Surface",
//         imageUrl: img11,
//         size: "medium",
//     },
//     {
//         id: 12,
//         title: "Fantasy Character",
//         category: "Characters",
//         imageUrl: img12,
//         size: "medium",
//     },
//     {
//         id: 13,
//         title: "City Digital Twin",
//         category: "Digital Twin",
//         imageUrl: img13,
//         size: "large",
//     },
//     {
//         id: 14,
//         title: "Mech Suit",
//         category: "Hard Surface",
//         imageUrl: img14,
//         size: "small",
//     },
//     {
//         id: 15,
//         title: "Urban Scene Render",
//         category: "Environments",
//         imageUrl: img15,
//         size: "small",
//     },
//     {
//         id: 16,
//         title: "Engineering Component",
//         category: "Digital Twin",
//         imageUrl: img16,
//         size: "large",
//     },
// ];

const projects: Project[] = [
    {
        id: 1,
        title: "Architectural Digital Twin",
        category: "Digital Twin",
        imageUrl: image3,
        size: "large",
    },
    {
        id: 2,
        title: "Sci-Fi Weapon Asset",
        category: "Hard Surface",
        imageUrl: image6,
        size: "small",
    },
    {
        id: 3,
        title: "Character Portrait",
        category: "Characters",
        imageUrl: image2,
        size: "medium",
    },
    {
        id: 4,
        title: "Animation Reel",
        category: "Animation",
        imageUrl: image1,
        size: "medium",
    },
    {
        id: 5,
        title: "Environment Concept",
        category: "Environment",
        imageUrl: image4,
        size: "large",
    },
    {
        id: 6,
        title: "Object Scanner Setup",
        category: "Tech / Scanning",
        imageUrl: image5,
        size: "small",
    },
];

const INITIAL_COUNT = 4;

export const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
    const hasMore = visibleCount < projects.length;

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    };

    const visibleProjects = projects.slice(0, visibleCount);

    return (
        <section id="work" className="py-20 md:py-32 px-4 md:px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4 md:text-huge font-black mb-4">Project Gallery</h2>
                    <div className="h-1 md:h-2 w-24 md:w-40 bg-white rounded-full" />
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                    {visibleProjects.map((project, index) => {
                        const gridClass =
                            project.size === "large"
                                ? "col-span-2 row-span-2"
                                : project.size === "medium"
                                ? "col-span-2 md:col-span-1 row-span-2"
                                : "col-span-1 row-span-1";

                        return (
                            <motion.div
                                key={project.id}
                                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer ${gridClass}`}
                                style={{ boxShadow: "var(--shadow-medium)" }}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    y: -4,
                                    boxShadow: "var(--shadow-strong)",
                                }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <motion.img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Info overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                        <span className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <h3 className="text-sm md:text-xl font-bold text-white mt-1">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <motion.div
                        className="flex justify-center mt-12 md:mt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <button
                            onClick={loadMore}
                            className="px-8 md:px-10 py-3 md:py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:rounded-3xl text-sm md:text-base"
                        >
                            Load More
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Preview Modal */}
            <ProjectPreview
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
                projects={projects}
                onNavigate={setSelectedProject}
            />
        </section>
    );
};
