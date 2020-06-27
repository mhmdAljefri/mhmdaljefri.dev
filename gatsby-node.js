const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const { createFilePath } = require("gatsby-source-filesystem")
const blog = require("./src/node/blog")
const pages = require("./src/node/pages")
const removeSlash = require("./src/utils/removeSlash")

const sections = [blog, pages]

// gloabl configuration for each section can be writin @here
exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node)

  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const lang = removeSlash(value.split(".")[1] || "")

    createNodeField({
      name: `slug`,
      node,
      value,
    })
    /**
     * this field created to help us on filtering blog and other sites
     * with @param {fields.lang} we can filter sites list based on language and many cases like so
     */
    createNodeField({
      name: `lang`,
      node,
      value: lang,
    })
  }
}

// create each section independently
// look at https://github.com/gatsbyjs/gatsby/blob/master/www/gatsby-node.js#L18
exports.createPages = async helpers => {
  await Promise.all(sections.map(section => section.createPages(helpers)))
}
