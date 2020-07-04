/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useColorMode } from "theme-ui"

function SEO({ description, lang, meta, card, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            keywords
            languages {
              code
              default
              dir
            }
          }
        }
      }
    `
  )
  const isDark = useColorMode()[0] !== "light"
  const { pathname } = useLocation()
  const themeColor = isDark ? "#000" : "#fff"
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const {
    dir: defaultLangDir,
    code: defaultLangCode,
  } = site.siteMetadata.languages.find(language => language.default)

  const { dir } = site.siteMetadata.languages.find(
    language => language.code === lang
  ) || { dir: defaultLangDir }
  const metaDescription = description || site.siteMetadata.description

  if (typeof window !== "undefined")
    window.languages = site.siteMetadata.languages
  return (
    <Helmet
      htmlAttributes={{
        lang: lang || defaultLangCode,
        dir,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        { name: "theme-color", content: themeColor },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: card ? card : `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: image,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
