import { base as defaultTheme } from "@theme-ui/presets"

export default {
  ...defaultTheme,
  fonts: {
    body:
      '"Cairo", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: "Cairo, MuseoModerno",
    monospace: "Menlo, monospace",
  },
  colors: {
    ...defaultTheme.colors,
    primary: "#d23669",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        secondary: "#111199",
        muted: "#111",
        highlight: "#29112c",
        gray: "#eee",
        accent: "#f6f6f6",
        darken: "#f6f6f6",
        primary: "#ffaaee",
      },
    },
  },
  styles: {
    // TODO Add Some Styles
    ...defaultTheme.styles,
    a: {
      color: "primary",
    },
  },
  alerts: {
    primary: {
      color: "background",
      bg: "primary",
    },
    muted: {
      color: "text",
      bg: "muted",
    },
    error: {
      color: "#721c24",
      bg: "#f8d7da",
    },
  },
  links: {
    bold: {
      fontWeight: "bold",
      color: "text",
      textDecoration: "none",
      cursor: "pointer",
      ":hover": {
        opacity: 0.8,
      },
    },
    text: {
      color: "text",
      textDecoration: "none",
      ":hover": {
        color: "primary",
      },
    },
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
      paddingY: 2,
      transation: "all linear",
      textShadow: t => `5px 5px 30px ${t.colors.muted}`,
      ":hover": {
        textShadow: "0 0 0",
      },
    },
  },
}
