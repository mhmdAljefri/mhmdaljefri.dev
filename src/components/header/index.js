import React from "react"
import { Box, Link, Flex } from "theme-ui"
import { Link as GLink } from "gatsby"
import ColorMode from "../color-mode"
import Wrapper from "../wrapper"
import Nav from "../nav"
import ToggleLanguage from "../toggle-language"

export default function Header({ lang, navTranslations }) {
  return (
    <Box as="header">
      <Wrapper
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link
            sx={{ paddingY: 3, display: "inline-block" }}
            variant="bold"
            to="/"
            as={GLink}
          >
            MHMDAljefri
          </Link>
          <ToggleLanguage currentlyUsedLang={lang} />
        </Box>
        <Flex sx={{ alignItems: "center" }}>
          <Nav lang={lang} translations={navTranslations} />
          <ColorMode />
        </Flex>
      </Wrapper>
    </Box>
  )
}
