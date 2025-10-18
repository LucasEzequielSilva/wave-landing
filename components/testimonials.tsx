import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    quote: "Forris transformed our brand identity and helped us stand out in the competitive AI space. Their attention to detail is unmatched.",
    author: "Sarah Chen",
    role: "CEO, TechFlow AI",
    avatar: "/professional-woman-portrait.png"
  },
  {
    quote: "The speed and quality of their work is incredible. We went from concept to launch in just 2 weeks.",
    author: "Michael Rodriguez",
    role: "Founder, DataViz Pro",
    avatar: "/professional-man-portrait.png"
  },
  {
    quote: "Working with Forris feels like having an in-house design team. They understand our vision perfectly.",
    author: "Emily Watson",
    role: "CTO, NeuralNet Solutions",
    avatar: "/professional-person-portrait.png"
  },
  {
    quote: "Their no-code website development saved us months of work and thousands in development costs.",
    author: "David Kim",
    role: "Founder, AI Insights",
    avatar: "/professional-man-portrait.png"
  },
  {
    quote: "The design system they created for us is so comprehensive, our entire team can now maintain brand consistency.",
    author: "Lisa Thompson",
    role: "Head of Marketing, SmartBot",
    avatar: "/professional-woman-portrait.png"
  },
  {
    quote: "Forris doesn't just deliver designs, they deliver results. Our conversion rate increased by 40% after their redesign.",
    author: "Alex Johnson",
    role: "CEO, AutoML Platform",
    avatar: "/professional-person-portrait.png"
  }
]

export function Testimonials() {
  return (
    <section id="clients" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Why teams choose to work with us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what our clients say about working with Forris.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <blockquote className="text-base leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
