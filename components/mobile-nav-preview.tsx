"use client"

import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import { MobileNav } from "./mobile-nav"

import { NAV_QUERY, CATEGORIES_INFO_QUERY } from "@/sanity/lib/queries"

export function MobileNavPreview({
  navInitial,
  categoriesInfoInitial,
}: {
  navInitial: QueryResponseInitial<SanityDocument>
  categoriesInfoInitial: QueryResponseInitial<SanityDocument[]>
}) {
  const { data: navInfo } = useQuery<SanityDocument | null>(
    NAV_QUERY,
    {},
    { initial: navInitial }
  )
  const { data: categoriesInfo } = useQuery<SanityDocument[] | null>(
    CATEGORIES_INFO_QUERY,
    {},
    { initial: categoriesInfoInitial }
  )

  return navInfo !== null && categoriesInfo !== null ? (
    <MobileNav navInfo={navInfo} categoriesInfo={categoriesInfo} />
  ) : (
    <div className="bg-red-100">Data is not available</div>
  )
}
