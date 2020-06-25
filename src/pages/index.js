import React from "react"
import Layout from "../components/layout"
import { Box } from "theme-ui"
import Wrapper from "../components/wrapper"
import Skills from "../skills"
import ProjectsSectionContainer from "../containers/project-section-container"

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Box as="h1" sx={{ marginY: 6, maxWidth: 500 }}>
        Hello <strong>I'm Mohammed Aljefri</strong> Fullstack web developer
        Lives on Aden <Skills />
      </Box>
    </Wrapper>
    <ProjectsSectionContainer />
  </Layout>
)

export default IndexPage
