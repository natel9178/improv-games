import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Button } from "./button"
import styled from "styled-components"

const StyledHeader = styled.header`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: 720px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Container = styled.div`
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const TapsCTA = styled.a`
  margin-top: 0px;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader
    style={{
      background: `transparent`,
    }}
  >
    <Container
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      <Link
        to="/"
        style={{
          color: `#65B864`,
          fontWeight: "bold",
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>

      <TapsCTA
        href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&q=TAPS+103%3A+Beginning+Improvising&collapse="
        style={{
          color: `white`,
          textDecoration: `none`,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "#aaa" }}>TAPS 103: </span>
        <Button>Take the course</Button>
      </TapsCTA>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
