"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"

// import { MainNavItem } from "@/types"
import { SidebarHeading } from "./page-text"
import { BurgerMenu } from "./burger-menu"
import { MobileNavMenu } from "./mobile-nav-menu"

// import { useWindowSize } from "usehooks-ts"
// import { MobileNavMenu } from "./mobile-nav-menu"

// interface MobileNavProps {
//   items?: MainNavItem[]
// }

// export function MobileNav({ items }: MobileNavProps) {
export function MobileNav() {
  // const { width } = useWindowSize()
  const { scrollY } = useScroll()

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed left-0 z-50 w-full px-8 bg-background container flex h-16 items-center justify-between"
      >
        <Link href="/">
          <SidebarHeading className="capitalize">Jeni Kim</SidebarHeading>
        </Link>
        <div className="flex items-center">
          <BurgerMenu
            active={showMobileMenu}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>
      </motion.nav>
      <div className="block md:hidden">
        {showMobileMenu && (
          <MobileNavMenu
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          ></MobileNavMenu>
        )}
      </div>
    </>
  )
}
