import { SanityDocument, QueryParams } from "next-sanity"
import { draftMode } from "next/headers"

import Category from "@/components/category"
import CategoryPreview from "@/components/category-preview"

import { loadQuery } from "@/sanity/lib/store"
import { CATEGORIES_INFO_QUERY, CATEGORY_QUERY } from "@/sanity/lib/queries"
import { client } from "@/sanity/lib/client"

export async function generateStaticParams() {
  const categoriesInfo = await client.fetch<SanityDocument[]>(
    CATEGORIES_INFO_QUERY
  )

  return categoriesInfo.map((categoryInfo) => ({
    slug: categoryInfo.slug,
  }))
}

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

  return draftMode().isEnabled ? (
    <CategoryPreview categoryInitial={categoryInitial} />
  ) : (
    <Category categoryData={categoryInitial.data} />
  )
}
