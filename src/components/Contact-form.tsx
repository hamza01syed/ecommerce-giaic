'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"


export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // const formData = new FormData(event.currentTarget)
    
    // Simulate form submission
    // await new Promise(resolve => setTimeout(resolve, 1000))

    // setIsLoading(false)
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    })
    
    // Reset form
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Your name"
          name="name"
          required
          className="bg-background"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email address"
          name="email"
          required
          className="bg-background"
        />
      </div>
      <div>
        <Input
          placeholder="Subject"
          name="subject"
          required
          className="bg-background"
        />
      </div>
      <div>
        <Textarea
          placeholder="Message"
          name="message"
          required
          className="min-h-[120px] bg-background"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#007580] text-primary-foreground"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Submit"}
      </Button>
    </form>
  )
}

