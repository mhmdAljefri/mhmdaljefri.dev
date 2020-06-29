import React, { useState } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Box, useColorMode } from "theme-ui"
import useInterval from "../../hooks/useInterval"

export default function MogImage() {
  const [mode] = useColorMode()
  const isDark = mode !== "light"
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  useInterval(toggleOpen, 5000)

  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(
            relativePath: { eq: "person-holding-mug-2307030.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ placeholderImage }) => (
        <Box
          sx={{
            position: "absolute",
            width: "50%",
            opacity: isDark ? 0.7 : 0.1,
            filter: `${open ? "blur(10px)" : "blur(2px)"} ${
              isDark ? "" : "invert(1)"
            }`,
            zIndex: -1,
            overflow: "hidden",
            top: 0,
            right: 0,
            transition: "all 200ms",
          }}
        >
          <Img
            style={{
              transform: open ? "scale(1.05)" : "scale(0.95)",
            }}
            fluid={placeholderImage.childImageSharp.fluid}
          />
        </Box>
      )}
    />
  )
}
