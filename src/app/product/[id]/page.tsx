// "use client"
import Image from "next/image"
import Link from "next/link"
// import { AddToCartButton } from "@/components/add-to-cart-button"
import { products } from "@/components/Products-grid"
import { Button } from "@/components/ui/button"
import { CiShoppingCart } from "react-icons/ci"
import { AddToCartButton } from "@/components/Add-to-cart"




// console.log(products)

export default  function ProductPage(props:any) {
    const id= props.params.id
    console.log("id",id)
    const item=products.filter(item=>item.id==id)
    console.log(item)
  return (
    <main className="max-w-[1321px] mx-auto  py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative  rounded-lg overflow-hidden">
          <Image
            src={item[0].image}
            alt={item[0].name}
            width={675}
            height={607}
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-6xl font-bold mb-4">{item[0].name}</h1>
          <div className="bg-[#029FAE] mt-4 text-primary-foreground w-fit px-3 py-1 rounded-md mb-4">
            ${item[0].price.toFixed(2)} USD
          </div>
          <p className="text-muted-foreground mt-8">
            {item[0].description}
          </p>
         
          <AddToCartButton  />
         
          
          {/* <Button className="w-[212px] mt-20 h-[63px] bg-[#029FAE] text-[20px]" >
          <CiShoppingCart />
            Add to Cart</Button> */}
        </div>
      </div>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold uppercase">Featured Products</h2>
          <Link href="/products" className="text-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.slice(0,5).map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium group-hover:underline">
                {product.name}
              </h3>
              <p className="text-muted-foreground">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
