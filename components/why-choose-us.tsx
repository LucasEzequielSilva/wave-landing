import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, Award, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "A dedicated team that treats your brand like their own.",
  },
  {
    icon: Zap,
    title: "Design Without Limits",
    description: "No limits, no hidden fees — just unlimited design requests delivered in a clear, focused workflow.",
  },
  {
    icon: Award,
    title: "100+ Brands Served",
    description: "Trusted by startups, creators, and growing teams worldwide.",
  },
  {
    icon: TrendingUp,
    title: "8 Years of Experience",
    description: "Design expertise you can rely on — from concept to delivery.",
  },
]

const designTypes = [
  "Website Design",
  "Mobile App Design",
  "Framer Development",
  "Social Media Graphics",
  "Pitch Decks",
  "Branding",
  "Business Cards",
  "Logos",
  "Packaging",
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Why choose us?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine strategy, speed, and skill to deliver exceptional design — every time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 bg-muted/30 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {designTypes.map((type, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-accent/50 transition-colors"
                >
                  {type}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
