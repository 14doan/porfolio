import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      description: 'social platform',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'url',
      type: 'url',
    }),
  ],
});
