import { Link } from 'gatsby'
import { NavLink, Flex, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <Box
    a="header"
    sx={{
      backgroundColor: `primary`,
      marginBottom: `1.45rem`
    }}
  >
    <Flex
      as="nav"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyContent: 'space-evenly'
      }}
    >
      <NavLink as={Link} to="/">
        Home
      </NavLink>
      <NavLink as={Link} to="/products">
        Products
      </NavLink>
    </Flex>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
