"use client"

import Link from "next/link"
import { useRef } from "react"
import { SanityDocument } from "next-sanity"

import { motion, useInView } from "framer-motion"

import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import {
  SidebarItemText,
  PageHeaderHeading,
  PageHeaderDescription,
} from "./page-text"
import { Separator } from "./ui/separator"

export default function About({ aboutData }: { aboutData: SanityDocument }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div className="container relative space-y-5 pt-24 md:pt-10">
      <HeroSection
        heroSection={{ cover: aboutData.cover, title: aboutData.title }}
      />
      <AboutSection aboutSection={aboutData.aboutItems} />
      <motion.div
        ref={ref}
        variants={{
          initial: { y: 50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
        }}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3 }}
        className="grid xl:mx-7 md:px-5 py-12 gap-y-24"
      >
        <div className="flex flex-col gap-y-5 text-center place-items-center">
          <PageHeaderHeading className="font-bold">
            {aboutData.contactMessage.title}
          </PageHeaderHeading>
          <Link href={"/contact"}>
            <PageHeaderDescription className="text-lg text-destructive underline uppercase">
              {aboutData.contactMessage.subtitle}
            </PageHeaderDescription>
          </Link>
        </div>
        <Separator />
        <div className="flex flex-col gap-y-5 text-center place-items-center">
          <SidebarItemText className="font-bold text-secondary">
            {aboutData.footerMessage.title}
          </SidebarItemText>
          <PageHeaderDescription className="text-xs">
            {aboutData.footerMessage.subtitle}
          </PageHeaderDescription>
        </div>
      </motion.div>
    </div>
  )
}
