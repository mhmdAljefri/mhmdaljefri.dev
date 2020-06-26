import { useEffect } from "react"
import { useColorMode } from "theme-ui"

export default function useModePrefreanceWithThemeUI(params) {
  const [currentMode, setThemeMode] = useColorMode()
  const isSSR = typeof window === "undefined"

  useEffect(() => {
    const toggleMode = e => {
      const newColorScheme = e.matches ? "dark" : "light"
      if (newColorScheme !== currentMode) setThemeMode(newColorScheme)
    }

    if (!isSSR) {
      window
        .matchMedia("(prefers-color-scheme: light)")
        .addEventListener("change", toggleMode)
      return () => {
        window
          .matchMedia("(prefers-color-scheme: light)")
          .removeEventListener("change", toggleMode)
      }
    }
  }, [currentMode, isSSR, setThemeMode])
}
