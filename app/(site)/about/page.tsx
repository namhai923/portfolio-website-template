import aboutImage from "@/public/about-image.jpg"

import About from "@/components/about"

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
      <About heroSection={heroSection} aboutSection={aboutSection} />
    </main>
  )
}
