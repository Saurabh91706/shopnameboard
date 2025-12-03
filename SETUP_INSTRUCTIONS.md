# Quick Setup Instructions

## 1. Install Required Packages

Run this command to install Sanity packages:

```bash
npm install @sanity/client @sanity/image-url @portabletext/react
```

## 2. Create Environment File

Create a file named `.env.local` in the root directory with the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=1vvt3xz5
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sklKhboCcaWDGrhcWI3RgVUP1b9JUqpaNxMyfRILoTLdqclZOqGc8Oft2ndqGnopOjJHhEwqZsaSzuN7mNLawkl0iGV1FOs9LPQod3zYOH2JDG38l2Ty34fldgIHXOcZO1MK5oYYgM8YvmMsYI9D2zobK6sdIzeSMf714OHo4di81IlORwOY
```

**Important**: The `.env.local` file is already in `.gitignore` and will NOT be committed to git.

## 3. Sanity Studio Setup (Optional - for content management)

If you want to set up Sanity Studio to manage your blog content:

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Initialize Sanity (if not already done)
sanity init

# Use these settings:
# - Project ID: 1vvt3xz5
# - Dataset: production
# - Use the schemas from sanity/schema/ folder
```

## 4. Your Sanity Credentials

- **Project ID**: `1vvt3xz5`
- **Organization ID**: `op0oqwDDZ`
- **Dataset**: `production` (default)
- **API Token**: (configured in .env.local)

## 5. Test the Connection

After creating `.env.local`, restart your Next.js dev server:

```bash
npm run dev
```

Then visit: `http://localhost:3000/blog`

The blog pages will automatically fetch content from your Sanity project.

## Next Steps

1. Create blog posts in Sanity Studio (or via API)
2. Use the schema defined in `sanity/schema/post.ts` which includes:
   - Basic fields (title, slug, body, etc.)
   - AEO/GEO fields (tldr, faqs, howToSteps, review)
   - SEO fields (categories, featured, mainImage)

3. The blog pages will automatically:
   - Fetch posts from Sanity
   - Generate JSON-LD schema for SEO
   - Display content with beautiful UI
   - Show TL;DR, FAQs, How-To sections when available

## Security Notes

- ✅ `.env.local` is in `.gitignore` - your API token is safe
- ✅ API token is only used for write operations (optional)
- ✅ Project ID is safe to expose (it's public in the frontend)
- ⚠️ Never commit `.env.local` to git
- ⚠️ Never share your API token publicly

