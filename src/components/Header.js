import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <nav className="bw-full p-3 text-center shadow-lg text-3xl">{title}</nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
