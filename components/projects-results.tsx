import Image from "next/image"

const projects = [
  {
    image: "/yellow-business-card-design-mockup.jpg",
    alt: "Business Card Design"
  },
  {
    image: "/mobile-app-design-mockup-on-green-palm-leaves.jpg",
    alt: "Mobile App Design"
  },
  {
    image: "/red-typography-design-abstract-letters.jpg",
    alt: "Typography Design"
  },
  {
    image: "/orange-branded-box-mockup-product-packaging.jpg",
    alt: "Product Packaging"
  }
]

export function ProjectsResults() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Projects that delivered results.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project we deliver is designed to drive real business outcomes. Here are some examples of our recent work that made a measurable impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={450}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
