"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Implementando TDD com Jest em Projetos React",
      summary:
        "Como aplicar Test-Driven Development para reduzir bugs em produção e melhorar a qualidade do código em aplicações React.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center",
      date: "2024-12-15",
      readTime: "8 min de leitura",
      tags: ["React", "TDD", "Jest", "Testes"],
      slug: "implementando-tdd-jest-react",
    },
    {
      id: 2,
      title: "Arquitetura Limpa no Frontend: Princípios SOLID",
      summary:
        "Explorando como aplicar os princípios SOLID e Clean Architecture em projetos frontend para maior escalabilidade.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center",
      date: "2024-12-10",
      readTime: "10 min de leitura",
      tags: ["Arquitetura", "Clean Code", "SOLID", "Frontend"],
      slug: "arquitetura-limpa-frontend-solid",
    },
    {
      id: 3,
      title: "Integração de APIs REST com React Hooks",
      summary:
        "Melhores práticas para consumir APIs REST em aplicações React usando hooks customizados e gerenciamento de estado.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
      date: "2024-12-05",
      readTime: "6 min de leitura",
      tags: ["React", "APIs", "Hooks", "JavaScript"],
      slug: "integracao-apis-rest-react-hooks",
    },
  ]

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Últimos Artigos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <CardTitle className="mb-3 line-clamp-2">{post.title}</CardTitle>

                    <CardDescription className="mb-4 line-clamp-3">{post.summary}</CardDescription>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="ghost" className="p-0 h-auto group/button">
                      <span className="flex items-center">
                        Ler Mais
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg">
              Ver Todos os Artigos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
