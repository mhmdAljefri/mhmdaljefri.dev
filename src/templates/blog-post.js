import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/wrapper"
import Img from "gatsby-image"
import SocialShare from "../components/social-share"
import { Box, useColorMode } from "theme-ui"
import Layout from "../components/layout"
import CodeHighlightStyle from "../components/CodeHighlight.style"
import useBoxShadow from "../hooks/useBoxShadow"

export default function BlogPost({ data }) {
  const [mode] = useColorMode()
  console.log({ data, mode })
  const {
    frontmatter: { image, title },
    html,
  } = data.markdownRemark

  const boxShadow = useBoxShadow(null, null, "150px")

  return (
    <Layout title={title}>
      <CodeHighlightStyle />
      <Wrapper>
        <Box
          sx={{
            width: "100%",
            marginTop: 50,
            marginBottom: 70,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow,
          }}
        >
          <Img fluid={image?.childImageSharp.fluid || {}} />
        </Box>

        <Box as="h1">{title}</Box>
        <SocialShare />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Layout>
  )
}

export const blogQuery = graphql`
  query myBlogPostQuery($path: String!) {
    markdownRemark(
      frontmatter: {}
      fileAbsolutePath: {}
      fields: { slug: { eq: $path } }
    ) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        mediumURL
        title
      }
      html
      timeToRead
    }
  }
`
