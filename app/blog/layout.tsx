import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Insights | Shop Name Boards Manufacturing & Marketing',
  description: 'Expert guides, tips, and insights on shop name boards manufacturing, marketing, and installation. Learn about ACP 3D Boards, LED Signage, Fabric Light Boxes, and more.',
  openGraph: {
    title: 'Blog & Insights | The Mediaverse',
    description: 'Expert guides on shop name boards manufacturing and marketing',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

