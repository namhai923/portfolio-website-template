import * as React from "react"
import { createPortal } from "react-dom"

import { AnimatePresence, motion } from "framer-motion"
import { IconChevronDown } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { zoomInandOutAnimationVariant } from "./in-view"
import { NavItem } from "./nav-item"

const items = ["illustrations", "about", "contact"]
const subItems = [
  "Doodles",
  "People",
  "Corporate",
  "Graphics",
  "Icons",
  "Miscellaneous",
]

interface MobileNavMenuProps {
  onClick?: () => void
}

export function MobileNavMenu({ onClick }: MobileNavMenuProps) {
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
                <NavItem itemText={"home"} navUrl={"/"} onClick={onClick} />
                {items?.map((item, idx) => (
                  <div key={idx}>
                    {item === "illustrations" ? (
                      <MobileNavSub
                        item={item}
                        subItems={subItems}
                        onClick={onClick}
                      />
                    ) : (
                      <NavItem
                        itemText={item}
                        navUrl={`/${item.toLowerCase()}`}
                        onClick={onClick}
                      />
                    )}
                  </div>
                ))}
              </ul>
            </nav>
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
  subItems: string[]
  onClick?: () => void
}) {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="group p-4" tabIndex={-1} aria-disabled={true}>
      <div
        className={
          "flex items-center text-sm transition-colors font-medium duration-300 text-foreground select-none capitalize"
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
                className="relative text-foreground top-[1px]  h-3 w-3 transition duration-200 rotate-90"
                aria-hidden="true"
              />
              <p className="text-foreground text-base">Back</p>
            </div>
            {subItems?.map((item, idx) => (
              <NavItem
                key={idx}
                itemText={item}
                navUrl={`/${item.toLowerCase()}`}
                onClick={onClick}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
