import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/wrapper"
import Img from "gatsby-image"
import SocialShare from "../components/social-share"
import { Box } from "theme-ui"
import useBoxShadow from "../hooks/useBoxShadow"

export default function BlogPost({
  data: {
    markdownRemark: {
      frontmatter: { image, title },
      html,
    },
  },
}) {
  const boxShadow = useBoxShadow(null, null, "150px")

  return (
    <>
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
    </>
  )
}

export const blogQuery = graphql`
  query myBlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
