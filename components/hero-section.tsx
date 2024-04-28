"use client"

import { useRef } from "react"
import Image from "next/image"

import { motion, useInView } from "framer-motion"

import { PageHeader } from "./page-text"
import { imagePlaceholder } from "@/lib/utils"

export function HeroSection({ heroSection }: { heroSection: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  }

  return (
    <section ref={ref}>
      <motion.div
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initital"}
        transition={{ duration: 0.5 }}
        className="relative aspect-[2/1] order-1"
      >
        <Image
          priority
          className="rounded-2xl"
          src={heroSection.heroImage ?? imagePlaceholder}
          alt="hero image"
          fill
          style={{ objectFit: "cover" }}
        />
        <PageHeader>
          <h2 className="absolute h-full w-full place-content-center text-center text-5xl font-mono font-medium text-primary">
            {heroSection.heroLabel}
          </h2>
        </PageHeader>
      </motion.div>
    </section>
  )
}
