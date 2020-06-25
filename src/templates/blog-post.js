import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/wrapper"
import Img from "gatsby-image"
import SocialShare from "../components/social-share"
import { Box, Flex, useColorMode } from "theme-ui"
import Layout from "../components/layout"
import CodeHighlightStyle from "../components/CodeHighlight.style"

export default function BlogPost({ data }) {
  const [mode] = useColorMode()
  console.log({ data, mode })
  const {
    frontmatter: { image, mediumURL, title },
    html,
    timeToRead,
  } = data.markdownRemark

  return (
    <Layout>
      <CodeHighlightStyle />
      <Wrapper>
        <Box
          sx={{
            width: "100%",
            marginTop: 50,
            marginBottom: 70,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "10px 10px  150px #eee",
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
