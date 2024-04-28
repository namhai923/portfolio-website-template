import { ContactSection } from "@/components/contact-section"
import { Separator } from "@/components/ui/separator"

import ContactUs from "@/components/contact-us"

const contactSection = [
  {
    title: "advertising",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    title: "content marketing",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    title: "social media",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    title: "animation",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
]

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="container relative space-y-5 pt-24 md:pt-10">
        <ContactSection contactSection={contactSection} />
        <ContactUs />
      </div>
    </main>
  )
}
