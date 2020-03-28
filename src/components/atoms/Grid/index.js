import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-gap: ${prop('gap')};
  grid-template-columns: ${prop('column')};
  ${({ margin }) => css`margin: ${margin};`}
  ${({ padding }) => css`padding: ${padding};`}
  ${({ halign }) => halign && css`justify-content: ${halign};`}
  ${({ valign }) => valign && css`align-items: ${valign};`}
  ${({ columnLength }) => columnLength && css`grid-column: ${columnLength};`}
  ${({ rows }) => rows && css`grid-template-rows: ${rows}`};
  ${ifProp('maxWidth', css`max-width: ${prop('maxWidth')};`)}
  width: ${prop('width')};
`

Grid.propTypes = {
  column: PropTypes.any,
  columnLength: PropTypes.any,
  halign: PropTypes.string,
  gap: PropTypes.string,
  margin: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  rows: PropTypes.any,
  valign: PropTypes.string,
  width: PropTypes.string.isRequired,
}

Grid.defaultProps = {
  column: '1fr',
  gap: '15px',
  width: '100%',
}

export default Grid
