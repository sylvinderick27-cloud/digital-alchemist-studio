import { motion } from "framer-motion";

export const DossierCard = () => {
  const skills = [
    { category: "3D Software", items: ["Blender", "Houdini", "Maya"] },
    { category: "Texturing", items: ["Substance Painter", "Mari"] },
    { category: "Scanning", items: ["RealityCapture", "Metashape"] },
    { category: "Game Engines", items: ["Unreal Engine", "Unity"] },
    { category: "Rendering", items: ["Cycles", "Arnold", "V-Ray"] },
  ];

  const traits = [
    "Stoic",
    "Detail-Driven",
    "Photoreal-Obsessed",
    "Pipeline-Minded",
    "Technical Perfectionist",
  ];

  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="border-4 border-foreground p-8 md:p-12 relative bg-background"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Dossier header */}
          <div className="flex justify-between items-start mb-12 pb-6 border-b-2 border-foreground">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="h-3 w-3 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Classified Personnel File
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black">
                FIELD SPECIALIST
              </h2>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-muted-foreground">
                FILE ID: DT-2024-001
              </div>
              <div className="text-xs font-bold text-accent">
                CLEARANCE: OMEGA
              </div>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills section */}
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="h-1 w-8 bg-accent" />
                TECHNICAL ARSENAL
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.category}>
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                      {skill.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 border border-foreground text-sm font-bold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personality traits */}
            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="h-1 w-8 bg-accent" />
                PERSONALITY PROFILE
              </h3>
              <div className="space-y-3 mb-8">
                {traits.map((trait, index) => (
                  <motion.div
                    key={trait}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="h-2 w-2 bg-accent" />
                    <span className="font-bold text-lg">{trait}</span>
                  </motion.div>
                ))}
              </div>

              {/* Avatar placeholder */}
              <div className="border-2 border-foreground p-4 mt-8">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs font-bold text-accent uppercase">
                    Subject Profile
                  </div>
                  <div className="text-sm font-bold mt-1">
                    3D Visualization Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stamp effect */}
          <motion.div
            className="absolute top-8 right-8 text-accent text-6xl font-black rotate-12 opacity-10"
            animate={{ rotate: [12, 15, 12] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            APPROVED
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
