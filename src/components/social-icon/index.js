import React from "react"
import { Link } from "theme-ui"
import Icon from "react-icons-kit"

export default function SocialIcon({ icon, href }) {
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
