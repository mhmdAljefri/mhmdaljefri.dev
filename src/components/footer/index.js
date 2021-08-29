import React from "react"
import { Box, Link } from "theme-ui"
import Wrapper from "../wrapper"
import Social from "../social"

export default function Footer({ satHi, stayOnTouch }) {
  return (
    <Box sx="footer">
      <Wrapper style={{ marginBottom: 4, marginTop: 6 }}>
        <Box sx={{ fontSize: [4] }}>{satHi}</Box>
        <Link
          sx={{ fontSize: [4] }}
          variant="text"
          href="mailto:me@mhmdaljefri.dev"
        >
          me@mhmdaljefri.dev
        </Link>
        <Box sx={{ fontSize: [4] }}>{stayOnTouch}</Box>
        <Social />
      </Wrapper>
    </Box>
  )
}
