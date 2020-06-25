import { useStaticQuery, graphql } from "gatsby"

export default function useBlogPostsListQuery() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogPostsQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/blog/" }
        }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 200)

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
  `)

  return allMarkdownRemark.edges
}
