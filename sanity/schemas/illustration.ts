import { defineField, defineType } from "sanity"

export default defineType({
  name: "illustration",
  title: "Illustration",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Sub title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "subtitle",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "illustrationImage",
      title: "Illustration image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})
