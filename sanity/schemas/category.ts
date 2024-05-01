import { defineField, defineType } from "sanity"
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list"

export default defineType({
  title: "Category",
  name: "category",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "category" }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "Name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
      name: "categoryItems",
      title: "Category Items",
      type: "array",
      of: [
        defineField({
          name: "categoryItem",
          type: "categoryItem",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      cover: "categoryCover",
      name: "categoryName",
    },
    prepare({ cover, name }) {
      return {
        media: cover,
        title: name,
      }
    },
  },
})
