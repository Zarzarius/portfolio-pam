import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'defaultDescription',
      title: 'Default Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerNav',
      title: 'Header Navigation',
      type: 'array',
      of: [
        defineField({
          name: 'navItem',
          title: 'Nav Item',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required()}),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'hireMeLabel',
      title: 'Hire Me Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footerEmail',
      title: 'Footer Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footerStatusText',
      title: 'Footer Status Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'href', title: 'URL', type: 'url', validation: (rule) => rule.required()}),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
})
