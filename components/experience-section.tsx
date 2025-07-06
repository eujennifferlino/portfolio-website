"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Desenvolvedora Full Stack",
      company: "REPERTÓRIO ENEM",
      location: "Campinas, SP",
      period: "03/2025 - Presente",
      description:
        "Desenvolvimento e manutenção de funcionalidades web e mobile utilizadas por mais de 14 mil usuários ativos. Aplicação de princípios SOLID e Clean Code para garantir escalabilidade.",
      achievements: [
        "Desenvolveu funcionalidades para mais de 14 mil usuários ativos",
        "Aplicou TDD com Jest, reduzindo falhas em produção",
        "Trabalhou com integração de APIs RESTful e testes unitários",
        "Colaborou em sprints semanais com metodologias ágeis",
      ],
      stack: "React, Node, React Native, PHP, Laravel, MySQL, Jest, AWS",
    },
    {
      id: 2,
      title: "Desenvolvedora Frontend Júnior",
      company: "KRESKO TECH (GUARDA DIGITAL)",
      location: "São Bernardo do Campo, SP",
      period: "07/2024 - 02/2025",
      description:
        "Responsável pela manutenção e evolução do frontend da aplicação, garantindo entregas dentro do prazo e aplicando princípios de arquitetura limpa.",
      achievements: [
        "Assumiu o frontend após a saída do único desenvolvedor sênior do time",
        "Solucionou mais de 20 tickets de correções e melhorias",
        "Aplicou princípios de arquitetura limpa e boas práticas",
        "Rediziu os bugs em 40% implementando testes unitários",
        "Implementou responsividade e acessibilidade",
      ],
      stack: "Next.js, TypeScript, Tailwind CSS, Jest, Clean Architecture",
    },
    {
      id: 3,
      title: "Desenvolvedora Frontend Voluntária",
      company: "CÓDIGO CERTO",
      location: "São Paulo, SP",
      period: "03/2024 - 07/2024",
      description:
        "Desenvolvimento de interfaces responsivas baseadas em protótipos de alta fidelidade, implementação de consumo de APIs REST e gerenciamento de estado.",
      achievements: [
        "Desenvolveu interfaces responsivas baseadas em Figma",
        "Implementou consumo de APIs REST com React Hooks",
        "Aplicou TypeScript para robustez no frontend",
        "Participou de cerimônias ágeis com Kanban",
      ],
      stack: "React, Tailwind CSS, TypeScript, Figma",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experiência Profissional
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-orange-500">
                          {experience.company}
                        </CardDescription>
                      </div>

                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Stack:</h4>
                      <p className="text-sm text-muted-foreground">
                        {experience.stack}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Principais Conquistas:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
