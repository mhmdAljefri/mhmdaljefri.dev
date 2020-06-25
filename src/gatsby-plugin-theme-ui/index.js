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
