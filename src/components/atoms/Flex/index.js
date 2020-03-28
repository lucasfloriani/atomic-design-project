import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { key } from 'styled-theme'
import { ifProp, prop } from 'styled-tools'
import { getOptionsFrom } from '@theme'

const Flex = styled.div`
  ${({ shadow }) => shadow && css`box-shadow: ${key(['shadows', shadow])};`}
  box-sizing: border-box;
  display: flex;
  ${({ margin }) => css`margin: ${margin};`}
  ${({ padding }) => css`padding: ${padding};`}
  ${({ halign }) => css`justify-content: ${halign};`}
  ${({ valign }) => css`align-items: ${valign};`}
  ${({ wrap }) => css`flex-wrap: ${wrap};`}
  flex-direction: ${prop('flow')};
  ${ifProp('maxWidth', css`max-width: ${prop('maxWidth')};`)}
  width: ${prop('width')};
`

Flex.propTypes = {
  flow: PropTypes.string,
  halign: PropTypes.string,
  margin: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  shadow: PropTypes.oneOf(getOptionsFrom('shadows')),
  valign: PropTypes.string,
  width: PropTypes.string,
  wrap: PropTypes.string,
}

Flex.defaultProps = {
  flow: 'row',
  width: '100%',
}

export default Flex
