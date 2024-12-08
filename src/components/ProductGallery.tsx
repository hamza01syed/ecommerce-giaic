import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/images/G-chair1.png",
    alt: "Orange chair",
    className: "col-span-2 row-span-2"
  },
  {
    id: 2,
    src: "/images/f-chair4.png",
    alt: "White chair"
  },
  {
    id: 3,
    src: "/images/20.png",
    alt: "White wooden chair"
  },
  {
    id: 4,
    src: "/images/02.png",
    alt: "Grey chair"
  },
  {
    id: 5,
    src: "/images/20.png",
    alt: "Classic chair"
  }
]

export function ProductGallery() {
  return (
    <section className="py-8 max-w-[1321px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`relative aspect-square ${image.className || ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

