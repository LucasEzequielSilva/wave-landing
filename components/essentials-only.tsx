import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Clock, Infinity, User, Star, Plus } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Predictable Pricing",
    description: "No hidden fees or surprise charges. Know exactly what you'll pay each month."
  },
  {
    icon: Clock,
    title: "Fast Turnarounds",
    description: "Get your designs delivered in 2-3 days, guaranteed. No waiting weeks for results."
  },
  {
    icon: Infinity,
    title: "Unlimited Requests",
    description: "Submit as many design requests as you need. No limits, no restrictions."
  },
  {
    icon: User,
    title: "Dedicated Design Partner",
    description: "Work with the same designer who understands your brand and vision."
  },
  {
    icon: Star,
    title: "Top Tier Quality",
    description: "Professional-grade designs that match the quality of top design agencies."
  },
  {
    icon: Plus,
    title: "Flexible Add-ons",
    description: "Need development, copywriting, or other services? We've got you covered."
  }
]

export function EssentialsOnly() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Essentials only. Results first.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on what matters most: delivering exceptional design work that drives real business results for your AI startup.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
