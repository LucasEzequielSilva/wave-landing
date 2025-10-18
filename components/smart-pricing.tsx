"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Calendar, Users, Briefcase } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    icon: Calendar,
    title: "Subscription",
    description: "Access to our full suite of services",
    price: "Starting at $2,999/mo",
    features: [
      "Unlimited design requests",
      "Dedicated design partner",
      "2-3 day turnaround",
      "Priority support",
      "Brand guidelines included"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    icon: Users,
    title: "Design Partner",
    description: "Perfect for growing startups",
    price: "$2,999/mo",
    features: [
      "Unlimited requests",
      "Dedicated designer",
      "2-3 day delivery",
      "Brand consistency",
      "Monthly strategy calls"
    ],
    buttonText: "Book a Free Call",
    popular: true,
    developmentToggle: true
  },
  {
    icon: Briefcase,
    title: "Single Project",
    description: "One-time project pricing",
    price: "$5,000+",
    features: [
      "Fixed price",
      "Custom timeline",
      "Full project scope",
      "Dedicated team",
      "Post-launch support"
    ],
    buttonText: "Book a Free Call",
    popular: false,
    developmentToggle: true
  }
]

export function SmartPricing() {
  const [includeDevelopment, setIncludeDevelopment] = useState(false)

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Smart pricing. Remarkable design.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the plan that fits your startup's needs. All plans include unlimited revisions and our satisfaction guarantee.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-2 relative ${
                plan.popular 
                  ? 'border-accent bg-accent/5' 
                  : 'border-border hover:border-accent/50'
              } transition-colors`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="text-3xl font-bold text-accent mt-4">
                  {plan.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {plan.developmentToggle && (
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Development + Stack</span>
                    <Switch 
                      checked={includeDevelopment}
                      onCheckedChange={setIncludeDevelopment}
                    />
                  </div>
                )}

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                      : 'bg-foreground hover:bg-foreground/90 text-background'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
