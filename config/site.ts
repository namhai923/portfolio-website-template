const url = process.env.NEXT_PUBLIC_SITE_URL!

export const siteConfig = {
  name: "Porfolio Template",
  url,
  description: "A portfolio website template",
  links: {
    shadcn: "https://ui.shadcn.com/",
    sanity: "https://www.sanity.io/",
    hainguyen: "https://www.linkedin.com/in/akias/",
  },
}

export type SiteConfig = typeof siteConfig
