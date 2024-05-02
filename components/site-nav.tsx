import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import { MainNav } from "./main-nav"
import { MainNavPreview } from "./main-nav-preview"
import { MobileNav } from "./mobile-nav"
import { MobileNavPreview } from "./mobile-nav-preview"

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

  return draftMode().isEnabled ? (
    <header>
      <div className="hidden md:block">
        <MainNavPreview
          navInitial={navInitial}
          categoriesInfoInitial={categoriesInfoInitial}
        />
      </div>

      <div className="md:hidden block">
        <MobileNavPreview
          navInitial={navInitial}
          categoriesInfoInitial={categoriesInfoInitial}
        />
      </div>
    </header>
  ) : (
    <header>
      <div className="hidden md:block">
        <MainNav
          navInfo={navInitial.data}
          categoriesInfo={categoriesInfoInitial.data}
        />
      </div>

      <div className="md:hidden block">
        <MobileNav
          navInfo={navInitial.data}
          categoriesInfo={categoriesInfoInitial.data}
        />
      </div>
    </header>
  )
}
