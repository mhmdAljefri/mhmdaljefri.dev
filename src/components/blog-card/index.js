import React from "react"
import { Box, Link } from "theme-ui"
import Img from "gatsby-image"
import { Link as Glink } from "gatsby"
import useBoxShadow from "../../hooks/useBoxShadow"

export default function BlogCard({ style, title, to, excerpt, fluid }) {
  const boxShadow = useBoxShadow()
  return (
    <Box sx={style}>
      <Box as="h1">
        <Link
          variant="bold"
          sx={{ ":hover": { color: "primary" } }}
          as={Glink}
          to={to}
        >
          {title}
        </Link>
      </Box>
      <Box
        sx={{
          position: "relative",
          mt: 2,
          mb: 4,
          borderRadius: 20,
          overflow: "hidden",
          width: "100%",
          background: "muted",
          boxShadow,
          ":hover": {
            ".blog-post-image-over": {
              opacity: 0.8,
            },
          },
        }}
      >
        <Box
          className="blog-post-image-over"
          as={Glink}
          variant="text"
          to={to}
          sx={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "text",
            zIndex: 1,
            transition: "all 400ms linear",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link sx={{ textDecoration: "none" }} as="span">
            Details
          </Link>
        </Box>
        <Img fluid={fluid} />
      </Box>
      <Box as="p">{excerpt}</Box>
    </Box>
  )
}
