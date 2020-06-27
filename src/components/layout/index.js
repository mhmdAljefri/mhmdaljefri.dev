import React from "react"
import PropTypes from "prop-types"
import SEO from "../seo"
import Header from "../header"
import Footer from "../footer"
import useModePrefreanceWithThemeUI from "../../hooks/useModePrefreanceWithThemeUI"

function Layout({ children, title, lang, footer, nav: navTranslations }) {
  useModePrefreanceWithThemeUI() // will change color mode once preferance changed

  return (
    <>
      <SEO lang={lang} title={title} />
      <Header lang={lang} navTranslations={navTranslations} />
      <main>{children}</main>
      <Footer {...footer} />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
