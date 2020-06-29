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
      <SocialIcon
        araiLabel="twitter"
        href={siteMetadata.twitter}
        icon={twitter}
      />
      <SocialIcon
        araiLabel="facebook"
        href={siteMetadata.facebook}
        icon={facebook}
      />
      <SocialIcon
        araiLabel="youtube"
        href={siteMetadata.youtube}
        icon={youtube}
      />
      <SocialIcon araiLabel="github" href={siteMetadata.github} icon={github} />
    </Box>
  )
}
