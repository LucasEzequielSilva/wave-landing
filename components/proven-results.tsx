import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const stats = [
  {
    number: "24+",
    description: "Digital projects delivered ACROSS 3 CONTINENTS"
  },
  {
    number: "1X",
    description: "Our average on-time delivery timeline is 1X (2-3 DAYS)"
  },
  {
    number: "38k+",
    description: "Monthly visitors via SEO (Organic Traffic)"
  },
  {
    number: "48%",
    description: "Cost reduction in development expenses"
  }
]

export function ProvenResults() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Proven results for every project
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our data-driven approach and proven methodologies ensure consistent results that drive real business growth for AI startups.
            </p>
          </div>
          
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl md:text-4xl font-bold text-accent">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
            <Image
              src="/professional-man-portrait.png"
              alt="Robert Hook - Founder & CEO"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Robert Hook</h3>
            <p className="text-lg text-muted-foreground">Founder & CEO</p>
            <p className="text-base leading-relaxed">
              "We've helped dozens of AI startups scale their design operations and achieve remarkable growth through strategic design partnerships."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
