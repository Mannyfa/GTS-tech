// schemaTypes/project.js
export default {
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category (e.g., Full Ecosystem, Brand Positioning)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags (e.g., React, System Architecture)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'mainImage',
      title: 'Main Project Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show up first (e.g., 1, 2, 3)',
    }
  ],
};