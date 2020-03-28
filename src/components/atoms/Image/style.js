import React from 'react'
import styled, { css } from 'styled-components'
import { key } from 'styled-theme'
import { prop } from 'styled-tools'
import Img from 'react-image'

export const StyledImage = styled(({
  borderRadius, height, lazyLoad, maxHeight, maxWidth, shadow, width, ...props
}) => <Img {...props} />)`
  box-shadow: ${({ shadow }) => key(['shadows', shadow])};
  box-sizing: border-box;
  display: flex;
  ${({ borderRadius }) => borderRadius && css`border-radius: ${borderRadius};`}
  height: ${prop('height')};
  max-height: ${prop('maxHeight')};
  max-width: ${prop('maxWidth')};
  ${({ margin }) => margin && css`margin: ${margin};`}
  transition: .3s transform cubic-bezier(0.4, 0.0, 0.2, 1);
  width: ${prop('width')};
`
