"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Genesy",
    category: "Branding",
    image: "/yellow-business-card-design-mockup.jpg",
    mockup: "yellow-paper"
  },
  {
    title: "Mobile App",
    category: "UI/UX",
    image: "/mobile-app-design-mockup-on-green-palm-leaves.jpg",
    mockup: "phone"
  },
  {
    title: "TechFlow",
    category: "Web Design",
    image: "/red-typography-design-abstract-letters.jpg",
    mockup: "abstract"
  },
  {
    title: "Smart Design",
    category: "Product",
    image: "/orange-branded-box-mockup-product-packaging.jpg",
    mockup: "phones"
  },
]

export function Projects() {
  return (
    <section id="work" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section - Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Badge and Title */}
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
              <span>// Work //</span>
            </motion.div>
            <h2 className="text-[46px] font-black tracking-tighter uppercase leading-tight">
              Projects that delivered results.
            </h2>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            className="flex items-end justify-end h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground max-w-md text-right">
              A look at some of the brands we've helped — and the outcomes we've delivered.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid 2x2 */}
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Normal State - Dark Background with Mockup */}
              <div className="absolute inset-0 bg-gray-800 group-hover:opacity-0 transition-opacity duration-500">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Mockup Content */}
                  {project.mockup === "yellow-paper" && (
                    <div className="relative">
                      <div className="w-48 h-32 bg-yellow-400 transform rotate-12 shadow-2xl">
                        <div className="absolute inset-2 bg-yellow-300 rounded-sm">
                          <div className="p-2 text-xs text-black space-y-1">
                            <div className="font-bold">SMART OBJECTS</div>
                            <div>CHANGE COLOR</div>
                            <div>ON/OFF TEXTURE</div>
                            <div>DOUBLE CLICK TO</div>
                            <div>PASTE DESIGN</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {project.mockup === "phone" && (
                    <div className="relative">
                      <div className="w-24 h-48 bg-white rounded-3xl shadow-2xl transform rotate-12">
                        <div className="absolute top-2 left-2 right-2 h-6 bg-black rounded-t-2xl"></div>
                        <div className="absolute top-8 left-2 right-2 bottom-2 bg-gray-100 rounded-b-2xl p-2">
                          <div className="text-xs text-gray-800 space-y-1">
                            <div>ADS</div>
                            <div>IN</div>
                            <div>RIES</div>
                            <div>ND AR A</div>
                            <div>ELS</div>
                            <div>IN</div>
                            <div>STOR</div>
                            <div>AND</div>
                            <div>REE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {project.mockup === "abstract" && (
                    <div className="relative">
                      <div className="w-32 h-32 bg-red-500 transform rotate-45 shadow-2xl">
                        <div className="absolute inset-4 bg-red-600 rounded-sm flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">T</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {project.mockup === "phones" && (
                    <div className="relative">
                      <div className="flex gap-2">
                        <div className="w-20 h-36 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl transform rotate-6">
                          <div className="absolute inset-2 bg-yellow-300 rounded-xl p-1">
                            <div className="text-xs text-black font-bold">TP16</div>
                          </div>
                        </div>
                        <div className="w-20 h-36 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl transform -rotate-6">
                          <div className="absolute inset-2 bg-yellow-300 rounded-xl p-1">
                            <div className="text-xs text-black font-bold">16 PRO</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover State - White Background with Project Info */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex-1"></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
