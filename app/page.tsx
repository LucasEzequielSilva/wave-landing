'use client'

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Benefits } from "@/components/benefits"
import { Projects } from "@/components/projects"
import { Pricing } from "@/components/pricing"
import { Clients } from "@/components/clients"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function Home() {
  useSmoothScroll()

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Benefits />
      <Projects />
      <Pricing />
      <Clients />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
