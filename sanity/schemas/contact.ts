import { defineField, defineType } from "sanity"

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "contactItems",
      title: "Contact Items",
      type: "array",
      of: [
        defineField({
          name: "contactItem",
          type: "contactItem",
        }),
      ],
    }),
    defineField({
      name: "formMessage",
      title: "Form Message",
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
