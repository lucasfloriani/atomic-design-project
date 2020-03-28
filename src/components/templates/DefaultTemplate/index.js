import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@atoms/Grid'
import Flex from '@atoms/Flex'

const DefaultTemplate = ({ children, header, list }) => (
  <Grid column="130px 500px 1fr">
    {header}
    {list}
    <Flex>{children}</Flex>
  </Grid>
)

DefaultTemplate.propTypes = {
  children: PropTypes.any,
  header: PropTypes.any,
  list: PropTypes.any,
}

export default DefaultTemplate
