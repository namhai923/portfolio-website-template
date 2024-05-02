"use client"

import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import Category from "./category"

import { CATEGORY_QUERY } from "@/sanity/lib/queries"

export default function CategoryPreview({
  categoryInitial,
  params,
}: {
  categoryInitial: QueryResponseInitial<SanityDocument>
  params: QueryParams
}) {
  const { data: categoryData } = useQuery<SanityDocument | null>(
    CATEGORY_QUERY,
    params,
    { initial: categoryInitial }
  )

  return categoryData !== null ? (
    <Category categoryData={categoryData} />
  ) : (
    <div className="bg-red-100">Data is not available</div>
  )
}
