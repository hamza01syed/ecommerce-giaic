import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-[1321px] mx-auto py-8 lg:py-12">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
        <div className="bg-[#007580] p-6 sm:p-8 md:px-10 md:py-16 lg:px-12 lg:py-20 text-white rounded-lg order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">About Us - Comforty</h1>
          <p className="mb-6 text-teal-50 text-sm sm:text-base">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic, aesthetic designs, we craft chairs that seamlessly blend style with functionality.
          </p>
          <Button asChild variant="secondary" className="mt-6 sm:mt-8 md:mt-16 lg:mt-32 w-full sm:w-auto">
            <Link href="/collection">View collection</Link>
          </Button>
        </div>
        <div className="relative aspect-[619/478] w-full md:h-[478px] md:w-[619px] rounded-lg overflow-hidden order-1 md:order-2">
          <Image
            src="/images/20.png"
            alt="White minimal chair"
            fill
            sizes="(max-width: 768px) 100vw, 619px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

