// src/routes/posts.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'

interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage?: {
    asset: {
      url: string
    }
  }
  publishedAt: string
  author?: {
    name: string
  }
}

export const Route = createFileRoute('/posts')({
  component: PostsPage,
})

function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage {
          asset-> {
            url
          }
        },
        publishedAt,
        author-> {
          name
        }
      }`

      try {
        const posts = await client.fetch(query)
        setPosts(posts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) return <div>Loading...</div>
console.log('POSTS', posts);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            to="/posts/$slug"
            params={{ slug: post.slug.current }}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {post.mainImage && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              {post.author && (
                <p className="text-gray-600">By {post.author.name}</p>
              )}
              <p className="text-gray-500 text-sm">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}