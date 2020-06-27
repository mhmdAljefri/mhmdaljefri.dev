import React from "react"
import Wrapper from "../components/wrapper"
import { Box } from "theme-ui"
import Form from "../components/form"
import { graphql } from "gatsby"

export default function Contact({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, fields },
    },
  },
  pageContext: { globalTranslations }, // {nav, footer, a11y} see ./src/translations/global.[lang].json
}) {
  return (
    <>
      <Wrapper>
        <Box as="h1" sx={{ marginY: 6 }}>
          <span dangerouslySetInnerHTML={{ __html: html }} />
        </Box>

        <Form fields={fields} />
      </Wrapper>
    </>
  )
}

export const uery = graphql`
  query myContactQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        title
      }
      html
    }
  }
`
