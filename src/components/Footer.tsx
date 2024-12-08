import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, PinIcon as Pinterest, Youtube } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-[1321px] py-12 md:flex md:items-start md:justify-between ">
        <div className="max-w-sm">
          <div className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Comforty Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-2 text-2xl font-semibold">Comforty</span>
          </div>
          <p className="mt-4 text-[16px] leading-6 text-muted-foreground">
            Vivamus tristique odio sit amet velit semper,<br/> eu posuere urna egestas.<br/> Orci varius purus.
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-7 w-7 rounded-full hover:text-[#029FAE]" />
              <span className="sr-only ">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-7 w-7 rounded-full hover:text-[#029FAE]" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-7 w-7 rounded-full hover:text-[#029FAE]" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Pinterest className="h-7 w-7 rounded-full hover:text-[#029FAE]" />
              <span className="sr-only">Pinterest</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-7 w-7 rounded-full hover:text-[#029FAE]" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <h3 className="text-sm font-semibold">CATEGORY</h3>
          <ul role="list" className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Sofa
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Armchair
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Wing Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Desk Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Wooden Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Park Bench
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-10 md:mt-0">
          <h3 className="text-sm font-semibold">SUPPORT</h3>
          <ul role="list" className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Help & Support
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-[#029FAE] hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-10 md:mt-0">
          <h3 className="text-sm font-semibold">NEWSLETTER</h3>
          
          <form className="mt-4 flex max-w-md gap-x-2">
            <Input
              type="email"
              placeholder="Your email"
              className="w-full"
              required
            />
            <Button type="submit" className="bg-[#029FAE]">Subscribe</Button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam faucibus orci est.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1321px] border-t py-6 md:flex md:items-center md:justify-between ">
        <p className="text-sm text-muted-foreground">
          © 2024 - Comforty - Designed & Developed by Zakirsoft
        </p>
        <div className="mt-4 flex justify-center space-x-2 md:mt-0">
          <Image
            src="/images/logos.png"
            alt="PayPal"
            width={227}
            height={27}
            className="h-6 w-auto"
          />
        
        </div>
      </div>
    </footer>
  )
}

