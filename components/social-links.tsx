"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/eujennifferlino",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jennifferlinof",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:jennifferdeveloper@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors bg-transparent"
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar perfil ${link.name}`}>
              {link.icon}
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
