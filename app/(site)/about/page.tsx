import Link from "next/link"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { Separator } from "@/components/ui/separator"

import aboutImage from "@/public/about-image.jpg"

import {
  SidebarItemText,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@/components/page-text"

const heroSection = {
  heroLabel: "Hey, I'm Jeni!",
  heroImage: aboutImage,
}

const aboutSection = [
  {
    subHeader: "a little about me",
    header: "bio",
    description:
      "I am a New Zealand-born commercial illustrator, currently working in New York City.",
  },
  {
    subHeader: "about my process",
    header: "work",
    description:
      "With a subtle minimalistic approach, I strive to create work that is clear and memorable.",
  },
  {
    subHeader: "have question?",
    header: "representation",
    description:
      "I am represented by Andrea Carolla Agency. Please direct all inquiries through the contact form here.",
  },
]

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="container relative space-y-5 pt-24 md:pt-10">
        <HeroSection heroSection={heroSection} />
        <AboutSection aboutSection={aboutSection} />
        <div className="xl:mx-7 md:px-5 py-12">
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
        </div>
        <div className="xl:mx-7 md:px-5 py-12">
          <Separator className="text-destructive" />
        </div>
        <div className="xl:mx-7 md:px-5 py-12">
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
        </div>
      </div>
    </main>
  )
}
