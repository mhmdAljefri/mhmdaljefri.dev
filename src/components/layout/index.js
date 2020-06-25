import React from "react"
import PropTypes from "prop-types"
import SEO from "../seo"
import Header from "../header"
import Footer from "../footer"

function Layout({ children }) {
  return (
    <>
      <SEO title="" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
