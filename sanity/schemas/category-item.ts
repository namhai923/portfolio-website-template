import { defineField, defineType } from "sanity"

export const categoryItem = defineType({
  name: "categoryItem",
  title: "Category Item",
  type: "object",
  fields: [
    defineField({
      title: "Cover",
      name: "cover",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
  preview: {
    select: {
      cover: "cover",
      description: "description",
    },
    prepare({ cover, description }) {
      return {
        media: cover,
        title: description,
      }
    },
  },
})
