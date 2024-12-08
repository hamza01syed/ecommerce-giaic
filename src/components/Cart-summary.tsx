'use client'

import { Button } from "@/components/ui/button"

interface CartSummaryProps {
  subtotal: number
  shipping: number
  total: number
}

export function CartSummary({ subtotal, shipping, total }: CartSummaryProps) {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Delivery & Handling</span>
          {shipping === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span>${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button 
          className="w-full rounded-full bg-teal-500 hover:bg-teal-600"
          onClick={() => alert('Proceeding to checkout...')}
        >
          Member Checkout
        </Button>
      </div>
    </div>
  )
}

