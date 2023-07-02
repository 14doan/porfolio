import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      description: 'skillName',
      type: 'string',
    }),
    defineField({
      name: 'skillImage',
      title: 'skillImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'progress',
      title: 'progress',
      description: 'from 0 to 100',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
  ],
});
