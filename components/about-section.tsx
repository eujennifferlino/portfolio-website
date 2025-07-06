"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/JENNIFFER-FERREIRA_FS.pdf";
    link.download = "JENNIFFER-FERREIRA_FS.pdf";
    link.click();
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-4"
            >
              {/* Borda laranja grossa e visível */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-1 animate-border-glow">
                <div className="bg-background rounded-lg h-full w-full"></div>
              </div>

              <Card className="overflow-hidden relative z-10">
                <CardContent className="p-0">
                  <Image
                    src="/images/jenniffer-photo.jpg"
                    alt="Jenniffer Lino Ferreira"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>
                  Antes de saber o que era programação, eu só sabia que queria
                  transformar minha realidade.
                </strong>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Foi num clique despretensioso em um anúncio nas redes sociais
                que tudo começou — e desde então, nunca mais parei.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Comecei sem saber nem o que era um console.log, e hoje atuo como
                Desenvolvedora Full Stack, entregando funcionalidades completas
                em React e Node.js, tanto para web quanto mobile.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Já reduzi em 40% os bugs em produção ao implementar testes
                automatizados com TDD (Jest), e assumi a responsabilidade pelo
                frontend de um projeto inteiro quando menos esperava — e foi aí
                que percebi: eu dou conta.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                💡 Mais do que código, me envolvo com resolução de problemas
                reais, integração com APIs REST, comunicação com microsserviços
                e decisões que afetam diretamente a experiência do usuário.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Atuo com autonomia em squads ágeis, colaborando, aprendendo e
                crescendo junto.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, não programo só por trabalho — programo porque acredito no
                impacto que a tecnologia pode ter na vida das pessoas. A minha
                foi a primeira.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={handleDownloadCV}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Baixar CV
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="border-orange-500/20 hover:bg-orange-500/10 bg-transparent"
                >
                  <a href="#projects">Ver Projetos</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
