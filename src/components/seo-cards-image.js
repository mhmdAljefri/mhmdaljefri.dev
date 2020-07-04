/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

function SEOCardsImages({ image }) {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const imageLink = siteUrl + image
  return (
    <Helmet>
      <meta name="twitter:image" content={imageLink} />
      <meta property="og:image" content={imageLink} />
      <link rel="image_src" href={imageLink} />
    </Helmet>
  )
}

SEOCardsImages.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEOCardsImages.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEOCardsImages
