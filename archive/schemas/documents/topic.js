import { MdOutlineTopic } from 'react-icons/md'

export default {
    name: "topic",
    title: "Topic",
    type: "document",
    icon: MdOutlineTopic,
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