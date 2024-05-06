import "@/styles/globals.css"

import type { Metadata } from "next"
import { draftMode } from "next/headers"
// import { VisualEditing } from "next-sanity"

import { siteConfig } from "@/config/site"

import { ScrollArea } from "@/components/ui/scroll-area"
import { SiteNav } from "@/components/site-nav"
import VisualEditing from "@/components/visual-editing"

import { fontMono, fontPopp, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background text-primary font-sans antialiased",
          fontSans.variable,
          fontPopp.variable,
          fontMono.variable
        )}
      >
        <div className="flex">
          <SiteNav />
          <div className="flex-1 hidden md:block">
            <ScrollArea className="h-screen">{children}</ScrollArea>
          </div>
          <div className="flex-1 block md:hidden">{children}</div>
        </div>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
