import React from "react"
import { Box, Link } from "theme-ui"
import { twitter } from "react-icons-kit/fa/twitter"
import { youtube } from "react-icons-kit/fa/youtube"
import { facebook } from "react-icons-kit/fa/facebook"
import { github } from "react-icons-kit/fa/github"
import SocialIcon from "../social-icon"

export default function Social() {
  return (
    <Box>
      <SocialIcon href="" icon={twitter} />
      <SocialIcon href="" icon={facebook} />
      <SocialIcon href="" icon={youtube} />
      <SocialIcon href="" icon={github} />
    </Box>
  )
}
