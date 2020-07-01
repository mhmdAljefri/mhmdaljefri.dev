import React from "react"
import PropTypes from "prop-types"
import SEO from "../seo"
import Header from "../header"
import Footer from "../footer"
import useModePrefreanceWithThemeUI from "../../hooks/useModePrefreanceWithThemeUI"
import LanguageProvider from "../../context/language"
import { Global, css } from "@emotion/core"
import { Styled } from "theme-ui"

function Layout({ children, title, lang, footer, nav: navTranslations }) {
  useModePrefreanceWithThemeUI() // will change color mode once preferance changed
  const isAR = lang === "ar"

  return (
    <Styled.root>
      <LanguageProvider lang={lang}>
        {isAR ? (
          <Global
            styles={css`
              @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200&display=swap");
            `}
          />
        ) : (
          <Global
            styles={css`
              @import url("https://fonts.googleapis.com/css2?family=MuseoModerno:wght@200&display=swap");
            `}
          />
        )}
        <SEO lang={lang} title={title} />
        <Header lang={lang} navTranslations={navTranslations} />
        <main>{children}</main>
        <Footer {...footer} />
      </LanguageProvider>
    </Styled.root>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
