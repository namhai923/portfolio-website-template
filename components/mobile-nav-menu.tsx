import * as React from "react"
import { createPortal } from "react-dom"
import { SanityDocument } from "next-sanity"

import { AnimatePresence, motion } from "framer-motion"
import { IconChevronDown } from "@tabler/icons-react"

import { NavItem } from "./nav-item"
import { SocialNav } from "./social-nav"

import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"

export function MobileNavMenu({
  navInfo,
  categoriesInfo,
  onClick,
}: {
  navInfo: SanityDocument
  categoriesInfo: SanityDocument[]
  onClick?: () => void
}) {
  useLockBody()

  return (
    <>
      {createPortal(
        <div
          className={cn(
            "fixed inset-0 top-0 bg-background z-40 grid grid-flow-row auto-rows-max overflow-auto shadow-md animate-out fade-in-100 duration-300 fill-mode-forwards opacity-50 md:hidden"
          )}
        >
          <div className="relative z-20 flex justify-center items-center h-screen w-full">
            <nav className="grid grid-flow-row auto-rows-max text-sm relative">
              <ul className="text-center">
                <NavItem
                  itemText={navInfo.homeLabel ?? "home"}
                  navUrl="/"
                  onClick={onClick}
                />
                <MobileNavSub
                  item={navInfo.firstGroup ?? "illustrations"}
                  subItems={categoriesInfo}
                  onClick={onClick}
                />
                <NavItem
                  itemText={navInfo.aboutLabel ?? "about"}
                  navUrl="/about"
                  onClick={onClick}
                />
                <NavItem
                  itemText={navInfo.contactLabel ?? "contact"}
                  navUrl="/contact"
                  onClick={onClick}
                />
              </ul>
            </nav>
            {navInfo.socials && (
              <div className="absolute bottom-48">
                <SocialNav socials={navInfo.socials} />
              </div>
            )}
          </div>
        </div>,
        document.body,
        "mobile-nav"
      )}
    </>
  )
}

export function MobileNavSub({
  item,
  subItems,
  onClick,
}: {
  item: string
  subItems: SanityDocument[]
  onClick?: () => void
}) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const zoomInandOutAnimationVariant = {
    initial: {
      scale: 0.9,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  return (
    <div className="group p-4" tabIndex={-1} aria-disabled={true}>
      <div
        className={
          "flex items-center text-sm transition-colors font-medium duration-300 text-primary select-none capitalize"
        }
        onClick={handleOpen}
      >
        {item}{" "}
        <IconChevronDown
          className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 -rotate-90"
          aria-hidden="true"
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={cn("absolute inset-0 bg-background z-30")}
            variants={zoomInandOutAnimationVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div
              onClick={handleClose}
              className="flex gap-2 items-center group font-bold mb-5"
            >
              <IconChevronDown
                className="relative text-primary top-[1px]  h-3 w-3 transition duration-200 rotate-90"
                aria-hidden="true"
              />
              <p className="text-primary text-base">Back</p>
            </div>
            {subItems?.map((item, idx) => (
              <NavItem
                key={idx}
                itemText={item.name}
                navUrl={`/${item.slug}`}
                onClick={onClick}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
