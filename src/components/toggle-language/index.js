import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Link as ThemedLink } from "theme-ui"

export default function ToggleLanguage({ currentlyUsedLang }) {
  const {
    site: {
      siteMetadata: { languages },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          languages {
            code
            default
          }
        }
      }
    }
  `)

  // no languages or one language no need for toggle
  if (languages.length <= 1) return false

  // two languages will be switch button
  if (languages.length === 2) {
    const {
      code: altLang,
      default: isDefault,
    } = languages.find(({ code, default: isDefault }) =>
      currentlyUsedLang ? code !== currentlyUsedLang : !isDefault
    )

    return (
      <ThemedLink
        sx={{ marginInlineStart: 15, textDecoration: "none" }}
        as={Link}
        to={"/" + isDefault ? "" : altLang}
      >
        {altLang}
      </ThemedLink>
    )
  }

  // ToDo Add Dropdown
  return false
}
