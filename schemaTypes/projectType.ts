import {defineField, defineType} from 'sanity'

type ProjectArea = 'neon' | 'ether' | 'clock' | 'obsid'

const projectAreas: {title: string; value: ProjectArea}[] = [
  {title: 'Neon', value: 'neon'},
  {title: 'Ether', value: 'ether'},
  {title: 'Clock', value: 'clock'},
  {title: 'Obsid', value: 'obsid'},
]

const isProjectArea = (value: unknown): value is ProjectArea =>
  typeof value === 'string' && projectAreas.some((area) => area.value === value)

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'string',
      options: {list: projectAreas},
      validation: (rule) =>
        rule.required().custom((value) => {
          if (value === undefined) return 'Area is required'
          return isProjectArea(value) ? true : 'Area must be one of the predefined values'
        }),
    }),
    defineField({name: 'cardTitle', title: 'Card Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'cardSubtitle', title: 'Card Subtitle', type: 'string'}),
    defineField({name: 'cardNote', title: 'Card Note', type: 'text', rows: 2}),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'cardImageUrl', title: 'Card Image URL', type: 'url'}),
    defineField({name: 'cardImageAlt', title: 'Card Image Alt', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'kicker', title: 'Kicker', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3, validation: (rule) => rule.required()}),
    defineField({name: 'overview', title: 'Overview', type: 'text', rows: 6, validation: (rule) => rule.required()}),
    defineField({name: 'role', title: 'Role', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'pipeline',
      title: 'Pipeline',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({name: 'timeline', title: 'Timeline', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        defineField({
          name: 'metric',
          title: 'Metric',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required()}),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'heroImageUrl', title: 'Hero Image URL', type: 'url'}),
    defineField({name: 'heroImageAlt', title: 'Hero Image Alt', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineField({
          name: 'galleryItem',
          title: 'Gallery Item',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({name: 'imageUrl', title: 'Image URL', type: 'url'}),
            defineField({name: 'alt', title: 'Alt', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({name: 'order', title: 'Order', type: 'number'}),
  ],
})
