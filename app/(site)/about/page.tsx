import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import About from "@/components/about"

import { loadQuery } from "@/sanity/lib/store"
import { ABOUT_QUERY } from "@/sanity/lib/queries"

export default async function AboutPage() {
  const aboutInitial = await loadQuery<SanityDocument>(
    ABOUT_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return (
    <main className="flex flex-col items-center">
      <About aboutData={aboutInitial.data} />
    </main>
  )
}
