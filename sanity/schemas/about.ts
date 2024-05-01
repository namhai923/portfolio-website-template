import { defineField, defineType } from "sanity"

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "cover",
      title: "Cover",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "aboutItems",
      title: "About Items",
      type: "array",
      of: [
        defineField({
          name: "aboutItem",
          type: "aboutItem",
        }),
      ],
    }),
    defineField({
      name: "contactMessage",
      title: "Contact Message",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        { name: "subtitle", type: "string" },
      ],
    }),
    defineField({
      name: "footerMessage",
      title: "Footer Message",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
        },
        { name: "subtitle", type: "string" },
      ],
    }),
  ],
})
