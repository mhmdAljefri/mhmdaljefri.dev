import React from "react"
import BlogCard from "../../components/blog-card"
import { Grid } from "theme-ui"
import removeSlash from "../../utils/removeSlash"

export default function BlogListContainer({ posts }) {
  return (
    <Grid columns={[1, 2, 3, 3, 4]}>
      {posts.map(post => (
        <BlogCard
          {...getBlogProps(post)}
          style={{ maxWidth: 450, flex: "0 0 350", m: 20 }}
        />
      ))}
    </Grid>
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
