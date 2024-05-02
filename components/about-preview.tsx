"use client"

import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import About from "./about"

import { ABOUT_QUERY } from "@/sanity/lib/queries"

export default function AboutPreview({
  aboutInitial,
}: {
  aboutInitial: QueryResponseInitial<SanityDocument>
}) {
  const { data: aboutData } = useQuery<SanityDocument | null>(
    ABOUT_QUERY,
    {},
    { initial: aboutInitial }
  )

  return aboutData !== null ? (
    <About aboutData={aboutData} />
  ) : (
    <div className="bg-red-100">Data is not available</div>
  )
}
