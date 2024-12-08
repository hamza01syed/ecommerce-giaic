'use client'

import { useState } from "react"
import { CartItem } from "@/components/Cart-item"
import { CartSummary } from "@/components/Cart-summary"
import { useToast } from "@/hooks/use-toast"
// import { useToast } from "@/components/ui/use-toast"

// This would typically come from your cart state management
const initialItems = [
  {
    id: 1,
    name: "Library Stool Chair",
    image: "/images/20.png",
    price: 99,
    size: "L",
    quantity: 1,
    variant: "Ashen Slate/Cobalt Bliss"
  },
  {
    id: 2,
    name: "Library Stool Chair",
    image: "/images/02.png",
    price: 99,
    size: "L",
    quantity: 1,
    variant: "Ashen Slate/Cobalt Bliss"
  }
]

export default function CartPage() {
  const [items, setItems] = useState(initialItems)
  const { toast } = useToast()

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: "The item has been added to your wishlist.",
    })
  }

  return (
    <div className="mx-auto max-w-[1321px] py-8">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h1 className="text-2xl font-bold mb-4">Bag</h1>
          {items.length > 0 ? (
            <div className="divide-y">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                  onRemove={handleRemoveItem}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Your bag is empty.</p>
          )}
        </div>
        <div className="lg:col-span-4">
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />
        </div>
      </div>
    </div>
  )
}

