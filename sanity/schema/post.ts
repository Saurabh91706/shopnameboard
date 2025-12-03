export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // ========== BASIC INFORMATION ==========
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(70).warning('Titles should be under 70 characters for optimal SEO'),
      description: 'Main title of the blog post (keep under 70 characters)',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(200).warning('Excerpts should be under 200 characters'),
      description: 'Short summary for previews and meta descriptions (150-200 characters)',
    },

    // ========== SEO OPTIMIZATION ==========
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule: any) => Rule.max(60).warning('Meta titles should be 50-60 characters for optimal SEO'),
          description: 'Custom SEO title (if different from main title). Leave empty to use main title.',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule: any) => Rule.max(160).warning('Meta descriptions should be 150-160 characters'),
          description: 'Custom SEO description (if different from excerpt). Leave empty to use excerpt.',
        },
        {
          name: 'focusKeyword',
          title: 'Primary Focus Keyword',
          type: 'string',
          description: 'Main keyword this post targets (e.g., "shop name boards Bangalore")',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
          description: 'Additional keywords for SEO (comma-separated)',
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Canonical URL if this content is republished (leave empty for original)',
        },
        {
          name: 'noindex',
          title: 'No Index',
          type: 'boolean',
          initialValue: false,
          description: 'Prevent search engines from indexing this page',
        },
        {
          name: 'nofollow',
          title: 'No Follow',
          type: 'boolean',
          initialValue: false,
          description: 'Tell search engines not to follow links on this page',
        },
      ],
    },

    // ========== AEO/GEO OPTIMIZATION ==========
    {
      name: 'tldr',
      title: 'TL;DR (Quick Answer)',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.max(200).warning('TL;DR should be 50-120 words for optimal AEO'),
      description: '50-120 word quick answer for AI engines and featured snippets. This is critical for AEO/GEO.',
    },
    {
      name: 'quickFacts',
      title: 'Quick Facts (Key Points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: '3-5 key bullet points that answer the main question (for featured snippets)',
    },
    {
      name: 'mainQuestion',
      title: 'Main Question This Post Answers',
      type: 'string',
      description: 'The primary question this blog post answers (for AEO optimization)',
    },

    // ========== CONTENT ==========
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule: any) => Rule.required().warning('Alt text is required for SEO and accessibility'),
          description: 'Descriptive alt text for the image (include keywords naturally)',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Image caption (optional)',
        },
      ],
      validation: (Rule: any) => Rule.required().warning('Main image is required for SEO'),
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    name: 'target',
                    type: 'string',
                    title: 'Target',
                    options: {
                      list: [
                        { title: 'Same Window', value: '_self' },
                        { title: 'New Window', value: '_blank' },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },

    // ========== CATEGORIZATION ==========
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule: any) => Rule.required().min(1).warning('At least one category is required'),
      description: 'Enter categories for this post. Examples: "Shop Name Boards", "ACP Boards", "LED Signage", "Installation Guide", "Design Tips", "Marketing", "Manufacturing", "Local Business", "Maintenance", "Fabric Light Boxes". Add multiple categories separated by pressing Enter.',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Additional tags for better categorization and internal linking',
    },

    // ========== FAQ SECTION (AEO/GEO) ==========
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule: any) => Rule.required().max(100).warning('Questions should be concise (under 100 characters)'),
              description: 'FAQ question (will be used in FAQPage schema)',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (Rule: any) => Rule.required().max(300).warning('Answers should be 2-3 sentences (under 300 characters)'),
              description: 'Direct, concise answer (2-3 sentences max for AEO)',
            },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        },
      ],
      description: 'FAQ questions and answers for FAQPage schema markup (critical for AEO/GEO)',
    },

    // ========== HOW-TO SECTION (AEO/GEO) ==========
    {
      name: 'howToSteps',
      title: 'How-To Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Step Name/Title',
              type: 'string',
              validation: (Rule: any) => Rule.required().max(60),
              description: 'Short step title (e.g., "Assess location & visibility")',
            },
            {
              name: 'text',
              title: 'Step Description',
              type: 'text',
              rows: 3,
              validation: (Rule: any) => Rule.required().max(200),
              description: 'Detailed step description (2-3 sentences)',
            },
            {
              name: 'image',
              title: 'Step Image (Optional)',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'text',
            },
          },
        },
      ],
      description: 'Step-by-step guide for HowTo schema markup (3-6 steps recommended)',
    },

    // ========== REVIEW SECTION (SEO) ==========
    {
      name: 'review',
      title: 'Customer Review',
      type: 'object',
      fields: [
        {
          name: 'author',
          title: 'Reviewer Name',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'date',
          title: 'Review Date',
          type: 'date',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'rating',
          title: 'Rating',
          type: 'number',
          validation: (Rule: any) => Rule.required().min(1).max(5).integer(),
          description: 'Rating from 1 to 5',
        },
        {
          name: 'body',
          title: 'Review Text',
          type: 'text',
          rows: 3,
          validation: (Rule: any) => Rule.required().max(500),
        },
      ],
      description: 'Customer review for Review schema markup (adds social proof)',
    },

    // ========== RELATED CONTENT ==========
    {
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'post' },
        },
      ],
      description: 'Manually select related posts for better internal linking',
    },
    {
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Enter related services mentioned in this post. Examples: "ACP 3D Board", "Fabric Light Box", "LED Signage", "Glow Sign Board", "Flange Signs", "Arch Gates", "3D Letter Signage", "Non-Lit Boards", "Backlit Signage". Add multiple services separated by pressing Enter. This helps with internal linking and SEO.',
    },

    // ========== LOCAL SEO ==========
    {
      name: 'targetCities',
      title: 'Target Cities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Enter cities this post targets for local SEO. Examples: "Bangalore", "Mumbai", "Delhi", "Chennai", "Pune", "Kolkata", "Hyderabad", "Ahmedabad", "Jaipur", "Lucknow", "Indore", "Patna", "Bhopal", "Visakhapatnam", "Surat", "Kanpur", "Nagpur", "Coimbatore", "Vadodara", "Ghaziabad". Add multiple cities separated by pressing Enter. This helps the post rank for city-specific searches like "shop name boards in Bangalore".',
    },
    {
      name: 'localKeywords',
      title: 'Local Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'City-specific keywords (e.g., "shop name boards Bangalore")',
    },

    // ========== PUBLICATION ==========
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
      description: 'Publication date and time',
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      description: 'Last update date (important for SEO - shows fresh content)',
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as featured to highlight on blog listing',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule: any) => Rule.required(),
    },

    // ========== SOCIAL SHARING ==========
    {
      name: 'social',
      title: 'Social Media',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Custom image for social sharing (1200x630px recommended). Leave empty to use main image.',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'ogTitle',
          title: 'Open Graph Title',
          type: 'string',
          description: 'Custom title for social sharing. Leave empty to use main title.',
        },
        {
          name: 'ogDescription',
          title: 'Open Graph Description',
          type: 'text',
          rows: 2,
          description: 'Custom description for social sharing. Leave empty to use excerpt.',
        },
        {
          name: 'twitterCard',
          title: 'Twitter Card Type',
          type: 'string',
          options: {
            list: [
              { title: 'Summary', value: 'summary' },
              { title: 'Summary Large Image', value: 'summary_large_image' },
            ],
          },
          initialValue: 'summary_large_image',
        },
      ],
    },

    // ========== ANALYTICS & TRACKING ==========
    // Note: Reading time and word count can be calculated from body content
    // These fields are optional and can be manually entered if needed
    {
      name: 'readingTime',
      title: 'Estimated Reading Time (minutes)',
      type: 'number',
      description: 'Estimated reading time in minutes (optional - can be auto-calculated)',
    },
    {
      name: 'wordCount',
      title: 'Word Count',
      type: 'number',
      description: 'Word count (optional - can be auto-calculated from body)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      status: 'status',
      publishedAt: 'publishedAt',
    },
    prepare(selection: any) {
      const { author, status, publishedAt } = selection
      const statusEmoji = status === 'published' ? '✅' : status === 'draft' ? '📝' : '📦'
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No date'
      return {
        ...selection,
        subtitle: `${statusEmoji} ${author ? `by ${author}` : 'No author'} • ${date}`,
      }
    },
  },
}
