import { useState, useEffect, useRef } from "react"

// Hook
export default function useHover() {
  const [value, setValue] = useState(false)
  const [axis, setAxis] = useState({ x: 0, y: 0 })
  const isBrowser = typeof window !== "undefined"

  const ref = useRef(null)

  const handleMouseOver = event => {
    if (axis.x !== 0 && axis.y !== 0) setAxis({ x: event.x, y: event.y })
    setValue(true)

    return false
  }
  const handleMouseOut = () => setValue(false)

  useEffect(
    () => {
      const node = ref.current
      if (node && isBrowser) {
        node.addEventListener("mouseover", handleMouseOver, true)
        node.addEventListener("mouseout", handleMouseOut, true)

        return () => {
          node.removeEventListener("mouseover", handleMouseOver, true)
          node.removeEventListener("mouseout", handleMouseOut, true)
        }
      }
    },
    [ref.current, isBrowser] // Recall only if ref changes
  )

  return { ref, isHovering: value, axis }
}
