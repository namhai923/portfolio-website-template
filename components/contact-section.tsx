"use client"

import { useRef } from "react"
import Image from "next/image"

import { motion, useInView } from "framer-motion"

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "./page-text"
import { imagePlaceholder } from "@/lib/utils"

export function ContactSection({ contactSection }: { contactSection: any[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <motion.section
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.3 }}
      ref={ref}
      id="contact"
    >
      <div className="xl:mx-7 md:px-5 py-12">
        <div className="flex flex-col gap-y-3 text-center place-items-center">
          <PageHeader>
            <h2 className=" place-content-center text-center text-5xl font-bold capitalize">
              {"let's work together!"}
            </h2>
          </PageHeader>
          <PageHeaderDescription className="text-lg text-secondary tracking-tighter">
            {
              "Custom illustration can make all the difference when marketing your brand."
            }
          </PageHeaderDescription>
        </div>
      </div>
      <div className="xl:mx-20 md:px-5 py-12">
        <ul className="grid md:grid-cols-4 gap-3 lg:gap-8">
          {contactSection.map((contactInfo, idx) => (
            <li key={idx}>
              <div className="flex flex-col gap-y-3">
                <div className="relative w-full aspect-square">
                  <Image
                    priority
                    src={contactInfo.cover ?? imagePlaceholder}
                    alt={contactInfo.title}
                    fill
                    sizes="(min-width: 1000px) 30vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h2 className="text-5xl font-bold capitalize">
                  {`0${idx + 1}`}
                </h2>
                <PageHeaderDescription className="text-lg text-secondary tracking-tighter uppercase">
                  {contactInfo.title}
                </PageHeaderDescription>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="xl:mx-7 md:px-5 py-12">
        <div className="flex flex-col gap-y-3 text-center place-items-center">
          <PageHeaderHeading className="font-bold">
            {"Ready to make it official?"}
          </PageHeaderHeading>
          <PageHeaderDescription className="text-lg tracking-tighter">
            {"Get in touch using this form."}
          </PageHeaderDescription>
        </div>
      </div>
    </motion.section>
  )
}
