"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE - Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>// Contact //</span>
            </motion.div>

            {/* Title */}
            <h2 className="text-[46px] font-black tracking-tighter leading-tight">
              Let's design, build,
              <br />
              <span className="text-muted-foreground">create together.</span>
            </h2>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Chat To Sales Card */}
              <motion.div
                className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Chat To Sales</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Contact Our Sales Group For Any Information.
                  </p>
                  <a href="mailto:sales@formix.com" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    sales@formix.com
                  </a>
                </div>
              </motion.div>

              {/* Call Us Card */}
              <motion.div
                className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get Immediate Help With Pressing Problems.
                  </p>
                  <a href="tel:+359887779880" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    +359 887 779 80
                  </a>
                </div>
              </motion.div>

              {/* Office Card - Full Width */}
              <motion.div
                className="md:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 space-y-4 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office:</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Reach Out To Us Any Time For Questions, Support, Or Inquiries.
                  </p>
                  <p className="text-sm font-medium">
                    100 Georgi S. Rakovski Street
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Description below cards */}
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Got questions or ready to start your design project? Let's bring your ideas to life!
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE - Contact Form (Dark) */}
          <motion.div
            className="bg-[#1E293B] rounded-3xl p-8 md:p-10 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-2">
              <h3 className="text-white text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-400 text-sm">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Phone & Website Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Website</label>
                  <input
                    type="url"
                    placeholder="Enter Your Website"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">More Info</label>
                <textarea
                  placeholder="Enter Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-white hover:bg-gray-100 text-foreground rounded-full h-14 text-base font-medium shadow-lg transition-all">
                  Send the message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
