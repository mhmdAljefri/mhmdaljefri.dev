import React from "react"
import { Box } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import SocialIcon from "../social-icon"

import { twitter } from "react-icons-kit/fa/twitter"
import { youtube } from "react-icons-kit/fa/youtube"
import { facebook } from "react-icons-kit/fa/facebook"
import { github } from "react-icons-kit/fa/github"

export default function Social() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          github
          twitter
          facebook
          youtube
        }
      }
    }
  `)
  return (
    <Box>
      <SocialIcon href={siteMetadata.twitter} icon={twitter} />
      <SocialIcon href={siteMetadata.facebook} icon={facebook} />
      <SocialIcon href={siteMetadata.youtube} icon={youtube} />
      <SocialIcon href={siteMetadata.github} icon={github} />
    </Box>
  )
}
