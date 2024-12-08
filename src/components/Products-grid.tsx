import Link from "next/link";
import { ProductCard } from "./Product-card"

export const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/20.png",
      tag: "new" as const,
      description: "A stylish and sturdy library stool chair perfect for modern spaces."
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/f-chair2.png",
      tag: "sale" as const,
      description: "Ergonomic library stool chair designed for comfort and durability."
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/f-chair3.png",
      description: "Compact and versatile stool chair, ideal for small libraries and study rooms."
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/f-chair4.png",
      description: "A durable and lightweight stool chair for libraries and offices."
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/T-chair1.png",
      tag: "new" as const,
      description: "Modern library stool chair with a minimalist design for contemporary spaces."
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/02.png",
      tag: "sale" as const,
      description: "Affordable and comfortable stool chair, ideal for everyday use."
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/p-chair1.png",
      description: "A practical and elegant stool chair suitable for home and office libraries."
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/20.png",
      description: "Stylish and functional, this stool chair complements any library setting."
    },
    {
      id: 9,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/T-chair1.png",
      tag: "new" as const,
      description: "Premium quality stool chair with a sleek design for modern interiors."
    },
    {
      id: 10,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/f-chair2.png",
      tag: "sale" as const,
      description: "Elegant and sturdy stool chair available at an unbeatable price."
    },
    {
      id: 11,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/f-chair3.png",
      description: "Versatile stool chair, designed for comfort and durability in study areas."
    },
    {
      id: 12,
      name: "Library Stool Chair",
      price: 20,
      image: "/images/T-chair3.png",
      description: "High-quality stool chair with a modern design and robust build."
    },
    {
        id: 13,
        name: "The Poplar Subtle Sofa",
        price: 99.00,
        image: "/images/Large.png",
        description: "A luxurious and cozy sofa that adds a touch of elegance to your living space. Its subtle design blends seamlessly with modern and classic interiors."
      },
      {
        id: 14,
        name: "The Dandy Chair",
        price: 99.00,
        image: "/images/Parent.png",
        description: "An elegant chair with a sophisticated design, perfect for both office and home settings. Built for comfort and durability, it enhances any room decor."
      },
      {
        id: 15,
        name: "The Dandy Chair",
        price: 99.00,
        image: "/images/Photo.png",
        description: "A stylish and ergonomic chair designed to offer superior support. Its timeless design fits effortlessly into any workspace or home environment."
      }
      
  ];
  
interface Iprops{
    size:number
    name:string
}

export function ProductsGrid({size,name}:Iprops) {
    console.log(size)
    console.log(name)
  return (
    <div className="mx-auto max-w-[1321px] py-16 ">
      <h2 className="text-2xl font-bold mb-8">{name}</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0,size).map((product) => (
            <Link href={`/product/${product.id}`}  key={product.id}>
          <ProductCard
           
            name={product.name}
            price={product.price}
            image={product.image}
            tag={product.tag}
          />
          </Link>
        ))}
      </div>
    </div>
  )
}

