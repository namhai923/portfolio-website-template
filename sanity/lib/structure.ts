import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"

export const structure = (S: any, context: any) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({ type: "category", S, context }),
      S.listItem()
        .title("About")
        .child(S.editor().id("about").schemaType("about").documentId("about")),
      S.listItem()
        .title("Contact")
        .child(
          S.editor().id("contact").schemaType("contact").documentId("contact")
        ),
      S.listItem()
        .title("Navigation")
        .child(
          S.editor()
            .id("navigation")
            .schemaType("navigation")
            .documentId("navigation")
        ),
    ])
