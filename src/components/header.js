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
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
