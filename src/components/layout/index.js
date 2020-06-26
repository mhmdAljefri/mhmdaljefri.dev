import React from "react"
import PropTypes from "prop-types"
import SEO from "../seo"
import Header from "../header"
import Footer from "../footer"
import useModePrefreanceWithThemeUI from "../../hooks/useModePrefreanceWithThemeUI"

function Layout({ children, title }) {
  useModePrefreanceWithThemeUI() // will change color mode once preferance changed

  return (
    <>
      <SEO title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
