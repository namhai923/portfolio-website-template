"use client"

import { useRef } from "react"

import { motion, useInView } from "framer-motion"

import {
  SidebarItemText,
  PageHeaderHeading,
  PageHeaderDescription,
} from "./page-text"

export function AboutSection({ aboutSection }: { aboutSection: any[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section ref={ref} id="about">
      <div className="xl:mx-7 md:px-5 py-12">
        <ul className="grid md:grid-cols-3 gap-3 lg:gap-20">
          {aboutSection?.map((aboutInfo, idx) => (
            <motion.li
              key={idx}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: idx * 0.4 }}
            >
              <div className="flex flex-col gap-y-5">
                <SidebarItemText className="font-light uppercase">
                  {aboutInfo.subtitle}
                </SidebarItemText>
                <PageHeaderHeading className="font-bold capitalize">
                  {aboutInfo.title}
                </PageHeaderHeading>
                <PageHeaderDescription className="text-lg">
                  {aboutInfo.description}
                </PageHeaderDescription>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
