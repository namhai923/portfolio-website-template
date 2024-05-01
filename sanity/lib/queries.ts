import { groq } from "next-sanity"

export const CATEGORIES_INFO_QUERY = groq`*[_type == "category"]|order(orderRank) {
  categoryName,
  "slug": slug.current
}`

export const CATEGORIES_QUERY = groq`*[_type == "category"]|order(orderRank) {
  categoryName,
  "slug": slug.current,
  categoryCover
}`

export const CATEGORY_QUERY = groq`*[_type == 'category' && slug.current == $slug][0] {
  categoryTitle,
  categoryDescription,
  categoryItems[]{itemDescription, itemCover}
}`

export const ABOUT_QUERY = groq`*[_type == "about"][0] {
  title,
  cover,
  aboutItems[]{title, subtitle, description},
  contactMessage,
  footerMessage
}`

export const CONTACT_QUERY = groq`*[_type == "contact"][0] {
  title,
  subtitle,
  contactItems[]{cover, title},
  formMessage
}`

export const NAV_QUERY = groq`*[_type == "navigation"][0] {
  title,
  firstGroup,
  secondGroup,
  socials[]{socialType, socialUrl}
}`
