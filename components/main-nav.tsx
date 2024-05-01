"use client"

import Link from "next/link"
import { SanityDocument } from "next-sanity"

import {
  IconBrandYoutubeFilled,
  IconBrandX,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react"

import { SidebarHeading, SidebarGroupText } from "./page-text"
import { NavItem } from "./nav-item"

let aboutItems = ["About", "Contact"]

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
          <NavItem itemText="home" navUrl="/" />
          <li>
            <div className="h-8">
              <SidebarGroupText className="uppercase">
                {navInfo.firstGroup}
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
                {navInfo.secondGroup}
              </SidebarGroupText>
            </div>

            <ul>
              {aboutItems?.map((item, idx) => (
                <NavItem
                  key={idx}
                  itemText={item}
                  navUrl={`/${item.toLowerCase()}`}
                />
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex flex-col grow justify-end">
        <div className="inline-flex space-x-3 justify-center mb-2">
          {navInfo.socials?.map((social: any, idx: number) => (
            <Link
              key={idx}
              href={social.socialUrl || "/"}
              rel="noreferrer noopener"
              target="_blank"
            >
              {social.socialType === "instagram" ? (
                <IconBrandInstagram className="h-5 w-5 text-secondary hover:text-primary" />
              ) : social.socialType === "youtube" ? (
                <IconBrandYoutubeFilled className="h-5 w-5 text-secondary hover:text-primary" />
              ) : social.socialType === "facebook" ? (
                <IconBrandFacebook className="h-5 w-5 text-secondary hover:text-primary" />
              ) : social.socialType === "linkedin" ? (
                <IconBrandLinkedin className="h-5 w-5 text-secondary hover:text-primary" />
              ) : social.socialType === "x" ? (
                <IconBrandX className="h-5 w-5 text-secondary hover:text-primary" />
              ) : (
                ""
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
