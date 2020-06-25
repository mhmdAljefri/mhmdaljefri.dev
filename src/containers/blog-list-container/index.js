import React from "react"
import useBlogPostsListQuery from "../../hooks/useBlogPostsListQuery"
import BlogCard from "../../components/blog-card"

export default function BlogListContainer() {
  const posts = useBlogPostsListQuery()

  return (
    <div>
      {posts.map(post => (
        <BlogCard
          {...getBlogProps(post)}
          style={{ maxWidth: 450, marginBottom: 20 }}
        />
      ))}
    </div>
  )
}

function getBlogProps({ node }) {
  return {
    to: node.fields.slug,
    title: node.frontmatter.title,
    excerpt: node.excerpt,
    fluid: node.frontmatter.image?.childImageSharp.fluid || {},
  }
}
