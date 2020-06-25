import React from "react"
import { Box, Flex } from "theme-ui"
import Wrapper from "../wrapper"
import useHover from "../../hooks/useHover"
import FloatingImage from "../floating-image"

function Project({ image, title, compnay, categories }) {
  const { ref, isHovering } = useHover()

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
        ref={ref}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 2,
        }}
      />
      {isHovering && <FloatingImage fluid={image} />}
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Box as="h3">{title}</Box>
          <Flex sx={{ marginTop: 2 }}>
            <Box as="p">{compnay}</Box>
            <Box sx={{ paddingX: 2 }}>-</Box>
            <Box as="p">{categories.join(", ")}</Box>
          </Flex>
        </Box>
        <Box>date</Box>
      </Flex>
    </Box>
  )
}

export default function ProjectsSection({ list }) {
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
          Works{" "}
          <Box
            as="span"
            sx={{ fontSize: [4, null, 5], transform: "rotate(90deg)" }}
          >
            History
          </Box>
        </Box>
        <Box sx={{ paddingX: 0 }} as="ul">
          {list.map(({ image, title, compnay, categories }) => (
            <Project
              title={title}
              compnay={compnay}
              categories={categories}
              image={image}
            />
          ))}
        </Box>
      </Wrapper>
    </Box>
  )
}
