"use client"

import { Monitor, Palette, Megaphone, Code, Sparkles, Layout, Rocket, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Elevate your identity: sharp positioning, cohesive visuals, real impact.",
    features: [
      { name: "Art Direction", icon: Sparkles },
      { name: "Motion Identity", icon: Rocket },
      { name: "Logo Design", icon: Palette },
      { name: "Color Systems", icon: Layout },
    ],
    image: "/orange-branded-box-mockup-product-packaging.jpg",
  },
  {
    icon: Monitor,
    title: "Web & Mobile Design",
    description: "Launch MVP in days; refresh or rebrand your UI; lift retention with clear flows and micro-interactions.",
    features: [
      { name: "Clean & Modern UI", icon: Layout },
      { name: "Dashboards", icon: Monitor },
      { name: "Prototyping", icon: Sparkles },
      { name: "Design System", icon: TrendingUp },
    ],
    image: "/mobile-app-design-mockup-on-green-palm-leaves.jpg",
  },
]

export function Services() {
  const [activeCarousel, setActiveCarousel] = useState<number[]>([0, 0, 0, 0])

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB] text-white text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4405]" />
              <span>// Services //</span>
            </motion.div>
            <h2 className="text-[46px] font-black tracking-tighter uppercase leading-tight">
              How We Grow
              <br />
              Your Business
            </h2>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="flex items-end justify-end h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground max-w-md text-right">
              We combine strategy, speed, and skill to deliver exceptional design — every time.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Consistent Layout */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-2xl overflow-hidden p-2 "
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="grid lg:grid-cols-5 gap-2">
                {/* Content Side - Always Left */}
                <motion.div
                  className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center rounded-lg bg-white"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  {/* Icon Badge */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50 flex items-center justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2, type: "spring" }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-900 bg-white rounded-full px-3 py-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + idx * 0.1 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        <feature.icon className="w-4 h-4 flex-shrink-0" />
                        <span>{feature.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Carousel Dots */}
                  <div className="flex items-center gap-1.5 mt-6">
                    <div className="w-2 h-2 rounded-full bg-[#FF4405]"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  </div>
                </motion.div>

                {/* Image Side - Always Right */}
                <motion.div
                  className="lg:col-span-3 relative min-h-[400px] lg:min-h-[500px]"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />

                  {/* Carousel Dots on Image */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
