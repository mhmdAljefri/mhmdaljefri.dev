import React from "react"
import { Box, Flex } from "theme-ui"
import Wrapper from "../wrapper"
import loadable from "@loadable/component"

const FloatingImage = loadable(() => import("../floating-image"))

function Project({ image, title, description, categories, from, to, present }) {
  return (
    <Box
      sx={{
        listStyle: "none",
        paddingY: 2,
        marginBottom: 2,
        position: "relative",
        transition: "all ease-in-out",
      }}
      as="li"
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 2,
          "> div": {
            opacity: 0,
            transition: "all 400ms linear",
          },
          ":hover > div": {
            opacity: 1,
            left: "calc(50vw - 50px)",
          },
        }}
      >
        <FloatingImage fluid={image} />
      </Box>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ maxWidth: 550 }}>
          <Box as="h3">{title}</Box>
          <Box as="p">{description}</Box>
          <Box as="p">
            <span role="img" aria-label="Skills">
              ⚡
            </span>{" "}
            {categories.join(", ")}
          </Box>
        </Box>
        <Box>
          {from} - {present || to}
        </Box>
      </Flex>
    </Box>
  )
}

export default function ProjectsSection({
  list,
  orgHistory,
  works,
  present: presentText,
}) {
  return (
    <Box>
      <Wrapper>
        <Box
          as="h2"
          sx={{
            marginBottom: 0,
            textShadow: "5px 10px 150px",
            fontSize: ["calc(5vw + 15px)", null, "calc(7vw + 20px)", 70],
          }}
        >
          {works}{" "}
          <Box
            as="span"
            sx={{ fontSize: [4, null, 5], transform: "rotate(90deg)" }}
          >
            {orgHistory}
          </Box>
        </Box>
        <Box sx={{ paddingX: 0 }} as="ul">
          {list.map(
            ({
              image,
              title,
              description,
              from,
              present: isPresent,
              to,
              categories,
            }) => (
              <Project
                key={title}
                title={title}
                description={description}
                categories={categories}
                image={image}
                from={from}
                present={isPresent && presentText}
                to={to}
              />
            )
          )}
        </Box>
      </Wrapper>
    </Box>
  )
}
