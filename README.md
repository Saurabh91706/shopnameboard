# Shop Name Boards Website

A modern, responsive website for a shop name board business built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Server-Side Rendering (SSR)** - All pages are server-rendered for optimal performance
- **Responsive Design** - Mobile-first design that works on all devices
- **Modern UI** - Beautiful, clean interface with Tailwind CSS
- **Fast Performance** - Optimized for speed and SEO

## Pages

- **Home** - Hero section, features, services overview, gallery preview, and CTA
- **Services** - Detailed service listings with pricing
- **Gallery** - Portfolio showcase of completed projects
- **Contact** - Contact form and business information

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework with SSR
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first CSS framework
- **React 18** - UI library

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with Navbar and Footer
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── services/        # Services page
│   ├── gallery/         # Gallery page
│   └── contact/         # Contact page
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── Services.tsx     # Services preview
│   ├── Gallery.tsx      # Gallery preview
│   └── CTA.tsx          # Call-to-action section
└── package.json         # Dependencies
```

## Customization

- Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`
- Modify colors in `tailwind.config.js`
- Add your own images to the gallery sections
- Customize service offerings in `app/services/page.tsx`

