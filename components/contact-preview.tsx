"use client"

import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import Contact from "./contact"

import { CONTACT_QUERY } from "@/sanity/lib/queries"

export default function ContactPreview({
  contactInitial,
}: {
  contactInitial: QueryResponseInitial<SanityDocument>
}) {
  const { data: contactData } = useQuery<SanityDocument | null>(
    CONTACT_QUERY,
    {},
    { initial: contactInitial }
  )

  return contactData !== null ? (
    <Contact contactData={contactData} />
  ) : (
    <div className="bg-red-100">Data is not available</div>
  )
}
