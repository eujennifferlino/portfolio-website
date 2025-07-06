"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Finance AI",
      description:
        "Plataforma de gestão financeira com integração de IA e pagamentos recorrentes. Sistema completo com autenticação, pagamentos via Stripe e webhooks.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Next.js",
        "Tailwind",
        "Shadcn",
        "PostgreSQL",
        "Docker",
        "Stripe",
        "Clerk",
      ],
      githubUrl: "https://github.com/eujennifferlino/finance-ai",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Formosus Barber",
      description:
        "Aplicação mobile first que permite escolher serviços e agendar horários na barbearia. Sistema completo com autenticação Google OAuth e gerenciamento de dados.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=250&fit=crop&crop=center",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Next.js",
        "Tailwind",
        "Shadcn",
        "PostgreSQL",
        "Prisma",
        "NextAuth.js",
        "Supabase",
      ],
      githubUrl: "https://github.com/eujennifferlino/formosus-barber",
      liveUrl: "https://formosus-barber.vercel.app/",
    },
    {
      id: 3,
      title: "Travel Planner",
      description:
        "Site desktop para montar planos de viagem com amigos e registrar atividades. Interface intuitiva com seleção de datas e integração com APIs REST.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&crop=center",
      technologies: [
        "TypeScript",
        "React",
        "Vite.js",
        "Node.js",
        "Tailwind",
        "Axios",
        "React Router",
        "Date Fns",
        "Lucide React",
      ],
      githubUrl: "https://github.com/eujennifferlino/travel-planner",
      liveUrl: "https://travel-planner-eight-nu.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projetos em Destaque</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-4">{project.description}</CardDescription>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver ${project.title} no GitHub`}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </a>
                      </Button>

                      {project.liveUrl !== "#" && (
                        <Button size="sm" asChild className="bg-orange-500 hover:bg-orange-600">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver ${project.title} ao vivo`}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
