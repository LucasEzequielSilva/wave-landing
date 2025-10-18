"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-[80vh] max-h-[100vh] flex items-center border-b border-border relative">
      <div className="container mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Available For Projects
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">World-Class</span>
              <br />
              <span className="text-foreground">Design Partner</span>
              <br />
              <span className="text-muted-foreground">For AI Startups</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Fast, reliable, and scalable design solutions tailored for your growing startup.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-base font-medium"
              >
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 h-14 text-base font-medium"
              >
                Book Free Call
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-muted border-2 border-background overflow-hidden">
                  <Image
                    src="/professional-woman-portrait.png"
                    alt="Customer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-muted border-2 border-background overflow-hidden">
                  <Image
                    src="/professional-man-portrait.png"
                    alt="Customer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-muted border-2 border-background overflow-hidden">
                  <Image
                    src="/professional-person-portrait.png"
                    alt="Customer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-foreground border-2 border-background flex items-center justify-center">
                  <span className="text-background text-sm font-bold">50+</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground font-medium">Trusted By 50+ Businesses</p>
              </div>
            </div>
          </div>

          {/* Right Animated Carousel Grid with Framer Motion */}
          <div className="relative overflow-hidden h-[600px] w-full">
            {/* Gradient overlays for smooth transitions - only top and bottom */}
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/yellow-business-card-design-mockup.jpg"
                  alt="Card Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/red-typography-design-abstract-letters.jpg"
                  alt="Typography Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/white-book-mockup-minimal-design.jpg"
                  alt="Book Mockup"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/yellow-business-card-design-mockup.jpg"
                  alt="Card Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/red-typography-design-abstract-letters.jpg"
                  alt="Typography Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/mobile-app-design-mockup-on-green-palm-leaves.jpg"
                  alt="Mobile Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/orange-branded-box-mockup-product-packaging.jpg"
                  alt="Box Mockup"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/mobile-app-design-mockup-on-green-palm-leaves.jpg"
                  alt="Mobile Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/mobile-app-design-mockup-on-green-palm-leaves.jpg"
                  alt="Mobile Design"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/orange-branded-box-mockup-product-packaging.jpg"
                  alt="Box Mockup"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
