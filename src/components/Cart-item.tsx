'use client'

import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CartItemProps {
  id: number
  name: string
  image: string
  price: number
  size: string
  quantity: number
  variant: string
  onRemove: (id: number) => void
  onAddToWishlist: (id: number) => void
}

export function CartItem({
  id,
  name,
  image,
  price,
  size,
  quantity,
  variant,
  onRemove,
  onAddToWishlist,
}: CartItemProps) {
  return (
    <div className="flex gap-4 py-6 border-b">
      <div className="relative aspect-square h-24 w-24 min-w-[96px] overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="grid gap-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-muted-foreground">MRP: ${price}</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>{variant}</p>
            <div className="flex gap-4">
              <p>Size: {size}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onAddToWishlist(id)}
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(id)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove item</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

