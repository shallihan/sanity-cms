import { GrArticle } from 'react-icons/gr';

export default {
  title: 'Article',
  name: 'article',
  type: 'document',
  icon: GrArticle,
  fields: [
    {
      title: 'Article Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Article Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    },
    {
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
      title: 'Article Creator',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'topic',
      type: 'reference',
      to: {type: 'topic'},
      title: 'Article Topic',
    },
    {
      title: 'Date Created',
      name: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
  ],
}
