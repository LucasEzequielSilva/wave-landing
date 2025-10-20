"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const statistics = [
  {
    number: "50+",
    description: "Digital projects delivered across all industries."
  },
  {
    number: "3X",
    description: "Our model cuts typical delivery timelines by two-thirds."
  },
  {
    number: "80k+",
    description: "Monthly visitors via SEO content hub"
  },
  {
    number: "100%",
    description: "Client satisfaction rate across paid users"
  }
]

const designTypes = [
  "Website Design",
  "Mobile App Design",
  "Framer Development",
  "Social Media Graphics",
  "Pitch Decks",
  "Branding",
  "Business Cards",
  "Logos",
  "Packaging",
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
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
              <span>// Why Us //</span>
            </motion.div>
            <h2 className="text-[46px] font-black tracking-tighter uppercase leading-tight">
              Proven results for every project.
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
              We combine strategy, speed, and skill to deliver exceptional design — every time.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid - Founder Card + Statistics */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Founder Profile Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-[4/5] relative">
              {/* Placeholder for founder image - you can replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold">RP</span>
                  </div>
                  <p className="text-sm text-gray-400">Founder Image</p>
                </div>
              </div>
              
              {/* Overlay with name and social icons */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">Robert Park</h3>
                    <p className="text-gray-300 text-sm">Founder Of Formix</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.div
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="border-0 bg-gray-100 h-full hover:bg-gray-50 hover:shadow-lg transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <motion.span
                          className="text-3xl font-bold text-gray-900"
                          initial={{ scale: 0.5, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + 0.1 * index, type: "spring" }}
                        >
                          {stat.number}
                        </motion.span>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <Card className="border-0 bg-gray-100 overflow-hidden mt-16">
          <CardContent className="p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {designTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {type}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
