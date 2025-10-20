"use client"

import { DollarSign, FastForward, Infinity, FileText, BarChart3, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: DollarSign,
    title: "Predictable Pricing",
    description: "Simple pricing structure that gives you unlimited design.",
  },
  {
    icon: FastForward,
    title: "Fast Turnarounds",
    description: "Quick and reliable results to keep your business moving forward.",
  },
  {
    icon: Infinity,
    title: "Unlimited Requests",
    description: "We'll handle them one by one — or two at a time with the Pro plan.",
  },
  {
    icon: FileText,
    title: "Dedicated Design Portal",
    description: "Manage tasks, revisions, and updates inside a clean, organized dashboard.",
  },
  {
    icon: BarChart3,
    title: "Top-Tier Quality",
    description: "Built with care by a team that treats your brand like their own.",
  },
  {
    icon: TrendingUp,
    title: "Problem Solving",
    description: "We solve your brand challenges with innovative solutions.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-blue-50/30 to-white">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>// Benefits //</span>
            </motion.div>
            <h2 className="text-[46px] font-black tracking-tighter uppercase leading-tight">
              Essentials only.
              <br />
              <span className="text-muted-foreground">Results first.</span>
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
              Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid 2x3 */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-6 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="space-y-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#FF4405] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
