"use client"

import Image from "next/image"
import Link from "next/link"
import { SanityDocument } from "next-sanity"

import { motion } from "framer-motion"

import { urlFor } from "@/sanity/lib/utils"
import { imagePlaceholder } from "@/lib/utils"

export default function Home({ categories }: { categories: SanityDocument[] }) {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <main className="px-6 pt-24 md:p-0">
      <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {categories?.map((category, idx) => (
          <motion.li
            key={idx}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: idx * 0.4 }}
          >
            <Link href={`/${category.slug}`}>
              <div className="group">
                <div className="relative w-full aspect-square">
                  <Image
                    priority
                    src={
                      category.categoryCover
                        ? urlFor(category.categoryCover).url()
                        : imagePlaceholder
                    }
                    alt={category.categoryName}
                    fill
                    sizes="(min-width: 1000px) 30vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute h-full w-full bg-primary flex items-center justify-center opacity-70 md:opacity-0 group-hover:opacity-70 transition duration-200 ease-out"></div>
                  <div className="absolute h-full w-full text-2xl text-background place-content-center text-center font-bold md:opacity-0 group-hover:opacity-100 transition duration-300 ease-out">
                    {category.categoryName}
                  </div>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </main>
  )
}
