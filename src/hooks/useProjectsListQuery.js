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
              draft
              categories
              image {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              url
              description
              title
              from(formatString: "DD-MMM-YY")
              to(formatString: "DD-MMM-YY")
              present
            }
          }
        }
      }
    }
  `)

  return allMarkdownRemark.edges
}
