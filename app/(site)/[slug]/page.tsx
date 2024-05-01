import { SanityDocument, QueryParams } from "next-sanity"
import { draftMode } from "next/headers"

import Gallery from "@/components/gallery"

import { loadQuery } from "@/sanity/lib/store"
import { CATEGORY_QUERY } from "@/sanity/lib/queries"

export default async function CategoryPage({
  params,
}: {
  params: QueryParams
}) {
  const categoryInitial = await loadQuery<SanityDocument>(
    CATEGORY_QUERY,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  if (!categoryInitial.data) {
    return
  }

  return <Gallery category={categoryInitial.data} />
}
