import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Work", href: "#work" },
        { label: "Skills", href: "#skills" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.a
                        href="#"
                        className="text-xl md:text-2xl font-black tracking-tighter text-white cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        SD
                    </motion.a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <a
                                    href={item.href}
                                    className="text-sm font-bold uppercase tracking-wider text-white cursor-pointer"
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                </a>

                                {/* Growing underline */}
                                <span
                                    className="
                                      pointer-events-none
                                      absolute left-0 -bottom-1
                                      h-[2px] w-full
                                      origin-left
                                      scale-x-0
                                      bg-white
                                      transition-transform duration-300
                                      group-hover:scale-x-100
                                    "
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-xl bg-white text-black"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    <motion.a
                                        href={item.href}
                                        className="text-3xl font-black text-white cursor-pointer"
                                        onClick={(e) => handleNavClick(e, item.href)}
                                    >
                                        {item.label}
                                    </motion.a>

                                    {/* Underline animation */}
                                    <motion.span
                                        className="absolute left-0 bottom-0 h-[3px] bg-white origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.25 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
