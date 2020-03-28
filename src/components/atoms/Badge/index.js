import PropTypes from 'prop-types'
import styled from 'styled-components'
import { key, palette } from 'styled-theme'
import { prop } from 'styled-tools'
import { getOptionsFrom } from '@theme'

const Badge = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor: { type, position } }) => palette(type, position)};
  border-radius: 1em;
  box-shadow: ${({ shadow }) => key(['shadows', shadow])};
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 3px;
  padding: ${prop('padding')};
  transition: 0.4s box-shadow ${key(['cubicBezier', 'standard'])};

  &:hover {
    box-shadow: ${key(['shadows', 'small'])};
  }
`

Badge.propTypes = {
  backgroundColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  padding: PropTypes.string.isRequired,
  shadow: PropTypes.oneOf(getOptionsFrom('shadows')),
}

Badge.defaultProps = {
  backgroundColor: { type: 'primary', position: 0 },
  padding: '8px',
  shadow: 'extraSmall',
}

export default Badge
