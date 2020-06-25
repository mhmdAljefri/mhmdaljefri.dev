import { useStaticQuery, graphql } from "gatsby"

export default function useProjectsListQuery() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/projects/" }
        }
      ) {
        edges {
          node {
            frontmatter {
              company
              companyUrl
              draft
              categories
              image {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              projectUrl
              title
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges
}
