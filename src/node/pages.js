const { resolve } = require("path")
const removeSlash = require("../utils/removeSlash")
const removeIndexKeyword = require("../utils/removeIndexKeyword")
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
        filter: { fileAbsolutePath: { regex: "/pages/" } }
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

    posts.forEach(({ node }) => {
      const {
        frontmatter: { title },
        fields: { slug },
      } = node
      const [slugPath, langCode = defaultLanguage.code] = slug.split(".") // for eg: /index.en/ => ['/index', 'en/']
      const langCodeWithoutSlash = removeSlash(langCode)
      const slugWithoutIndexKeyWord = removeIndexKeyword(slugPath)
      const templateKey = removeSlash(slugWithoutIndexKeyWord) || "index"
      const pageTemplate = resolve(`./src/templates/${templateKey}.js`)
      const postLanguageConfig = languages.find(
        lang => langCodeWithoutSlash === lang.code
      )

      const dir = postLanguageConfig.dir
      const isDefaultLangPage = langCodeWithoutSlash === defaultLanguage.code
      const path = isDefaultLangPage
        ? slugWithoutIndexKeyWord
        : `/${langCodeWithoutSlash}${slugWithoutIndexKeyWord}/`
      const lang = isDefaultLangPage ? "" : langCodeWithoutSlash
      const globalTranslations = fetchTranslation(
        "global",
        langCodeWithoutSlash
      )
      const translation = fetchTranslation(templateKey, langCodeWithoutSlash)

      createPage({
        path,
        component: pageTemplate,
        context: {
          lang,
          dir,
          slug,
          globalTranslations,
          translation,
          title,
        },
      })
    })
  })
}
