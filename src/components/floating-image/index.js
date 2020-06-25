import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import Img from "gatsby-image"
import { Box } from "theme-ui"

function FloatingImage({ fluid }) {
  return (
    <Spring
      from={{ opcity: 0, left: 0, top: 0 }}
      to={{ opacity: 1, left: 200, top: -50 }}
    >
      {props => (
        <Box
          sx={{
            ...props,
            zIndex: -1,
            width: [100],
            height: [100],
            backgroundColor: "text",
            background: "light",
            borderRadius: 20,
            boxShadow: "5px 5px 70px #cccccc88",
            border: "4px solid",
            borderColor: "muted",
            overflow: "hidden",
            text: "background",
            position: "absolute",
            Spring: "all ease-in-out",
          }}
        >
          <Img fluid={fluid || {}} />
        </Box>
      )}
    </Spring>
  )
}

FloatingImage.propTypes = {}

export default FloatingImage
