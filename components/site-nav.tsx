import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"

export function SiteNav() {
  return (
    <header>
      <div className="hidden md:block">
        <MainNav />
      </div>

      <div className="md:hidden block">
        <MobileNav />
      </div>
    </header>
  )
}
