import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { key } from 'styled-theme'
import { prop } from 'styled-tools'
import { getOptionsFrom } from '@theme'

const Card = styled.div`
  background-color: ${prop('backgroundColor')};
  border-radius: ${prop('borderRadius')};
  box-shadow: ${({ shadow }) => key(['shadows', shadow])};
  box-sizing: border-box;
  ${({ height }) => height && css`height: ${height};`};
  ${({ margin }) => margin && css`margin: ${margin};`};
  overflow: hidden;
  padding: ${prop('padding')};
  transition: .3s background-color cubic-bezier(0.4, 0.0, 0.2, 1),
              .3s transform cubic-bezier(0.4, 0.0, 0.2, 1);
`

Card.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string.isRequired,
  shadow: PropTypes.oneOf(getOptionsFrom('shadows')),
}

Card.defaultProps = {
  backgroundColor: '#ffffff',
  borderRadius: '1.6em',
  padding: '0.6em',
  shadow: 'extraSmall',
}

export default Card
