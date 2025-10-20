"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen border-b border-border relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 overflow-hidden">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Floating orb effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 h-full overflow-visible relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full min-h-screen">
          
          {/* Left Content - CENTRADO VERTICALMENTE */}
          <div className="flex items-center justify-center h-full min-h-screen overflow-visible">
            <div className="space-y-8 w-full">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#2563EB]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available For Projects
              </motion.div>

              {/* Heading - LOCKED SIZE: text-[70px] */}
              <h1 className="text-[70px] font-black tracking-tighter uppercase leading-tight">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  World Class
                </motion.span>
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Design Partner
                </motion.span>
                <motion.span
                  className="text-muted-foreground block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  For Startups
                </motion.span>
              </h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Fast, reliable, and scalable design solutions tailored for your growing startup.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all"
                  >
                    View Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-14 text-base font-medium shadow-lg"
                  >
                    Book Free Call
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                className="flex items-center pt-4 -space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-lg bg-muted border-2 border-background overflow-hidden -rotate-10">
                    <Image
                      src="/professional-woman-portrait.png"
                      alt="Customer"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-muted border-2 border-background overflow-hidden rotate-10">
                    <Image
                      src="/professional-man-portrait.png"
                      alt="Customer"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"

                    />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-muted border-2 border-background overflow-hidden -rotate-10">
                    <Image
                      src="/professional-person-portrait.png"
                      alt="Customer"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center rotate-10">
                    <span className="text-background text-sm font-bold">50+</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-[#FF4405]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Trusted By 50+ Businesses</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Animated Carousel Grid - CON EFECTO 3D */}
          <div
            className="relative overflow-hidden h-full w-full"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Gradient overlays OUTSIDE 3D transform - stay flat */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            {/* Wrapper con transform 3D - ONLY carousel columns affected */}
            <div
              className="w-full h-full relative"
              style={{
                transform: 'perspective(1200px) rotateY(-8deg) scale(0.98)',
                transformOrigin: 'center center'
              }}
            >

            {/* Column 1 - Moving Up */}
            <motion.div 
              className="absolute left-0 top-0 w-[calc(50%-16px)] flex flex-col gap-4"
              animate={{ y: [0, -300] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/yellow-business-card-design-mockup.jpg"
                  alt="Card Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/red-typography-design-abstract-letters.jpg"
                  alt="Typography Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/white-book-mockup-minimal-design.jpg"
                  alt="Book Mockup"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/yellow-business-card-design-mockup.jpg"
                  alt="Card Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/red-typography-design-abstract-letters.jpg"
                  alt="Typography Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
            </motion.div>

            {/* Column 2 - Moving Down (Inverted) */}
            <motion.div 
              className="absolute top-0 right-0 w-[calc(50%-16px)] flex flex-col gap-4"
              animate={{ y: [-300, 0] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/mobile-app-design-mockup-on-green-palm-leaves.jpg"
                  alt="Mobile Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/orange-branded-box-mockup-product-packaging.jpg"
                  alt="Box Mockup"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/mobile-app-design-mockup-on-green-palm-leaves.jpg"
                  alt="Mobile Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/mobile-app-design-mockup-on-green-palm-leaves.jpg"
                  alt="Mobile Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 mix-blend-multiply z-10" />
                <Image
                  src="/orange-branded-box-mockup-product-packaging.jpg"
                  alt="Box Mockup"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 z-20" />
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}