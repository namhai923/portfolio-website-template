import { defineField, defineType } from "sanity"

export const aboutItem = defineType({
  name: "aboutItem",
  title: "About Item",
  type: "object",
  fields: [
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
      }
    },
  },
})
