import { Global, css } from "@emotion/core"

import React from "react"
import { useThemeUI, useColorMode } from "theme-ui"
import useBoxShadow from "../hooks/useBoxShadow"

export default function CodeHighlightStyle() {
  const {
    theme: {
      colors: { muted, primary, secondary },
    },
  } = useThemeUI()
  const boxShadow = useBoxShadow()

  return (
    <Global
      styles={css`
        .gatsby-highlight {
          overflow: auto;
          border-radius: 20px;
          background-color: ${muted};
          padding: 5px 20px;
          box-shadow: ${boxShadow};
          margin-bottom: 50px;
        }
        .gatsby-highlight .keyword {
          color: ${primary};
        }
        .gatsby-highlight .operator,
        .gatsby-highlight .function {
          color: ${secondary};
        }
      `}
    />
  )
}
