import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-xl">Formix</span>
          </Link>

          {/* Floating Navigation Container */}
          <div className="hidden md:flex items-center gap-8 bg-background rounded-full px-6 py-3 shadow-lg border border-border/50">
            <Link href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-accent transition-colors">
              Why Us
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-accent transition-colors">
              Benefits
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="#clients" className="text-sm font-medium hover:text-accent transition-colors">
              Clients
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </Link>
          </div>

          <Button className="bg-foreground hover:bg-foreground/90 text-background">Book Free Call</Button>
        </div>
      </div>
    </nav>
  )
}
