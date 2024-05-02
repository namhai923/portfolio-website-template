import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import Home from "@/components/home"
import HomePreview from "@/components/home-preview"

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

  return draftMode().isEnabled ? (
    <HomePreview categoriesInitial={categoriesInitial} />
  ) : (
    <Home categories={categoriesInitial.data} />
  )
}
