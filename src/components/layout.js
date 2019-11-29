/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link
            href="https://fonts.googleapis.com/css?family=Solway|Vollkorn&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={"A Suggestion for a Game?"} />
        <main style={{ flex: 1 }}>{children}</main>
        <footer
          style={{
            paddingTop: 40,
            paddingBottom: 40,
            paddingLeft: 100,
            paddingRight: 100,
            margin: "0 auto",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a style={{ color: "lightblue" }} href="https://www.natelee.co">
            Nate Lee
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
