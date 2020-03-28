import React from 'react'
import styled, { css } from 'styled-components'
import { key, palette } from 'styled-theme'
import { prop } from 'styled-tools'

export const Wrapper = styled(({
  color, height, hoverColor, size, width, ...props
}) => <span {...props} />)`
  box-sizing: border-box;
  color: ${({ color: { position, type } }) => palette(type, position)};
  ${({ onClick }) => onClick && css`cursor: pointer;`}
  display: inline-block;
  font-size: ${({ size }) => key(['sizes', size])};
  height: ${prop('height')};
  transition: .3s color ${key(['cubicBezier', 'standard'])};
  width: ${prop('width')};

  :hover {
    color: ${({ hoverColor }) => palette(hoverColor.type, hoverColor.position)}
  }

  & > svg {
    fill: currentcolor;
    height: 100%;
    stroke: currentcolor;
    width: 100%;
  }
`

Wrapper.defaultProps = {
  height: '1em',
  width: '1em',
}
