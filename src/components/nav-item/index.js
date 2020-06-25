import React from "react"
import PropTypes from "prop-types"
import { Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import useIsMobile from "../../hooks/useIsMobile"

function NavItem({ children, to, icon }) {
  const isMobileView = useIsMobile()
  return (
    <Link
      sx={{
        paddingX: 2,
        borderRadius: 20,
        lineHeight: "40px",
        marginX: 2,
      }}
      variant="nav"
      as={GatsbyLink}
      to={to}
    >
      {isMobileView || children}
    </Link>
  )
}

NavItem.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavItem
