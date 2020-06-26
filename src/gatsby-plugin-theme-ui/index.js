import { base as defaultTheme, dark } from "@theme-ui/presets"

export default {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    modes: {
      dark: {
        ...dark.colors,
      },
    },
  },
  styles: {
    // TODO Add Some Styles
    ...defaultTheme.styles,
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
