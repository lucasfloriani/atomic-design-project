import { StyledImage } from './style'
import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ ...props }) => <StyledImage {...props} />

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  lazyLoad: PropTypes.bool,
  margin: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  shadow: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
}

Image.defaultProps = {
  height: 'auto',
  maxHeight: 'initial',
  maxWidth: 'initial',
  shadow: 'none',
  width: 'auto',
}

export default Image
