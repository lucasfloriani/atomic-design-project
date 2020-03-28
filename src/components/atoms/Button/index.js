import { Anchor, StyledLink, StyledButton } from './style'
import React from 'react'
import PropTypes from 'prop-types'
import { getOptionsFrom } from '@theme'

const Button = ({ ...props }) => {
  const { to, href } = props
  if (to) return <StyledLink {...props} />
  if (href) return <Anchor {...props} />
  return <StyledButton {...props} />
}

Button.propTypes = {
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  backgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  borderRadius: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  fontWeight: PropTypes.oneOf(getOptionsFrom('fontWeight')),
  grow: PropTypes.number,
  height: PropTypes.string,
  href: PropTypes.string,
  hoverColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  hoverBackgroundColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  margin: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string.isRequired,
  shadow: PropTypes.oneOf(getOptionsFrom('shadows')),
  to: PropTypes.string,
  width: PropTypes.string,
}

Button.defaultProps = {
  backgroundColor: { type: 'primary', position: 0 },
  borderRadius: '30px',
  color: { type: 'grayscale', position: 4 },
  fontSize: 'small',
  fontWeight: 'medium',
  hoverBackgroundColor: { type: 'primary', position: 0 },
  hoverColor: { type: 'grayscale', position: 4 },
  hoverForegroundColor: { type: 'grayscale', position: 4 },
  padding: '.6em 1.2em',
  shadow: 'extraSmall',
  type: 'button',
  width: 'auto',
}

export default Button
