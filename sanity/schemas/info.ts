import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'info',
  title: 'info',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutImage',
      title: 'aboutImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      // fields: [
      //   {
      //     name: 'alt',
      //     type: 'string',
      //     title: 'Alternative Text',
      //   },
      // ],
    }),
    defineField({
      name: 'aboutTitle',
      title: 'aboutTitle',
      type: 'string',
    }),
    defineField({
      name: 'aboutBody',
      title: 'aboutBody',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'phoneNumber',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'address',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    }),
    defineField({
      name: 'typewriter',
      title: 'typewriter',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),

    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),
  ],
});
