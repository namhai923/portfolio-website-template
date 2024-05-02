import Link from "next/link"

import {
  IconBrandYoutubeFilled,
  IconBrandX,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react"

export function SocialNav({ socials }: { socials: any[] }) {
  return (
    <div className="inline-flex space-x-3 justify-center mb-2">
      {socials?.map((social: any, idx: number) => (
        <Link
          key={idx}
          href={social.socialUrl || "/"}
          rel="noreferrer noopener"
          target="_blank"
        >
          {social.socialType === "instagram" ? (
            <IconBrandInstagram className="h-5 w-5 text-secondary hover:text-primary" />
          ) : social.socialType === "youtube" ? (
            <IconBrandYoutubeFilled className="h-5 w-5 text-secondary hover:text-primary" />
          ) : social.socialType === "facebook" ? (
            <IconBrandFacebook className="h-5 w-5 text-secondary hover:text-primary" />
          ) : social.socialType === "linkedin" ? (
            <IconBrandLinkedin className="h-5 w-5 text-secondary hover:text-primary" />
          ) : social.socialType === "x" ? (
            <IconBrandX className="h-5 w-5 text-secondary hover:text-primary" />
          ) : (
            ""
          )}
        </Link>
      ))}
    </div>
  )
}
