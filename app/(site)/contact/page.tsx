import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import ContactSection from "@/components/contact-section"

import { loadQuery } from "@/sanity/lib/store"
import { CONTACT_QUERY } from "@/sanity/lib/queries"

export default async function ContactPage() {
  const contactInitial = await loadQuery<SanityDocument>(
    CONTACT_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return (
    <main className="container relative space-y-5 pt-24 md:pt-10">
      <ContactSection contactData={contactInitial.data} />
    </main>
  )
}
