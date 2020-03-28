import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { font, key, palette } from 'styled-theme'
import { ifProp, prop } from 'styled-tools'

const styles = css`
  align-items: center;
  background-color: ${({ backgroundColor: { type, position } }) => {
    return ifProp('disabled', palette('grayscale', 3), palette(type, position))
  }};
  border: ${({ border }) => border || 'none'};
  border-radius: ${prop('borderRadius')};
  ${({ shadow }) => shadow !== 'none' && css`box-shadow:${key(['shadows', shadow])};`}
  box-sizing: border-box;
  color: ${({ color: { type, position } }) => ifProp('disabled', palette('grayscale', 2), palette(type, position))};
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  display: inline-flex;
  ${ifProp('grow', css`flex-grow: ${prop('grow')};`)}
  font-family: ${font('primary')};
  font-size: ${({ fontSize }) => key(['sizes', fontSize])};
  font-weight: ${({ fontWeight }) => key(['fontWeight', fontWeight])};
  ${({ height }) => height && css`height: ${height};`}
  justify-content: center;
  ${({ maxWidth }) => maxWidth && css`max-width: ${maxWidth};`}
  ${({ margin }) => margin && css`margin: ${margin};`}
  padding: ${prop('padding')};
  text-decoration: none;
  transition: background-color .3s ${key(['cubicBezier', 'standard'])}, color .3s ${key(['cubicBezier', 'standard'])};
  white-space: nowrap;
  width: ${prop('width')};

  &:hover, &:focus, &:active {
  background-color: ${({ hoverBackgroundColor: { type, position } }) => {
    return ifProp('disabled', palette('grayscale', 3), palette(type, position))
  }};
  color: ${({ hoverForegroundColor: { type, position } }) => {
    return ifProp('disabled', palette('grayscale', 2), palette(type, position))
  }};
  }

  &:focus {
    outline: none
  }
`

export const StyledLink = styled(({
  backgroundColor,
  border,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  hoverForegroundColor,
  hoverBackgroundColor,
  hoverColor,
  margin,
  maxWidth,
  padding,
  shadow,
  width,
  ...props
}) => <Link {...props} />)`${styles}`

export const Anchor = styled(({
  backgroundColor,
  border,
  borderRadius,
  children,
  color,
  fontSize,
  fontWeight,
  hoverForegroundColor,
  hoverBackgroundColor,
  hoverColor,
  margin,
  maxWidth,
  padding,
  shadow,
  width,
  ...props
}) => <a {...props}>{children}</a>)`${styles}`

export const StyledButton = styled(({
  backgroundColor,
  border,
  borderRadius,
  children,
  color,
  fontSize,
  fontWeight,
  hoverForegroundColor,
  hoverBackgroundColor,
  hoverColor,
  margin,
  maxWidth,
  padding,
  shadow,
  width,
  ...props
}) => <button type="button" {...props}>{children}</button>)`${styles}`
