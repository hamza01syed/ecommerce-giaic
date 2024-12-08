'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
// import { useToast } from "@/components/ui/use-toast"

export function AddToCartButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function addToCart() {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    
    toast({
      title: "Added to cart",
      description: "This product has been added to your cart.",
    })
  }

  return (
    <Button 
      onClick={addToCart} 
      disabled={isLoading}
      className="w-[212px] mt-20 h-[63px] bg-[#029FAE] text-[20px]"
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isLoading ? "Adding to Cart..." : "Add To Cart"}
    </Button>
  )
}

