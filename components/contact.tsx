"use client"

import { useRef } from "react"
import Image from "next/image"
import { SanityDocument } from "next-sanity"

import { motion, useInView } from "framer-motion"

import ContactUs from "./contact-us"

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "./page-text"

import { urlFor } from "@/sanity/lib/utils"
import { imagePlaceholder } from "@/lib/utils"

export default function Contact({
  contactData,
}: {
  contactData: SanityDocument
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <main className="container relative space-y-5 pt-24 md:pt-10">
      <motion.section
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3 }}
        ref={ref}
        id="contact"
      >
        <div className="grid xl:mx-7 md:px-5 py-12 gap-y-24">
          <div className="flex flex-col gap-y-3 text-center place-items-center">
            <PageHeader>
              <h2 className=" place-content-center text-center text-5xl font-bold capitalize">
                {contactData.title}
              </h2>
            </PageHeader>
            <PageHeaderDescription className="text-lg text-secondary tracking-tighter">
              {contactData.subtitle}
            </PageHeaderDescription>
          </div>
          <ul className="grid md:grid-cols-4 gap-3 lg:gap-8">
            {contactData.contactItems?.map((contactItem: any, idx: number) => (
              <li key={idx}>
                <div className="flex flex-col gap-y-3">
                  <div className="relative w-full aspect-square">
                    <Image
                      priority
                      src={
                        contactItem.cover
                          ? urlFor(contactItem.cover).url()
                          : imagePlaceholder
                      }
                      alt={contactItem.title}
                      fill
                      sizes="(min-width: 1000px) 30vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h2 className="text-5xl font-bold capitalize">
                    {`0${idx + 1}`}
                  </h2>
                  <PageHeaderDescription className="text-lg text-secondary tracking-tighter uppercase">
                    {contactItem.title}
                  </PageHeaderDescription>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-y-3 text-center place-items-center">
            <PageHeaderHeading className="font-bold">
              {contactData.formMessage.title}
            </PageHeaderHeading>
            <PageHeaderDescription className="text-lg tracking-tighter">
              {contactData.formMessage.subtitle}
            </PageHeaderDescription>
          </div>
          <ContactUs />
        </div>
      </motion.section>
    </main>
  )
}
