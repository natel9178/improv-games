import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button } from "./button"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 100,
      paddingRight: 100,
    }}
  >
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          color: `#65B864`,
          fontWeight: 'bold',
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>

      <a
        href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&q=TAPS+103%3A+Beginning+Improvising&collapse="
        style={{
          color: `white`,
          textDecoration: `none`,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "#aaa" }}>TAPS 103: </span>
        <Button>Take the course</Button>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
