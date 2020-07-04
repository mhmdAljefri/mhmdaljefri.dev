import React, { useState } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { Box } from "theme-ui"
import useInterval from "../../hooks/useInterval"
import useLanguage from "../../hooks/useLang"

export default function BooksImage() {
  const [open, setOpen] = useState(false)
  const { lang } = useLanguage()
  const isRtl = lang === "ar"

  const toggleOpen = () => setOpen(!open)

  useInterval(toggleOpen, 5000)

  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "open-books.png" }) {
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
            width: "40%",
            maxWidth: 430,
            filter: `${open ? "blur(10px)" : "blur(2px)"}`,
            zIndex: -1,
            overflow: "hidden",
            top: 0,
            transform: isRtl && "rotateY(178deg)",
            [isRtl ? "left" : "right"]: 0,
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
