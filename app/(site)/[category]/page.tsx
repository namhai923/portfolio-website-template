"use client"

import { QueryParams } from "next-sanity"
import Image from "next/image"
import Link from "next/link"

import LightGallery from "lightgallery/react"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-autoplay.css"
import "lightgallery/css/lg-share.css"
import "lightgallery/css/lg-fullscreen.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import lgAutoPlay from "lightgallery/plugins/autoplay"
import lgShare from "lightgallery/plugins/share"
import lgHash from "lightgallery/plugins/hash"
import lgFullScreen from "lightgallery/plugins/fullscreen"

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@/components/page-text"
import { imagePlaceholder } from "@/lib/utils"

const madeForYouAlbums = [
  {
    name: "Doodles",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "People",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "Corporate",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Graphics",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Icons",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "Miscellaneous",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
  {
    name: "Doodles",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "People",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "Corporate",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Graphics",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Icons",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "Miscellaneous",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
  {
    name: "Doodles",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    name: "People",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    name: "Corporate",
    artist: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    name: "Graphics",
    artist: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    name: "Icons",
    artist: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    name: "Miscellaneous",
    artist: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
]

export default function CategoryGallery({ params }: { params: QueryParams }) {
  return (
    <div className="pt-24 md:p-0">
      <PageHeader className="relative p-10">
        <PageHeaderHeading>{params.category}</PageHeaderHeading>
        <PageHeaderDescription>
          This is where the description for {params.category} will be placed
        </PageHeaderDescription>
      </PageHeader>
      <LightGallery
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoPlay,
          lgShare,
          lgHash,
          lgFullScreen,
        ]}
        mode="lg-slide"
        elementClassNames={"grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}
        speed={500}
      >
        {madeForYouAlbums?.map((album, idx) => {
          return (
            <a key={idx} data-src={album.cover}>
              <div className="relative w-full aspect-square overflow-hidden cursor-pointer">
                <Image
                  priority
                  className="hover:scale-105 duration-500 ease-out"
                  src={album.cover ?? imagePlaceholder}
                  alt={album.name}
                  fill
                  sizes="(min-width: 1000px) 30vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </a>
          )
        })}
      </LightGallery>
    </div>
  )
}
