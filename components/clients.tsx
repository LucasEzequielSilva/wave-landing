"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    rating: "4.9",
    quote: "Proactive, precise, and easy to work with—no hand-holding needed, just smooth collaboration from start to finish.",
    author: "Jared Kim",
    role: "Marketing Director",
    avatar: "/professional-man-portrait.png",
  },
  {
    rating: "5.0",
    quote: "Felt like an embedded team with zero friction; communication was clear, and revisions landed perfectly on the first go.",
    author: "Maya Collins",
    role: "Head Of Product",
    avatar: "/professional-woman-portrait.png",
  },
  {
    rating: "4.9",
    quote: "The quality and speed were unmatched. We submitted our request on Monday and had polished designs by Wednesday.",
    author: "Jesse Leigh",
    role: "CEO & Founder",
    avatar: "/professional-person-portrait.png",
  },
  {
    rating: "4.9",
    quote: "We've tried other design subscriptions — none compare to Formix. Professional, reliable, and seriously creative.",
    author: "Benjamin Daul",
    role: "Head Of Engineering",
    avatar: "/professional-man-portrait.png",
  },
  {
    rating: "5.0",
    quote: "Formix completely transformed the way we approach design. The turnaround time is insane and the output's always on-brand.",
    author: "Michael Joseph",
    role: "Head Of Content",
    avatar: "/professional-man-portrait.png",
  },
  {
    rating: "5.0",
    quote: "It felt like an in-house design team. Communication was seamless, and revisions were spot on from the first pass.",
    author: "Amy Louise",
    role: "Customer Success Manager",
    avatar: "/professional-woman-portrait.png",
  },
]

export function Clients() {
  return (
    <section id="clients" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-br from-blue-50/50 via-white to-purple-50/20">
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
              <span>// Clients //</span>
            </motion.div>
            <h2 className="text-[46px] font-extrabold tracking-tight uppercase leading-tight">
              Why teams choose to work with me.
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
              Discover how our design subscription helps innovative brands grow smarter and faster.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid 3x2 */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">{testimonial.rating}</span>
                  <svg className="w-4 h-4 fill-[#FF4405]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-600">Rating</span>
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">{testimonial.author}</p>
                    <p className="text-xs text-gray-600 truncate">
                      {testimonial.role}
                    </p>
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
