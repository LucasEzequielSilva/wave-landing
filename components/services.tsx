import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Palette, Megaphone, Code } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Monitor,
    title: "Web & UI Design",
    description: "Modern, conversion-focused interfaces for websites and apps.",
    features: ["Landing pages", "SaaS dashboard", "Marketing site", "Website redesign"],
  },
  {
    icon: Code,
    title: "Framer Development",
    description: "Perfect for portfolios, startups, and product launches.",
    features: ["Figma to Framer", "CMS setup", "Animation", "SEO optimization"],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Visual systems that make your brand memorable and cohesive.",
    features: ["Logo design", "Color palette", "Guidelines", "Social branding"],
  },
  {
    icon: Megaphone,
    title: "Marketing Graphics",
    description: "Quick, polished visuals for daily content, campaigns, and launches.",
    features: ["Social posts", "Ad creatives", "YouTube Thumbnails", "Email visuals"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-start justify-between mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
              <span>//</span>
              <span>Services</span>
              <span>//</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">What's Included</h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel
              whenever you need.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-muted rounded-2xl p-6 border border-border">
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Left Container - White Background */}
                <div className="bg-background rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-muted text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Right Container - Image Background */}
                <div className="bg-muted rounded-xl overflow-hidden">
                  <Image
                    src="/orange-branded-box-mockup-product-packaging.jpg"
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
