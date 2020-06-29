import React, { useState } from "react"
import useInterval from "../../hooks/useInterval"
import { animated, useSpring } from "react-spring"
import { useThemeUI } from "theme-ui"

const skills = [
  { children: "☕", role: "img", "aria-label": "Victory" },
  { children: "RubyOnRails" },
  { children: "NodeJS" },
  { children: "✌️", role: "img", "aria-label": "Victory" },
  { children: "Reactjs" },
  { children: "ReactNative" },
]

function Skill({ children, ...rest }) {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const props = useSpring({
    config: { duration: 800 },
    to: async (next, cancel) => {
      await next({ opacity: 1, color: primary })
      await next({ opacity: 0, color: "rgb(14,26,19)" })
    },
    from: { opacity: 0, color: "red" },
  })

  return (
    <animated.div {...rest} style={{ ...props, display: "inline-block" }}>
      {children}
    </animated.div>
  )
}

export default function Skills() {
  const [currentSkill, setCurrentSkill] = useState(0)

  const handleChangeSkill = () =>
    currentSkill >= skills.length - 1
      ? setCurrentSkill(0)
      : setCurrentSkill(currentSkill + 1)

  useInterval(handleChangeSkill, 2500)

  const renderAbleSkills = skills.map(skillProps => (
    <Skill key={skillProps.children} {...skillProps} />
  ))

  return <>{renderAbleSkills[currentSkill]}</>
}
