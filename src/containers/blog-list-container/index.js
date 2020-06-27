import React from "react"
import BlogCard from "../../components/blog-card"
import { Flex } from "theme-ui"
import removeSlash from "../../utils/removeSlash"

export default function BlogListContainer({ posts }) {
  return (
    <Flex
      sx={{
        justifyContent: ["center", null, "space-between"],
        gap: 10,
        flexWrap: ["wrap", null, "nowrap"],
      }}
    >
      {posts.map(post => (
        <BlogCard
          {...getBlogProps(post)}
          style={{ maxWidth: 450, marginBottom: 20 }}
        />
      ))}
    </Flex>
  )
}

function getBlogProps({ node }) {
  const [path, code] = node.fields.slug.split(".")
  const to = `${code ? "/" + removeSlash(code) : ""}${code ? path : path}`
  return {
    to,
    title: node.frontmatter.title,
    excerpt: node.excerpt,
    fluid: node.frontmatter.image?.childImageSharp.fluid || {},
  }
}
