import React from "react"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import { Box } from "theme-ui"
import BlogListContainer from "../containers/blog-list-container"

export default function Blog() {
  return (
    <Layout title="Blog">
      <Wrapper>
        <Box as="h1" sx={{ marginY: 6, maxWidth: 500 }}>
          Writting About useful tech, tools, and thought
        </Box>
        <BlogListContainer />
      </Wrapper>
    </Layout>
  )
}
