import React, { useState } from "react"
import useInterval from "../hooks/useInterval"
import { Spring } from "react-spring/renderprops"

const skills = [
  { children: "☕", role: "img", "aria-label": "Victory" },
  { children: "RubyOnRails" },
  { children: "NodeJS" },
  { children: "✌️", role: "img", "aria-label": "Victory" },
  { children: "Reactjs" },
  { children: "ReactNative" },
]

function Skill({ children, ...rest }) {
  return (
    <Spring
      from={{ opacity: 0, transform: "translateY(50px)" }}
      to={{ opacity: 1, transform: "translateY(0)" }}
    >
      {props => (
        <div {...rest} style={{ ...props, display: "inline-block" }}>
          {children}
        </div>
      )}
    </Spring>
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
