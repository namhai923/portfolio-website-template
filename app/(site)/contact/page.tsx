import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import Contact from "@/components/contact"
import ContactPreview from "@/components/contact-preview"

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

  return draftMode().isEnabled ? (
    <ContactPreview contactInitial={contactInitial} />
  ) : (
    <Contact contactData={contactInitial.data} />
  )
}
