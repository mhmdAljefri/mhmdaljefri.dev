import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/wrapper"

const NotFoundPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
    },
  },
}) => (
  <>
    <Wrapper style={{ marginTop: 5 }}>
      <h1>{title}</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  </>
)

export default NotFoundPage

export const uery = graphql`
  query notFoundPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        title
      }
      html
    }
  }
`
