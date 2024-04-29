"use client"

import Link from "next/link"
import { useRef } from "react"

import { motion, useInView } from "framer-motion"

import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import {
  SidebarItemText,
  PageHeaderHeading,
  PageHeaderDescription,
} from "./page-text"
import { Separator } from "./ui/separator"

export default function About({
  heroSection,
  aboutSection,
}: {
  heroSection: any
  aboutSection: any[]
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div className="container relative space-y-5 pt-24 md:pt-10">
      <HeroSection heroSection={heroSection} />
      <AboutSection aboutSection={aboutSection} />
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
            {"Ready to make it official?"}
          </PageHeaderHeading>
          <Link href={"/contact"}>
            <PageHeaderDescription className="text-lg text-destructive underline uppercase">
              {"get in touch"}
            </PageHeaderDescription>
          </Link>
        </div>
        <Separator />
        <div className="flex flex-col gap-y-5 text-center place-items-center">
          <SidebarItemText className="font-bold text-secondary">
            {
              "This example features work from the following illustrators and photographers:"
            }
          </SidebarItemText>
          <PageHeaderDescription className="text-xs">
            {
              "Gabrielle Henderson, Katerina Limpitsouni, Pablo Stanley, Vijay Verma"
            }
          </PageHeaderDescription>
        </div>
      </motion.div>
    </div>
  )
}
