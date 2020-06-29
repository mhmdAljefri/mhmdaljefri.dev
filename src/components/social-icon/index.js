import React from "react"
import PropTypes from "prop-types"

import { Link } from "theme-ui"
import Icon from "react-icons-kit"

export default function SocialIcon({ araiLabel, icon, href }) {
  return (
    <Link
      sx={{ paddingY: 2, paddingInlineEnd: 15, display: "inline-block" }}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={araiLabel}
    >
      <Icon size={20} icon={icon} />
    </Link>
  )
}

SocialIcon.propTypes = {
  araiLabel: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}
