const { resolve } = require("path")
const removeSlash = require("../utils/removeSlash")
const fetchTranslation = require("../utils/fetchTranslation")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // only news page parsed
  return await graphql(`
    {
      site {
        siteMetadata {
          languages {
            default
            code
            dir
          }
        }
      }
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const {
      blog: { edges: posts },
      site: {
        siteMetadata: { languages },
      },
    } = result.data
    const defaultLanguage = languages.find(lang => lang.default)
    const templateKey = "blog-post"
    const blogPostTemplate = resolve(`./src/templates/${templateKey}.js`)

    posts.forEach(({ node }) => {
      const {
        frontmatter: { title },
        fields: { slug },
      } = node
      const [slugPath, langCode = defaultLanguage.code] = slug.split(".")
      const langCodeWithoutSlash = removeSlash(langCode)
      const postLanguageConfig = languages.find(lang =>
        langCode.includes(lang.code)
      )
      const dir = postLanguageConfig.dir
      const isDefaultLangPage = langCode === defaultLanguage.code
      const path = isDefaultLangPage
        ? slugPath
        : `/${langCodeWithoutSlash}${slugPath}/`
      const lang = isDefaultLangPage ? "" : langCodeWithoutSlash
      const translation = fetchTranslation(templateKey, langCodeWithoutSlash)
      const globalTranslations = fetchTranslation(
        "global",
        langCodeWithoutSlash
      )

      createPage({
        path,
        component: blogPostTemplate,
        context: {
          lang,
          dir,
          slug,
          translation,
          globalTranslations,
          title,
        },
      })
    })
  })
}
