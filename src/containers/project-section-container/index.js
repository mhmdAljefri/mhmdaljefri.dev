import React from "react"
import ProjectsSection from "../../components/projects-section"

export default function ProjectsSectionContainer({
  projects,
  present,
  orgHistory,
  works,
}) {
  const list = projects.map(({ node }) => ({
    ...node.frontmatter,
    image: node.frontmatter.image?.childImageSharp.fluid,
  }))

  return (
    <ProjectsSection
      present={present}
      orgHistory={orgHistory}
      works={works}
      list={list}
    />
  )
}
