import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Box } from "theme-ui"
import { useSpring, animated } from "react-spring"
import useBoxShadow from "../../hooks/useBoxShadow"

function FloatingImage({ fluid }) {
  const props = useSpring({
    from: { opcity: 0, left: 0, top: 0 },
    to: { opacity: 1, left: 200, top: -50 },
  })

  const boxShadow = useBoxShadow()
  return (
    <animated.div
      style={{
        ...props,
        position: "absolute",
        boxShadow,
        overflow: "hidden",
        borderRadius: 20,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          width: [100],
          overflow: "hidden",
          text: "background",
        }}
      >
        <Img imgStyle={{ objectPosition: "center" }} fluid={fluid || {}} />
      </Box>
    </animated.div>
  )
}

FloatingImage.propTypes = {
  fluid: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
}

export default FloatingImage
