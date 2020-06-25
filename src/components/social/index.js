import React from "react"
import { Box, Link } from "theme-ui"
import Icon from "react-icons-kit"
import { twitter } from "react-icons-kit/fa/twitter"
import { youtube } from "react-icons-kit/fa/youtube"
import { facebook } from "react-icons-kit/fa/facebook"
import { github } from "react-icons-kit/fa/github"

function SocialIcon({ icon, href }) {
  return (
    <Link
      sx={{ paddingY: 2, paddingInlineEnd: 15, display: "inline-block" }}
      href={href}
      target="_blank"
      rel="noopner"
    >
      <Icon size={20} icon={icon} />
    </Link>
  )
}

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
