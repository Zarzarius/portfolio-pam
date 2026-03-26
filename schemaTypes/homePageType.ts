import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({name: 'heroKicker', title: 'Hero Kicker', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'heroTitle', title: 'Hero Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlight',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Hero Primary CTA Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroPrimaryCtaHref',
      title: 'Hero Primary CTA Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Hero Secondary CTA Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSecondaryCtaHref',
      title: 'Hero Secondary CTA Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroPillLeft',
      title: 'Hero Pill Left',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroPillRight',
      title: 'Hero Pill Right',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredTitle',
      title: 'Featured Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredDescription',
      title: 'Featured Section Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'precisionTitle',
      title: 'Precision Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'precisionDescription',
      title: 'Precision Section Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'precisionModes',
      title: 'About Section Images (3)',
      type: 'array',
      of: [
        defineField({
          name: 'mode',
          title: 'Mode',
          type: 'object',
          validation: (rule) =>
            rule.custom((value) => {
              if (!value) {
                return 'Mode is required'
              }
              if (!value.image && !value.imageUrl) {
                return 'Provide either an uploaded image or an image URL'
              }
              return true
            }),
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'imageUrl', title: 'Image URL', type: 'url'}),
            defineField({name: 'alt', title: 'Image Alt', type: 'string', validation: (rule) => rule.required()}),
          ],
        }),
      ],
      validation: (rule) => rule.required().length(3),
    }),
    defineField({
      name: 'precisionStats',
      title: 'Precision Stats',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({name: 'showreelKicker', title: 'Showreel Kicker', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'showreelTitle', title: 'Showreel Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'showreelBody',
      title: 'Showreel Body',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showreelCtaLabel',
      title: 'Showreel CTA Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showreelCtaHref',
      title: 'Showreel CTA Link',
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
