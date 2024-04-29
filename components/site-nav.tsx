import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"

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
