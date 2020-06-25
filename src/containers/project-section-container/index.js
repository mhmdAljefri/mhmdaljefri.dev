import React from "react"
import ProjectsSection from "../../components/projects-section"
import useProjectsListQuery from "../../hooks/useProjectsListQuery"

export default function ProjectsSectionContainer() {
  const projectsEdges = useProjectsListQuery()
  const projects = projectsEdges.map(({ node }) => ({
    ...node.frontmatter,
    image: node.frontmatter.image?.childImageSharp.fluid,
  }))

  return <ProjectsSection list={projects} />
}
