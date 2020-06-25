import React from "react"
import PropTypes from "prop-types"
import { Flex } from "theme-ui"
import NavItem from "../nav-item"
import { useStaticQuery, graphql } from "gatsby"

function Nav({ items }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navigations {
            to
            title
            hero
          }
        }
      }
    }
  `)
  return (
    <Flex
      sx={{
        flexDirection: ["row"],
        justifyContent: "space-between",
      }}
      as="nav"
    >
      {data.site.siteMetadata.navigations.map(({ to, title }) => (
        <NavItem to={to}>{title}</NavItem>
      ))}
    </Flex>
  )
}

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Nav
