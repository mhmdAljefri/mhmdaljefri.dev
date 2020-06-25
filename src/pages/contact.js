import React from "react"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import { Box } from "theme-ui"
import Form from "../components/form"

export default function Contact() {
  return (
    <Layout title="Contact me">
      <Wrapper>
        <Box as="h1" sx={{ marginY: 6 }}>
          Reach me any time,
          <br />
          Ask me anything
          <br />
        </Box>

        <Form />
      </Wrapper>
    </Layout>
  )
}
