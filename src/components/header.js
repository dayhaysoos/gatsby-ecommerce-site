import React from 'react'
import { NavLink, Flex, Box } from 'theme-ui'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ShoppingCartIcon from '../components/shopping-cart-icon'

const Header = ({ siteTitle }) => (
  <Box
    as="header"
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
      <NavLink
        to={'/'}
        as={Link}
      >
        Home
      </NavLink>
      <NavLink to={'/products'} as={Link}>
        Products
      </NavLink>
      <ShoppingCartIcon />
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
