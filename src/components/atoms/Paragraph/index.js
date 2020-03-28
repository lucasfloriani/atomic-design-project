import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'
import {
  font, key, palette, size,
} from 'styled-theme'
import { getOptionsFrom } from '@theme'

const Paragraph = styled(({
  align, color, fontSize, hoverColor, margin, ...props
}) => <p {...props} />)`
  ${({ align }) => align && css`text-align: ${align};`}
  color: ${({ color: { type, position } }) => palette(type, position)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => size(fontSize)};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  margin: ${prop('margin')};
  width: ${prop('width')};
`

Paragraph.propTypes = {
  align: PropTypes.string,
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  fontWeight: PropTypes.oneOf(getOptionsFrom('fontWeight')),
  margin: PropTypes.string,
  width: PropTypes.string,
}

Paragraph.defaultProps = {
  color: { type: 'grayscale', position: 0 },
  fontSize: 'extraSmall',
  fontWeight: 'light',
  margin: '0',
  width: 'auto',
}

export default Paragraph
