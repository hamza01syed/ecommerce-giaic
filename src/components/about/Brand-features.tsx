import { Clock, Users, PiggyBank, Recycle } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: Users,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon: PiggyBank,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: Recycle,
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable"
  }
]

export function BrandFeatures() {
  return (
    <section className=" max-w-[1321] mx-auto lg:py-12">
      <h2 className="text-2xl font-bold text-center mb-12">
        What Makes Our Brand Different
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start h-[224px] lg:w-[309px] content-center p-6 bg-muted rounded-lg"
          >
            <feature.icon className="h-6 w-6 text-[#007580] mb-4" />
            <h3 className="font-semibold text-[#007580] text-[20px] mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground text-[16px] text-[#007580]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

