# Sanity CMS Setup Guide

## Installation

Install the required Sanity packages:

```bash
npm install @sanity/client @sanity/image-url @portabletext/react
```

## Environment Variables

The `.env.local` file has been created with your Sanity credentials:
- Project ID: `1vvt3xz5`
- Dataset: `production`
- API Token: (configured for write operations)

**Important Security Note**: 
- The `.env.local` file is already in `.gitignore` and won't be committed to git
- Never commit API keys or tokens to version control
- The API token is only needed if you want to create/update content from the frontend

## Sanity Studio Setup

1. Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

2. Initialize Sanity in your project:
```bash
sanity init
```

3. Use the schemas provided in `sanity/schema/`:
   - `post.ts` - Blog post schema with all AEO/GEO fields
   - `author.ts` - Author schema

4. Configure `sanity.config.ts`:
```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Shop Name Boards Blog',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
```

## Blog Post Schema Features

The blog post schema includes:

- **Basic Fields**: title, slug, excerpt, body, author, categories
- **AEO/GEO Optimizations**:
  - `tldr` - Quick answer (50-120 words) for AI engines
  - `faqs` - FAQ questions and answers for FAQPage schema
  - `howToSteps` - Step-by-step guide for HowTo schema
  - `review` - Customer review for Review schema
- **SEO Fields**: mainImage, publishedAt, featured flag

## Usage

1. Start Sanity Studio:
```bash
sanity start
```

2. Create blog posts with all the AEO/GEO fields filled in

3. The blog pages will automatically fetch and display posts from Sanity

## JSON-LD Schema

The blog slug page automatically generates comprehensive JSON-LD schema including:
- WebSite & Organization
- LocalBusiness & Service
- Article
- FAQPage (if FAQs are provided)
- HowTo (if steps are provided)
- Review (if review is provided)
- BreadcrumbList

All schema is automatically generated based on the post content!

