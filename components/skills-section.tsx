"use client";

import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Jest",
    "React Testing Library",
    "Docker",
    "AWS",
    "Git",
    "GitHub Actions",
    "React Native",
    "Express.js",
    "REST APIs",
    "Webhooks",
    "TDD",
    "Clean Code",
    "SOLID",
    "Scrum",
    "Kanban",
    "Figma",
    "Vite.js",
    "Axios",
    "Date-fns",
    "Lucide React",
    "Shadcn UI",
    "Stripe API",
    "OAuth",
    "Clerk",
    "NextAuth.js",
    "Supabase",
  ];

  // Duplica as habilidades para um loop contínuo
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Habilidades & Tecnologias
          </h2>

          <div className="relative overflow-x-hidden">
            {/* Sobreposições de gradiente para efeito de desfoque */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-muted/50 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-muted/50 to-transparent z-20 pointer-events-none" />

            {/* Carrossel de habilidades */}
            <div className="flex space-x-8 animate-scroll px-32 z-0">
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill}-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-background/80 backdrop-blur-sm border border-orange-500/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-500/10"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(251, 146, 60, 0.2)",
                  }}
                >
                  <span className="text-sm font-medium whitespace-nowrap text-foreground/90 hover:text-orange-500 transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Informações adicionais */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-orange-500/10">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">1+</h3>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-orange-500/10">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">
                  14k+
                </h3>
                <p className="text-muted-foreground">Usuários Impactados</p>
              </div>
              <div className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-orange-500/10">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">40%</h3>
                <p className="text-muted-foreground">Redução de Bugs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
