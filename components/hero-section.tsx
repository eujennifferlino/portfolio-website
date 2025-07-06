"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { SocialLinks } from "@/components/social-links";

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/JENNIFFER-FERREIRA_FS.pdf";
    link.download = "JENNIFFER-FERREIRA_FS.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Fundo Animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-orange-500/10">
        {/* Esferas Flutuantes - Aprimoradas */}
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-orange-500/25 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 0.7, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-88 h-88 bg-orange-300/35 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Elementos Flutuantes Adicionais */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-600/20 rounded-full blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-orange-500/25 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Formas Geométricas - Aprimoradas */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-6 h-6 bg-orange-500/40 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-orange-400/50 rounded-full"
          animate={{
            y: [0, -50, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Elementos Geométricos Adicionais */}
        <motion.div
          className="absolute top-1/2 right-1/6 w-4 h-4 bg-orange-600/60 rounded-sm"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/6 w-5 h-5 bg-orange-500/45 rounded-full"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Linhas Animadas */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400/70 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Padrão de Grade Aprimorado */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Sobreposição de Grade Animada */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.15)_1px,transparent_1px)] bg-[size:80px_80px]"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Jenniffer Lino
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvedora Full Stack especializada em React, Node.js e
              tecnologias modernas, criando experiências digitais escaláveis e
              de alta qualidade.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={handleDownloadCV}
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar CV
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-orange-500/20 hover:bg-orange-500/10 bg-transparent"
              >
                <a href="#about">Saiba Mais</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
