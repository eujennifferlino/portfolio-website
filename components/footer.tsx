"use client"

import { SocialLinks } from "@/components/social-links"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-2xl font-bold">
            <span className="text-foreground dark:text-white">Lino</span>
            <span className="text-orange-500">.</span>
          </div>

          <SocialLinks />

          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Jenniffer Lino Ferreira. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
