import Image from "next/image"
import Link from "next/link"

interface Category {
  id: number
  name: string
  image: string
  description: string
}

const categories: Category[] = [
  {
    id: 1,
    name: "Wing Chair",
    image: "/images/T-chair1.png",
    description: "Modern comfort"
  },
  {
    id: 2,
    name: "Wooden Chair",
    image: "/images/T-chair2.png",
    description: "Classic design"
  },
  {
    id: 3,
    name: "Desk Chair",
    image: "/images/T-chair3.png",
    description: "Ergonomic style"
  }
]

export function TopCategories() {
  return (
    <section className="py-6 sm:py-8 max-w-[1321px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-50" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
              <h3 className="text-base sm:text-lg font-semibold">{category.name}</h3>
              <p className="text-xs sm:text-sm opacity-90">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

