import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  font, key, palette, size,
} from 'styled-theme'
import { getOptionsFrom } from '@theme'

const Title = styled(({
  children, color, fontSize, hoverColor, level, ...props
}) => React.createElement(`h${level}`, props, children))`
  ${({ align }) => align && css`text-align: ${align};`}
  color: ${({ color: { type, position } }) => palette(type, position)};
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => size(fontSize)};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  transition: color .3s ${key(['cubicBezier', 'standard'])};

  :hover {
    color: ${({ hoverColor: { type, position } }) => palette(type, position)}
  }
`

Title.propTypes = {
  align: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  fontSize: PropTypes.oneOf(getOptionsFrom('sizes')),
  fontWeight: PropTypes.oneOf(getOptionsFrom('fontWeight')),
  hoverColor: PropTypes.shape({
    type: PropTypes.oneOf(getOptionsFrom('palette')),
    position: PropTypes.number,
  }),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  margin: PropTypes.string,
}

Title.defaultProps = {
  color: { type: 'grayscale', position: 0 },
  fontSize: 'extraLarge',
  fontWeight: 'medium',
  hoverColor: { type: 'grayscale', position: 0 },
  level: 1,
  margin: '0',
}

export default Title
