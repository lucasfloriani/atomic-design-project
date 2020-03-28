import styled from 'styled-components'
import Image from '@atoms/Image'
import Title from '@atoms/Title'

export const DoctoImage = styled(Image).attrs({
  shadow: 'small',
  borderRadius: '50%',
  height: '60px',
  width: '60px',
})``

export const DoctorName = styled(Title).attrs({
  level: 3,
  fontSize: 'small',
  fontWeight: 'semiBold',
  color: { type: 'grayscale', position: 0 },
  hoverColor: { type: 'grayscale', position: 0 },
})``
