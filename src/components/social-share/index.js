import React from "react"
import { Box } from "theme-ui"
import { useLocation } from "@reach/router"
import { twitter } from "react-icons-kit/fa/twitter"
import { facebook } from "react-icons-kit/fa/facebook"
import { useStaticQuery, graphql } from "gatsby"
import SocialIcon from "../social-icon"

const facebookLinkGenerator = page =>
  `https://www.facebook.com/sharer/sharer.php?u=${page}`
const twitterLinkGenerator = page => `http://www.twitter.com/share?url=${page}`

export default function SocialShare() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const { pathname } = useLocation()
  const url = `${site.siteMetadata.siteUrl}${pathname}`
  const shareFacebookLink = facebookLinkGenerator(url)
  const shareTwitterLink = twitterLinkGenerator(url)

  return (
    <Box>
      <SocialIcon icon={twitter} href={shareTwitterLink} />
      <SocialIcon icon={facebook} href={shareFacebookLink} />
    </Box>
  )
}
