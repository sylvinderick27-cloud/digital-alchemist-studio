import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectPreview } from "./ProjectPreview";

interface Project {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    size: string;
}

// Dynamically import all images from the renders folder
const images = import.meta.glob('../assets/renders/*.{jpeg,jpg,png,webp}', { eager: true });

const generateProjects = (): Project[] => {
    const groups: Record<string, string[]> = {};

    // Group files by number (e.g. "1a.jpeg", "1b.jpeg" -> group "1")
    Object.keys(images).forEach((path) => {
        const filename = path.split('/').pop();
        if (!filename) return;

        // Match number at the start of the string
        const match = filename.match(/^(\d+)/);
        if (match) {
            const num = match[1];
            if (!groups[num]) {
                groups[num] = [];
            }
            groups[num].push(path);
        }
    });

    // Sort files within each group (to ensure a comes before b)
    const groupArray = Object.values(groups).map(group => {
        return group.sort((a, b) => {
            const nameA = a.split('/').pop() || '';
            const nameB = b.split('/').pop() || '';
            return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
        });
    });

    // Shuffle the groups using Fisher-Yates shuffle
    for (let i = groupArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [groupArray[i], groupArray[j]] = [groupArray[j], groupArray[i]];
    }

    // Flatten logic: 
    const flattenedPaths = groupArray.flat();

    let idCounter = 1;

    return flattenedPaths.map((path) => {
        const filename = path.split('/').pop() || '';
        // @ts-ignore - Vite glob import type
        const mod = images[path] as { default: string } | string;
        const imageUrl = typeof mod === 'object' ? mod.default : mod;

        // Pattern: Large (2x2), Small (1x1), Tall/Medium (1x2), Small (1x1)
        // This layout repeats every 4 items to create the bento grid look
        const pattern = ["large", "small", "medium", "medium", "large", "small"];
        const size = pattern[(idCounter - 1) % pattern.length];

        const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
        const title = nameWithoutExt.includes('-')
            ? nameWithoutExt.split('-').slice(1).join('-').trim()
            : nameWithoutExt;

        return {
            id: idCounter++,
            title: title,
            category: "Render",
            imageUrl: imageUrl,
            size: size,
        };
    });
};

const projects = generateProjects();

const INITIAL_COUNT = 4;

export const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
    const hasMore = visibleCount < projects.length;

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 8, projects.length));
    };

    const viewAll = () => {
        setVisibleCount(projects.length);
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
                                transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
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
                        className="flex justify-center gap-4 mt-12 md:mt-16"
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
                        <button
                            onClick={viewAll}
                            className="px-8 md:px-10 py-3 md:py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:rounded-3xl text-sm md:text-base"
                        >
                            View All
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
