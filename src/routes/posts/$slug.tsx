// src/routes/posts/$slug.tsx
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { client } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'

interface Post {
  title: string
  mainImage?: {
    asset: {
      url: string
    }
  }
  publishedAt: string
  author?: {
    name: string
  }
  body: any[]
}

export const Route = createFileRoute('/posts/$slug')({
  component: PostPage,
})

function PostPage() {
  const { slug } = Route.useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        mainImage {
          asset-> {
            url
          }
        },
        publishedAt,
        author-> {
          name
        },
        body
      }`

      try {
        const post = await client.fetch(query, { slug })
        setPost(post)
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (isLoading) return <div>Loading...</div>
  if (!post) return <div>Post not found</div>

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.author && (
        <p className="text-gray-600 mb-2">By {post.author.name}</p>
      )}
      <p className="text-gray-500 mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.mainImage && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}