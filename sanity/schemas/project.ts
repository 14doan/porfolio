import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      description: 'titleName',
      type: 'string',
    }),
    defineField({
      name: 'projectImage',
      title: 'projectImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'summary',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    }),
    defineField({
      name: 'projectLink',
      title: 'projectLink',
      type: 'url',
    }),
  ],
});
