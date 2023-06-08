export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: () => '📄',
  fields: [
    {
      title: 'Post Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Post Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
      title: 'Creator',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'topic',
      type: 'reference',
      to: {type: 'topic'},
      title: 'Topic',
    },
    {
      title: 'Date Created',
      name: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
  ],
}
