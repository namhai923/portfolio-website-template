import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import Home from "@/components/home"

import { loadQuery } from "@/sanity/lib/store"
import { CATEGORIES_QUERY } from "@/sanity/lib/queries"

export default async function HomePage() {
  const categoriesInitial = await loadQuery<SanityDocument[]>(
    CATEGORIES_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return (
    <main className="px-6 pt-24 md:p-0">
      <Home categories={categoriesInitial.data} />
    </main>
  )
}
