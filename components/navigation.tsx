"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion"

const smoothScrollTo = (targetId: string) => {
  const element = document.getElementById(targetId)
  if (!element) return

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}

export function Navigation() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    smoothScrollTo(targetId)
  }

  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 z-50 max-w-7xl mx-auto"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl">Formix</span>
            </Link>
          </motion.div>

          {/* Floating Navigation Container */}
          <motion.div
            className="hidden md:flex items-center gap-8 bg-background rounded-full px-6 py-3 shadow-lg border border-border/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={(e) => handleNavClick(e, "why-us")}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Why Us
            </a>
            <a
              href="#benefits"
              onClick={(e) => handleNavClick(e, "benefits")}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Benefits
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "work")}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#clients"
              onClick={(e) => handleNavClick(e, "clients")}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Clients
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="text-sm font-medium hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              FAQs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full px-6 h-11 text-sm font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all">Book Free Call</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
