import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pen, Monitor, Puzzle } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Pen,
    title: "Brand Identity",
    description: "Create a memorable brand that stands out in the AI startup landscape.",
    tags: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
    image: "/orange-branded-box-mockup-product-packaging.jpg",
    imageAlt: "Brand Identity Mockup"
  },
  {
    icon: Monitor,
    title: "Web & Mobile Design",
    description: "User-centered designs that convert visitors into customers.",
    tags: ["UI/UX Design", "Responsive Design", "Prototyping", "User Testing"],
    image: "/mobile-app-design-mockup-on-green-palm-leaves.jpg",
    imageAlt: "Mobile App Design"
  },
  {
    icon: Puzzle,
    title: "No-Code Websites",
    description: "Launch fast with beautiful, functional websites built on modern platforms.",
    tags: ["Webflow Development", "Framer Sites", "CMS Setup", "SEO Optimization"],
    image: "/white-book-mockup-minimal-design.jpg",
    imageAlt: "Website Development"
  }
]

export function HowWeGrow() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight uppercase">
              How We Grow Your Business
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine strategic thinking with exceptional design to help AI startups scale faster and stand out in competitive markets.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={450}
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
