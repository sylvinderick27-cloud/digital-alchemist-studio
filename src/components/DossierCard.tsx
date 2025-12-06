import { motion } from "framer-motion";

export const DossierCard = () => {
    const skills = [
        { category: "3D Software", items: ["Blender", "Maya", "3Ds max"] },
        { category: "Texturing", items: ["Substance Painter"] },
        { category: "Rendering", items: ["Cycles", "Eevee", "Unreal Renderer"] },
    ];

    const traits = [
        "Precision-Driven",
        "Industrial Accuracy Focused",
        "Real-Time Ready",
        "Pipeline-Efficient",
        "Reliable Execution",
    ];

    return (
        <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 md:mb-16 pb-6 border-b border-white/10">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="h-2 w-2 bg-white rounded-full" />
                                <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                                    Personnel File
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black">FIELD SPECIALIST</h2>
                        </div>
                        <div className="text-left md:text-right mt-4 md:mt-0 opacity-50">
                            <div className="text-xs font-bold">FILE ID: DT-2024-001</div>
                        </div>
                    </div>

                    {/* Main content - Single column layout with personality first */}
                    <div className="space-y-16">
                        {/* Personality traits - Now first */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-3">
                                <div className="h-1 w-6 bg-white rounded-full" />
                                PERSONALITY PROFILE
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {traits.map((trait, index) => (
                                    <motion.span
                                        key={trait}
                                        className="px-4 py-2 rounded-full bg-white/5 text-sm md:text-base font-bold"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        {trait}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Skills section */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-3">
                                <div className="h-1 w-6 bg-white rounded-full" />
                                TECHNICAL ARSENAL
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                                    >
                                        <div className="text-xs font-bold uppercase tracking-wider mb-3 opacity-50">
                                            {skill.category}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-3 py-1.5 rounded-full bg-white/10 text-sm font-medium"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
