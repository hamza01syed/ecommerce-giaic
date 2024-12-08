import Image from "next/image"
import Link from "next/link"
import { products } from "../Products-grid"



export function PopularProducts() {
  return (
    <section className=" max-w-[1321] mx-auto lg:py-12">
      <h2 className="text-2xl font-bold mb-8">Our Popular Products</h2>
      <div className="grid md:grid-cols-4 gap-6 ">
        {products.slice(12,15).map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className={`group ${product.id===13 ? "col-span-2":""}`}
          >
            <div className={`relative h-[375px] mb-3  bg-gray-100 rounded-lg overflow-hidden`}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium group-hover:underline">{product.name}</h3>
            <p className="text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

