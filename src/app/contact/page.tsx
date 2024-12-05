import { ContactForm } from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import { Navbar } from "@/components/navbar"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto px-4 py-16">
        <div className="text-center  mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-5xl  mx-auto border p-4 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2  bg-transparent rounded-lg ">
              <ContactForm />
            </div>
            <div className=" ">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
