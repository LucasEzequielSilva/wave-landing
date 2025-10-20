"use client"

import { useState } from "react"
import { Minus, Plus, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "How Does The Subscription Model Work?",
    answer:
      "Pay a fixed monthly fee for unlimited design requests. We work on them one by one (or two at a time with Pro). No hourly billing, no contracts — cancel anytime.",
  },
  {
    question: "What Kind Of Design Tasks Can I Request?",
    answer:
      "Web design, mobile apps, branding, marketing materials, social media graphics, presentations, and more. If it's design-related, we can help.",
  },
  {
    question: "How Fast Will I Receive My Designs?",
    answer:
      "Most requests are completed within 24-48 hours. Complex projects may take longer, but we'll keep you updated on progress.",
  },
  {
    question: "What Tools Do You Use To Manage The Work?",
    answer:
      "We use a dedicated design portal for submitting requests, tracking progress, and managing revisions. Clean, organized, and built for seamless collaboration.",
  },
  {
    question: "Is There A Limit To How Many Requests I Can Make?",
    answer:
      "No limits! Submit unlimited design requests. We work on them one by one (or two at a time with Pro) and deliver consistently high-quality work.",
  },
  {
    question: "Can I Cancel Or Pause Anytime?",
    answer:
      "Yes! Pause your subscription anytime and resume when you need us. Your remaining time will be waiting for you when you return.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info and Contact Card */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB] text-white text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="w-2 h-2 rounded-full bg-[#FF4405]" />
                <span>// FAQs //</span>
              </motion.div>
              <h2 className="text-[46px] font-extrabold tracking-tight uppercase leading-tight mb-6">
                Questions & answers.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Everything you need to know about our design subscription service.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-4 max-w-xs">
                    Have more questions? Book a free discovery call
                  </p>
                  <div className="flex items-center gap-4">
                    <Button className="bg-gray-900 text-white hover:bg-gray-800">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Free Call
                    </Button>
                    <span className="text-[#2563EB] text-sm">Or, Email Me</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-lg text-gray-900 pr-8 max-w-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="px-6 pb-5"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600 leading-relaxed max-w-lg">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
