import Image from "next/image"
import Link from "next/link"

import { urlFor } from "@/sanity/lib/utils"
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
]

export default function Home() {
  return (
    <div className="px-6 pt-24 md:p-0">
      <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {madeForYouAlbums?.map((blogInfo, idx) => (
          <Link key={idx} href={`/${blogInfo.name.toLowerCase()}`}>
            <div className="group">
              <div className="relative w-full aspect-square">
                {/* <Image
            priority
            className="h-auto w-auto object-cover transition-all group-hover:scale-105 rounded-t-lg"
            src={
              blogInfo.cover ? urlFor(blogInfo.cover).url() : imagePlaceholder
            }
            alt={blogInfo.name}
            fill
            sizes="(min-width: 1000px) 30vw, 50vw"
            style={{ objectFit: "cover" }}
          /> */}
                <Image
                  priority
                  src={blogInfo.cover ?? imagePlaceholder}
                  alt={blogInfo.name}
                  fill
                  sizes="(min-width: 1000px) 30vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute h-full w-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-70 transition duration-200 ease-out"></div>
                <div className="absolute h-full w-full text-2xl text-background place-content-center text-center font-bold opacity-0 group-hover:opacity-100 transition duration-300 ease-out">
                  {blogInfo.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}
