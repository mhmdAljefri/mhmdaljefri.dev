import { useColorMode } from "theme-ui"

export default function useBoxShadow(v = "10px", h = "10px", bulr = "50px") {
  const [mode] = useColorMode()
  const color = mode !== "light" ? "#333" : "#ddd"
  return `${v} ${h} ${bulr} ${color}`
}
