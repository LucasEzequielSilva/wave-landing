"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Plus, List, CheckCheck, Zap, Rocket, Phone } from "lucide-react"
import { motion } from "framer-motion"

const workflowSteps = [
  {
    icon: Plus,
    title: "Subscribe",
    description: "Pick a plan that fits your workflow"
  },
  {
    icon: List,
    title: "Request",
    description: "Submit tasks via your design portal"
  },
  {
    icon: CheckCheck,
    title: "Approve Or Revise",
    description: "Receive designs in 2-3 business days"
  }
]

const plans = [
  {
    name: "Design Retainer",
    icon: Zap,
    price: "$5K/Mo",
    description: "Great for founders who need fast, reliable design help.",
    features: [
      "∞ Unlimited Requests",
      "One Request At A Time",
      "Fixed Monthly Rate",
      "Async Communication",
      "Flexible Scope",
      "Pause Anytime"
    ],
    developmentPrice: 1000,
    highlighted: false,
  },
  {
    name: "Single Project",
    icon: Rocket,
    price: "$10K Start",
    description: "Bring your dream website to life in just days, not months.",
    features: [
      "Dedicated Team Of Experts",
      "End-To-End Web Development",
      "Fully Custom Timeline & Scope",
      "Async Communication",
      "Advanced SEO & Marketing",
      "Updates Every 48 Hours"
    ],
    developmentPrice: 1000,
    highlighted: true,
  },
]

export function Pricing() {
  const [developmentEnabled, setDevelopmentEnabled] = useState({
    retainer: false,
    project: true
  })

  const toggleDevelopment = (plan: 'retainer' | 'project') => {
    setDevelopmentEnabled(prev => ({
      ...prev,
      [plan]: !prev[plan]
    }))
  }

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
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
              <span>// Pricing //</span>
            </motion.div>
            <h2 className="text-[46px] font-black tracking-tighter uppercase leading-tight">
              Smart pricing.
              <br />
              <span className="text-muted-foreground">Remarkable design.</span>
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
              Pick your plan and start designing today. One flat fee. Unlimited design. Zero stress.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid - Workflow + Pricing Cards */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Workflow Section - Narrower */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ x: 4 }}
              >
                {/* Icon - NO circle background */}
                <step.icon className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Dots on the RIGHT */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="w-1.5 h-1.5 bg-[#FF4405] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#FF4405] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#FF4405] rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Cards - Wider */}
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    {/* Rounded SQUARE background - NOT circle */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.highlighted ? "bg-white/10" : "bg-gray-300"
                    }`}>
                      <plan.icon className={`w-6 h-6 ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>

                  <p className={`text-sm ${
                    plan.highlighted ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>

                  {/* Development Toggle */}
                  <div className="flex items-center justify-between py-4 border-t border-gray-300/20">
                    <span className={`text-sm font-medium ${
                      plan.highlighted ? "text-gray-300" : "text-gray-600"
                    }`}>
                      Development + ${plan.developmentPrice}
                    </span>
                    <motion.button
                      onClick={() => toggleDevelopment(index === 0 ? 'retainer' : 'project')}
                      className={`relative w-12 h-6 rounded-full transition-all ${
                        (index === 0 ? developmentEnabled.retainer : developmentEnabled.project)
                          ? "bg-[#2563EB] shadow-lg shadow-blue-500/50"
                          : plan.highlighted ? "bg-gray-600" : "bg-gray-400"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute top-1 w-4 h-4 rounded-full bg-white"
                        animate={{
                          x: (index === 0 ? developmentEnabled.retainer : developmentEnabled.project) ? 28 : 4
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </motion.button>
                  </div>

                  {/* Features - NO circle backgrounds on checks */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${
                          plan.highlighted ? "text-white" : "text-foreground"
                        }`} />
                        <span className={`text-sm leading-relaxed ${
                          plan.highlighted ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full h-12 text-base flex items-center justify-center gap-2 ${
                        plan.highlighted
                          ? "bg-white text-gray-900 hover:bg-gray-100"
                          : "bg-gray-900 text-white hover:bg-gray-800"
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      Book Free Call
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Worked with section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">Worked with:</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {["amara", "atica", "aven.", "{} CodeLab", "hexa", "ideaa"].map((company, index) => (
              <motion.div
                key={index}
                className="text-sm text-muted-foreground font-medium cursor-pointer hover:text-blue-600 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
