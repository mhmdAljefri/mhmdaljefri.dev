import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Box } from "theme-ui"
import useBoxShadow from "../../hooks/useBoxShadow"

function FloatingImage({ fluid }) {
  const boxShadow = useBoxShadow()
  return (
    <Box
      sx={{
        position: "absolute",
        boxShadow,
        overflow: "hidden",
        borderRadius: 20,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        width: [100],
        text: "background",
      }}
    >
      <div style={{ width: 100 }}>
        <Img imgStyle={{ objectPosition: "center" }} fluid={fluid || {}} />
      </div>
    </Box>
  )
}

FloatingImage.propTypes = {
  fluid: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
}

export default FloatingImage
