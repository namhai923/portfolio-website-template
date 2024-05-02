"use client"

import Link from "next/link"
import { SanityDocument } from "next-sanity"

import { SidebarHeading, SidebarGroupText } from "./page-text"
import { NavItem } from "./nav-item"
import { SocialNav } from "./social-nav"

export function MainNav({
  navInfo,
  categoriesInfo,
}: {
  navInfo: SanityDocument
  categoriesInfo: SanityDocument[]
}) {
  return (
    <div className="flex flex-col h-screen w-56 pt-7 pr-7 pl-6 2xl:w-64 2xl:pl-10 2xl:pt-8 2xl:pr-8">
      <div>
        <Link href="/">
          <div className="h-14">
            <SidebarHeading className="capitalize">
              {navInfo.title}
            </SidebarHeading>
          </div>
        </Link>
        <ul className="pl-2 space-y-7">
          <NavItem itemText={navInfo.homeLabel ?? "home"} navUrl="/" />
          <li>
            <div className="h-8">
              <SidebarGroupText className="uppercase">
                {navInfo.firstGroup ?? "illustrations"}
              </SidebarGroupText>
            </div>
            <ul>
              {categoriesInfo?.map((categoryInfo, idx) => (
                <NavItem
                  key={idx}
                  itemText={categoryInfo.categoryName}
                  navUrl={`/${categoryInfo.slug}`}
                />
              ))}
            </ul>
          </li>
          <li>
            <div className="h-8">
              <SidebarGroupText className="uppercase">
                {navInfo.secondGroup ?? "info"}
              </SidebarGroupText>
            </div>

            <ul>
              <NavItem
                itemText={navInfo.aboutLabel ?? "about"}
                navUrl="/about"
              />
              <NavItem
                itemText={navInfo.contactLabel ?? "contact"}
                navUrl="/contact"
              />
            </ul>
          </li>
        </ul>
      </div>

      {navInfo.socials && (
        <div className="flex flex-col grow justify-end">
          <SocialNav socials={navInfo.socials} />
        </div>
      )}
    </div>
  )
}
