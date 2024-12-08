import { ContactForm } from "@/components/Contact-form"
import { MapPin, Phone, Clock, Trophy, Shield, Headphones } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </section>

      <div className="grid md:grid-cols-2  max-w-[1321px] mx-auto">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                236 5th SE Avenue, New
                <br />
                York NY10000, United
                <br />
                States
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Working Time</h3>
              <p className="text-muted-foreground mb-10 ">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-[1321px] py-6 lg:h-[270px] mx-auto mt-16 bg-muted px-16 rounded-lg">
        <div className="flex items-center gap-4">
          <Trophy className="h-12 w-12 text-primary" />
          <div>
            <h3 className="font-semibold text-[25px]">High Quality</h3>
            <p className="text-[20px] text-muted-foreground">Crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Shield className="h-12 w-12 text-primary" />
          <div>
            <h3 className="font-semibold text-[25px]">Warranty Protection</h3>
            <p className="text-[20px] text-muted-foreground">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Headphones className="h-12 w-12 text-primary" />
          <div>
            <h3 className="font-semibold text-[25px]">24 / 7 Support</h3>
            <p className="text-[20px] text-muted-foreground">Dedicated support</p>
          </div>
        </div>
      </div>
    </main>
  )
}

