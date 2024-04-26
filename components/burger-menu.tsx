"use client"

import { cn } from "@/lib/utils"

export interface BurgerMenuProps {
  active?: boolean
  onClick?: () => void
}

export function BurgerMenu({ active = false, onClick }: BurgerMenuProps) {
  return (
    <button
      aria-label="mobile menu"
      className={cn(
        "relative flex h-6 w-6 before:transition-all before:duration-200 before:ease-out after:transition-all after:duration-200 after:ease-out cursor-pointer before:content-[''] before:w-6 before:h-[2px] before:bg-primary before:absolute after:content-[''] after:w-6 after:h-[2px] after:bg-primary after:absolute before:-translate-y-[calc(-50%+10px)] after:translate-y-[calc(-50%+8px)] before:top-1/2 after:top-1/2 items-center justify-center",
        active
          ? "before:-translate-y-1/2 after:-translate-y-1/2 before:rotate-[135deg] after:-rotate-[135deg]"
          : ""
      )}
      onClick={onClick}
    >
      {/* <div className="flex justify-center items-center" aria-hidden> */}
      <div
        className={cn("w-6 bg-primary h-[2px]", active ? "hidden" : "")}
      ></div>
      {/* </div> */}
    </button>
  )
}
