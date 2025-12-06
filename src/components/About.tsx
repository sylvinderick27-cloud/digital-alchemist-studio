import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img from "@/assets/me-catroon.png";

export const About = () => {
    return (
        <section
            id="about"
            className="py-20 md:py-32 px-4 md:px-6 bg-black text-white overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="w-64 h-64 md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] rounded-3xl overflow-hidden mx-auto">
                        <img src={img} alt="Sylvin Derick" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-4xl md:text-6xl font-black leading-tight">
                        A bit <span className="text-white/40">about me</span>
                    </h2>

                    <p className="text-white/70 leading-relaxed text-base md:text-lg">
                        A <span className="font-semibold text-white">3D Designer</span> and{" "}
                        <span className="font-semibold text-white">Digital Twin Artist</span>{" "}
                        specializing in accurate, real-time industrial machine assets built from
                        verified dimensions and real-world specifications. Also creates optimized
                        props and environment assets for interactive and real-time experiences.
                    </p>

                    <p className="text-white/60 leading-relaxed text-base md:text-lg">
                        The workflow includes{" "}
                        <span className="font-semibold text-white">
                            modeling, rigging, constraints, animation,{" "}
                        </span>
                        and <span className="font-semibold text-white">optimized texturing</span>,
                        resulting in high-performance assets suitable for simulations, training, and
                        web-based deployment.
                    </p>

                    <p className="text-white/60 leading-relaxed text-base md:text-lg">
                        Focused on <span className="font-semibold text-white">precision</span>,{" "}
                        <span className="font-semibold text-white">efficiency</span>, and{" "}
                        <span className="font-semibold text-white">
                            production-ready optimization
                        </span>{" "}
                        to deliver scalable and reliable content.
                    </p>

                    <motion.a
                        href="#contact"
                        className="mt-4 inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full text-sm md:text-base shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ width: "fit-content" }}
                    >
                        Get in Touch
                        <ArrowRight className="h-4 w-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};
