import { Global, css } from "@emotion/core"

import React from "react"
import { useThemeUI, useColorMode } from "theme-ui"

export default function CodeHighlightStyle() {
  const { theme } = useThemeUI()
  const [mode] = useColorMode()
  const isDark = mode !== "light"
  console.log(theme)
  return (
    <Global
      styles={css`
        .gatsby-highlight {
          border-radius: 20px;
          background-color: ${theme.colors.muted};
          padding: 5px 20px;
          box-shadow: 10px 10px 50px ${isDark ? "#eeeeee11" : "#eeeeee99"};
          margin-bottom: 50px;
        }
        .gatsby-highlight .keyword {
          color: ${theme.colors.primary};
        }
        .gatsby-highlight .operator,
        .gatsby-highlight .function {
          color: ${theme.colors.secondary};
        }
      `}
    />
  )
}
