import React from "react"
import { Flex } from "theme-ui"
import NavItem from "../nav-item"
import { useStaticQuery, graphql } from "gatsby"

function Nav({ translations, lang }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navigations {
            to
            translationKey
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
      {data.site.siteMetadata.navigations.map(({ to, translationKey }) => (
        <NavItem key={to} to={`${lang ? "/" + lang : ""}${to}`}>
          {translations?.[translationKey]}
        </NavItem>
      ))}
    </Flex>
  )
}

export default Nav
