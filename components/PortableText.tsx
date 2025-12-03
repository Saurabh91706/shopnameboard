'use client'

import { PortableText as SanityPortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface PortableTextProps {
  content: any
}

// Convert blocks to plain text as fallback
const blocksToPlainText = (blocks: any[] = []): string => {
  if (!Array.isArray(blocks)) {
    return ''
  }
  
  return blocks
    .map((block) => {
      if (block.children && Array.isArray(block.children)) {
        return block.children
          .map((child: any) => {
            if (typeof child === 'string') {
              return child
            }
            if (child && typeof child === 'object' && typeof child.text === 'string') {
              return child.text
            }
            return ''
          })
          .join('')
      }
      return ''
    })
    .filter(Boolean)
    .join('\n\n')
}

// Validate and clean Portable Text content - more aggressive filtering
const validateContent = (content: any): any[] => {
  if (!Array.isArray(content)) {
    return []
  }
  
  // Flatten any accidentally nested arrays (up to 2 levels deep)
  let flatContent = content.flat(2)
  
  return flatContent
    .filter((item) => {
      // Must be an object with _type
      if (!item || typeof item !== 'object' || !item._type) {
        return false
      }
      return true
    })
    .map((item) => {
      // If it's a block, ensure children are valid
      if (item._type === 'block' && Array.isArray(item.children)) {
        return {
          ...item,
          children: item.children.filter((child: any) => {
            // Remove any nested block objects
            if (child && typeof child === 'object' && child._type === 'block') {
              console.warn('PortableText: Filtering out nested block', child)
              return false
            }
            // Keep spans and text nodes
            return true
          })
        }
      }
      
      return item
    })
    .filter((item) => {
      // Remove blocks that have no valid children
      if (item._type === 'block') {
        return Array.isArray(item.children) && item.children.length > 0
      }
      return true
    })
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value || !value.asset) {
        return null
      }
      
      try {
        const imageUrl = urlFor(value).width(1200).url()
        if (!imageUrl) {
          return null
        }
        
        return (
          <div className="my-8">
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              width={1200}
              height={600}
              className="rounded-xl w-full"
            />
            {value.caption && (
              <p className="text-center text-gray-600 text-sm mt-2 italic">
                {value.caption}
              </p>
            )}
          </div>
        )
      } catch (error) {
        console.error('Error rendering image:', error)
        return null
      }
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-black text-gray-900 mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-black text-gray-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-red-600 pl-6 py-2 my-6 italic text-gray-700 bg-red-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      if (!value?.href) return <>{children}</>
      const target = value.href.startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-red-600 hover:text-red-700 underline font-semibold"
        >
          {children}
        </a>
      )
    },
  },
  // Handle unknown block types
  unknownType: ({ value, isInline }) => {
    console.warn('PortableText: Unknown block type', value?._type, value)
    return null
  },
  // Handle unknown marks
  unknownMark: ({ value, children }) => {
    console.warn('PortableText: Unknown mark type', value?._type, value)
    return <>{children}</>
  },
}

export default function PortableText({ content }: PortableTextProps) {
  if (!content) {
    return null
  }
  
  // 🔍 DEBUG: Log the raw content structure (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('Raw Portable Text content:', JSON.stringify(content, null, 2))
    
    // Check for nested blocks
    const hasNestedBlocks = Array.isArray(content) && content.some((item: any) => 
      item?._type === 'block' && 
      item.children?.some((child: any) => child?._type === 'block')
    )
    
    if (hasNestedBlocks) {
      console.error('⚠️ FOUND NESTED BLOCKS IN CONTENT!')
    }
  }
  
  // Validate and clean content
  const validContent = validateContent(content)
  
  if (validContent.length === 0) {
    console.warn('PortableText: No valid content after validation', content)
    // Fallback to plain text
    const plainText = blocksToPlainText(content)
    if (plainText) {
      return (
        <div className="prose prose-lg prose-red max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {plainText}
          </div>
        </div>
      )
    }
    return null
  }
  
  try {
    // Double-check: ensure no block objects are in the content
    const finalCheck = validContent.every((item: any) => {
      if (item._type === 'block' && Array.isArray(item.children)) {
        return item.children.every((child: any) => {
          // Children should be spans, not blocks
          return !child || child._type !== 'block'
        })
      }
      return true
    })
    
    if (!finalCheck) {
      console.error('PortableText: Invalid content structure detected after validation')
      const plainText = blocksToPlainText(content)
      if (plainText) {
        return (
          <div className="prose prose-lg prose-red max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {plainText}
            </div>
          </div>
        )
      }
      return null
    }
    
    return (
      <div className="prose prose-lg prose-red max-w-none">
        <SanityPortableText value={validContent} components={components} />
      </div>
    )
  } catch (error) {
    console.error('PortableText rendering error:', error)
    console.error('Content structure:', JSON.stringify(content, null, 2))
    console.error('Validated content:', JSON.stringify(validContent, null, 2))
    
    // Fallback to plain text rendering
    const plainText = blocksToPlainText(content)
    if (plainText) {
      return (
        <div className="prose prose-lg prose-red max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {plainText}
          </div>
        </div>
      )
    }
    
    return (
      <div className="text-red-600 p-4 bg-red-50 rounded-lg">
        <p className="font-semibold">Error rendering content</p>
        <p className="text-sm mt-2">Check console for details.</p>
      </div>
    )
  }
}
