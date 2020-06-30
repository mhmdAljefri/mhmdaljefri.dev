import React, { useState } from "react"
import useInterval from "../../hooks/useInterval"
import { useThemeUI } from "theme-ui"
import { Transition } from "react-spring/renderprops"
import { animated } from "react-spring"

const skills = [
  { children: "☕", role: "img", "aria-label": "Victory" },
  { children: "RubyOnRails" },
  { children: "NodeJS" },
  { children: "✌️", role: "img", "aria-label": "Victory" },
  { children: "Reactjs" },
  { children: "ReactNative" },
]

export default function Skills() {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const [tick, setTick] = useState(0)

  const handleTick = () => setTick(tick >= skills.length - 1 ? 0 : tick + 1)

  useInterval(handleTick, 1500)

  return (
    <Transition
      items={tick}
      keys={item => item}
      from={{ transform: "translate3d(-20px,0,0)" }}
      enter={{ transform: "translate3d(0,0,0)" }}
      leave={{ display: "none" }}
      update={{ color: primary }}
    >
      {item => props => (
        <animated.div style={props}>{skills[item].children}</animated.div>
      )}
    </Transition>
  )
}
