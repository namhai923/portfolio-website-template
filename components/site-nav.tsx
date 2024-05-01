import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

import { loadQuery } from "@/sanity/lib/store"
import { NAV_QUERY, CATEGORIES_INFO_QUERY } from "@/sanity/lib/queries"

export async function SiteNav() {
  const navInitial = await loadQuery<SanityDocument>(
    NAV_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  const categoriesInfoInitial = await loadQuery<SanityDocument[]>(
    CATEGORIES_INFO_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return (
    <header>
      <div className="hidden md:block">
        <MainNav
          navInfo={navInitial.data}
          categoriesInfo={categoriesInfoInitial.data}
        />
      </div>

      <div className="md:hidden block">
        <MobileNav categoriesInfo={categoriesInfoInitial.data} />
      </div>
    </header>
  )
}
