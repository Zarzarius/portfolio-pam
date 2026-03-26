import {defineField, defineType} from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({name: 'kicker', title: 'Kicker', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'portraitImage',
      title: 'Portrait Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'portraitImageUrl', title: 'Portrait Image URL', type: 'url'}),
    defineField({
      name: 'portraitImageAlt',
      title: 'Portrait Image Alt',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'nameMark', title: 'Name Mark', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'cardTitle',
      title: 'Card Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cardSubtitle',
      title: 'Card Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'formNameLabel',
      title: 'Form Name Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'formEmailLabel',
      title: 'Form Email Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'formDetailsLabel',
      title: 'Form Details Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'formSubmitLabel',
      title: 'Form Submit Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'formEmailTo',
      title: 'Form Email To',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
})
