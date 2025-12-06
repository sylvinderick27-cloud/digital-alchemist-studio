import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CopyCheck } from "lucide-react";

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("sylvinderick27@gmail.com");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-white/50" />
                        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/50">
                            Get in Touch
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8">
                        Let's Create
                        <br />
                        <span className="text-white/30">Together</span>
                    </h2>

                    <p className="text-base md:text-lg text-white/50 mb-10 md:mb-12 max-w-md mx-auto">
                        Have a project in mind? I'd love to hear about it. Let's discuss how we can
                        bring your vision to life.
                    </p>

                    <motion.button
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-white text-black font-bold rounded-full text-sm md:text-base"
                        style={{ boxShadow: "var(--shadow-medium)" }}
                        whileHover={{ scale: 1.02, boxShadow: "var(--shadow-strong)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {copied ? (
                            <>
                                Copied to Clipboard
                                <CopyCheck className="h-4 w-4 md:h-5 md:w-5" />
                            </>
                        ) : (
                            <>
                                Start a Conversation
                                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                            </>
                        )}
                    </motion.button>
                </motion.div>

                {/* Footer */}
                <motion.div
                    className="mt-20 md:mt-32 pt-8 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs md:text-sm text-white/30">
                        © 2024 Sylvin Derick. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
