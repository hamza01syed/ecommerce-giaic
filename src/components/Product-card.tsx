import Image from "next/image"
import { ShoppingCart } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  price: number
  image: string
  tag?: "new" | "sale"
}

export function ProductCard({ name, price, image, tag }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        {tag && (
          <Badge
            className={`absolute left-2 top-2 z-10 ${
              tag === "new" ? "bg-green-500" : "bg-orange-500"
            } text-white`}
          >
            {tag === "new" ? "New" : "Sale"}
          </Badge>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">${price}</p>
        </div>
        <Button size="icon" variant="ghost" className="h-8 w-8">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
    </div>
  )
}

