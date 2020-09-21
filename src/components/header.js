import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavLink, Flex } from "theme-ui"
import ShoppingCartIcon from "../components/shopping-cart-icon"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      as="nav"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyContent: "space-evenly",
      }}
    >
      <NavLink sx={{ color: "white" }} to={"/"} as={Link}>
        Home
      </NavLink>
      <NavLink sx={{ color: "white" }} to={"/products"} as={Link}>
        Products
      </NavLink>
      <ShoppingCartIcon />
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
