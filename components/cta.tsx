import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 lg:p-16 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Ready to elevate your design?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-balance leading-relaxed">
            Join hundreds of growing teams who trust us with their design needs. Start your subscription today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="group">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
