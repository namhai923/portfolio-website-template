import { defineField, defineType } from "sanity"

export const contactItem = defineType({
  name: "contactItem",
  title: "Contact Item",
  type: "object",
  fields: [
    defineField({
      name: "cover",
      title: "Cover",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      cover: "cover",
    },
    prepare({ title, cover }) {
      return {
        title: title,
        media: cover,
      }
    },
  },
})
