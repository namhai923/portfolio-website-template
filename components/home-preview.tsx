"use client"

import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import Home from "./home"

import { CATEGORIES_QUERY } from "@/sanity/lib/queries"

export default function HomePreview({
  categoriesInitial,
}: {
  categoriesInitial: QueryResponseInitial<SanityDocument[]>
}) {
  const { data: categories } = useQuery<SanityDocument[] | null>(
    CATEGORIES_QUERY,
    {},
    { initial: categoriesInitial }
  )

  return categories !== null ? (
    <Home categories={categories} />
  ) : (
    <div className="bg-red-100">Data is not available</div>
  )
}
