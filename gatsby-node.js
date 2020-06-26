const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const { resolve } = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const blogPostTemplate = resolve("./src/templates/blog-post.js")

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node)

  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // only news page parsed
  return await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark

    edges.forEach(({ node }) => {
      const {
        fields: { slug },
      } = node

      createPage({
        path: slug,
        component: blogPostTemplate,
      })
    })
  })
}
