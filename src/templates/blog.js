import React from "react"
import Wrapper from "../components/wrapper"
import { Box } from "theme-ui"
import BlogListContainer from "../containers/blog-list-container"
import { graphql } from "gatsby"

export default function Blog({
  data: {
    markdownRemark: {
      frontmatter: { title, description },
    },
    allMarkdownRemark: { edges },
  },
  pageContext: { globalTranslations }, // {nav, footer, a11y} see ./src/translations/global.[lang].json
}) {
  return (
    <>
      <Wrapper>
        <Box as="h1" sx={{ marginY: 6, maxWidth: 500 }}>
          {description}
        </Box>
        <BlogListContainer posts={edges} />
      </Wrapper>
    </>
  )
}

export const uery = graphql`
  query myBlogQuery($slug: String!, $lang: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        title
      }
      html
    }
    allMarkdownRemark(
      filter: {
        fields: { lang: { eq: $lang } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/content/blog/" }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)

          fields {
            slug
          }
          frontmatter {
            title
            mediumURL
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
