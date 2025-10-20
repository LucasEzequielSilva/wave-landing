import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="p-2 relative">
      {/* Inner Footer Container - The actual footer with background and rounded corners */}
      <div className="bg-[#0A1628] text-white rounded-2xl p-12 relative overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-2xl font-bold text-white">
                World-Class Design Partner For Startups
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Fast, reliable, and scalable design solutions tailored for your growing startup.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-white mb-4">Navigation</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#why-us" className="hover:text-white transition-colors">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="hover:text-white transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#clients" className="hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-bold text-white mb-4">Socials</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    X/Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-white mb-4">Join 5K+ Readers</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Your Email"
                  className="bg-[#334155] border-[#475569] text-white placeholder:text-gray-400"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 shadow-lg shadow-blue-500/50 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#334155] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>©2025 Formix. Designed By Marso</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms Of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                Made in Framer
                <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-gray-900 text-xs font-bold">F</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
