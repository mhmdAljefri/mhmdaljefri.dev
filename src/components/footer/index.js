import React from "react"
import { Box, Link } from "theme-ui"
import Wrapper from "../wrapper"
import Social from "../social"

export default function Footer() {
  return (
    <Box sx="footer">
      <Wrapper style={{ marginBottom: 4, marginTop: 6 }}>
        <Box as="h6" sx={{ fontSize: [4] }}>
          Say Hi at
          <br />
          <Link variant="text" href="mailto:hi@mhmdaljefri.dev">
            hi@mhmdaljefri.dev
          </Link>
          <br />
          or stay on touch
        </Box>
        <Social />
      </Wrapper>
    </Box>
  )
}
