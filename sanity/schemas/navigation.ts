import { defineField, defineType } from "sanity"

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "homeLabel",
      title: "Home Label",
      type: "string",
      initialValue: "Home",
    }),
    defineField({
      name: "firstGroup",
      title: "First Group",
      type: "string",
    }),
    defineField({
      name: "secondGroup",
      title: "Second Group",
      type: "string",
    }),
    defineField({
      name: "aboutLabel",
      title: "About Label",
      type: "string",
      initialValue: "About",
    }),
    defineField({
      name: "contactLabel",
      title: "Contact Label",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          name: "social",
          title: "Social",
          type: "object",
          fields: [
            {
              title: "URL / Link",
              name: "socialUrl",
              type: "url",
            },
            {
              title: "Type",
              name: "socialType",
              type: "string",
              options: {
                list: [
                  { title: "Youtube", value: "youtube" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Facebook", value: "facebook" },
                  { title: "X (Twitter)", value: "x" },
                  { title: "Instagram", value: "instagram" },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
})
