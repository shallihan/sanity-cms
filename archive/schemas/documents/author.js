import { BsPersonLinesFill } from 'react-icons/bs'

export default {
    name: "author",
    title: "Author",
    type: "document",
    icon: BsPersonLinesFill,
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "notes",
        title: "Notes",
        type: "array",
        of: [
          {
            title: "Block",
            type: "block",
            styles: [{ title: "Normal", value: "normal" }],
            lists: [],
            marks: {
                decorators: [],
                annotations: []
            }
          },
        ],
      }
    ],
    preview: {
      select: {
        title: "name",
        media: "image"
      },
    },
  };