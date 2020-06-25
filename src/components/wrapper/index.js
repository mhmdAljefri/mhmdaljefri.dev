import React from "react"
import { Box } from "theme-ui"

export default function Wrapper({ children, style, ...props }) {
  return (
    <Box
      {...props}
      sx={{ ...style, maxWidth: 1000, marginX: "auto", paddingX: [1, null, 3] }}
    >
      {children}
    </Box>
  )
}
