"use client"

import Image from "next/image"
import { SanityDocument } from "next-sanity"

import LightGallery from "lightgallery/react"
import { motion } from "framer-motion"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-autoplay.css"
import "lightgallery/css/lg-fullscreen.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import lgAutoPlay from "lightgallery/plugins/autoplay"
import lgFullScreen from "lightgallery/plugins/fullscreen"

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "./page-text"

import { urlFor } from "@/sanity/lib/utils"
import { imagePlaceholder } from "@/lib/utils"

export default function Gallery({ category }: { category: SanityDocument }) {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  const slideInRightAnimationVariant = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <div className="pt-24 md:p-0">
      <motion.div
        variants={slideInRightAnimationVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
      >
        <PageHeader className="relative p-10">
          <PageHeaderHeading>{category.categoryTitle}</PageHeaderHeading>
          <PageHeaderDescription>
            {category.categoryDescription}
          </PageHeaderDescription>
        </PageHeader>
      </motion.div>

      <LightGallery
        plugins={[lgThumbnail, lgZoom, lgAutoPlay, lgFullScreen]}
        mode="lg-slide"
        elementClassNames={"grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}
        speed={500}
      >
        {category.categoryItems?.map(
          (
            categoryItem: { itemCover: any; itemDescription: string },
            idx: number
          ) => {
            return (
              <a
                key={idx}
                data-src={
                  categoryItem.itemCover
                    ? urlFor(categoryItem.itemCover).url()
                    : imagePlaceholder
                }
              >
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.3, delay: idx * 0.4 }}
                  className="relative w-full aspect-square overflow-hidden cursor-pointer"
                >
                  <Image
                    priority
                    className="hover:scale-105 duration-500 ease-out"
                    src={
                      categoryItem.itemCover
                        ? urlFor(categoryItem.itemCover).url()
                        : imagePlaceholder
                    }
                    alt={categoryItem.itemDescription}
                    fill
                    sizes="(min-width: 1000px) 30vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
              </a>
            )
          }
        )}
      </LightGallery>
    </div>
  )
}
