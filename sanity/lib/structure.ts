export const structure = (S: any, context: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Info")
        .child(
          S.editor()
            .id("infoPage")
            .schemaType("infoPage")
            .documentId("infoPage")
        ),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !["infoPage"].includes(listItem.getId())
      ),
    ])
