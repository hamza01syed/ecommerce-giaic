import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  image: string
  tag?: string
}

const products: Product[] = [
  {
    id: 1,
    name: "White Wood Chair",
    price: 25,
    image: "/images/f-chair1.png",
    tag: "New"
  },
  {
    id: 2,
    name: "Pink Accent Chair",
    price: 35,
    image: "/images/f-chair2.png",
    tag: "Sale"
  },
  {
    id: 3,
    name: "Modern Orange Chair",
    price: 29,
    image: "/images/f-chair3.png"
  },
  {
    id: 4,
    name: "Classic White Chair",
    price: 39,
    image: "/images/f-chair4.png"
  }
]

export function FeaturedProducts() {
    return (
      <section className="py-4 sm:py-6 lg:py-8 max-w-[1321px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group flex flex-col">
              <div className="relative aspect-square mb-2 sm:mb-3">
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                    {product.tag}
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-sm sm:text-base font-medium group-hover:underline">{product.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    );
  }
  
  