"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What kind of design tasks can I request?",
    answer:
      "You can request any design work including web design, mobile apps, branding, marketing materials, social media graphics, presentations, and more. If it's design-related, we can help.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "Subscribe to a plan and submit unlimited design requests. We'll work on them one by one (or two at a time with Pro) and deliver high-quality work. Pause or cancel anytime.",
  },
  {
    question: "What's the turnaround time?",
    answer:
      "Most requests are completed within 24-48 hours. Complex projects may take longer, but we'll always keep you updated on progress and timelines.",
  },
  {
    question: "Can I pause my subscription?",
    answer:
      "Yes! You can pause your subscription at any time and resume when you need us again. Your remaining time will be waiting for you when you return.",
  },
  {
    question: "What if I'm not satisfied with the design?",
    answer:
      "We offer unlimited revisions until you're 100% satisfied. Your happiness is our priority, and we'll work with you until we get it right.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Everything you need to know about our design subscription service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border-2 rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
