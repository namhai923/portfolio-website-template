import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarItemText } from "./page-text"

import { cn } from "@/lib/utils"

export function NavItem({
  itemText,
  navUrl,
  onClick,
}: {
  itemText: string
  navUrl: string
  onClick?: () => void
}) {
  const pathname = usePathname()

  return (
    <li
      className={cn(
        "h-8 hover:text-secondary",
        pathname === navUrl && "underline underline-offset-4"
      )}
    >
      <Link href={navUrl} onClick={onClick}>
        <SidebarItemText className="capitalize">{itemText}</SidebarItemText>
      </Link>
    </li>
  )
}
