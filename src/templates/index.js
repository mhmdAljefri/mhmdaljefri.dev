import React from "react"
import { Box } from "theme-ui"
import Wrapper from "../components/wrapper"
import Skills from "../components/skills"
import ProjectsSectionContainer from "../containers/project-section-container"
import { graphql } from "gatsby"
import MogImage from "../components/mog-image"

const IndexPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description },
    },
    allMarkdownRemark: { edges },
  },
  pageContext: { translation, ...props }, // {nav, footer, a11y} see ./src/translations/global.[lang].json
}) => (
  <>
    <Wrapper>
      <Box as="h1" sx={{ marginY: 6, maxWidth: 500 }}>
        {description} <Skills />
      </Box>
      <MogImage />
    </Wrapper>
    <ProjectsSectionContainer {...translation} projects={edges} />
  </>
)

export default IndexPage

export const uery = graphql`
  query myIndexQuery($slug: String!, $lang: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { lang: { eq: $lang } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/projects/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            draft
            categories
            image {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            url
            description
            title
            from(locale: $lang, formatString: "DD-MMM-YY")
            to(locale: $lang, formatString: "DD-MMM-YY")
            present
          }
        }
      }
    }
  }
`
