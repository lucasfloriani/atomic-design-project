import { DoctoImage, DoctorName } from './style'
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@atoms/Button'
import Card from '@atoms/Card'
import Flex from '@atoms/Flex'
import Grid from '@atoms/Grid'
import Icon from '@atoms/Icon'
import Title from '@atoms/Title'
import Paragraph from '@atoms/Paragraph'

const TreatmentCard = ({
  imageDoctor,
  doctorName,
  hospitalName,
  treatmentName,
  date,
  time,
}) => (
  <Card padding="1.6em">
    <Grid gap="16px">
      <Grid column="auto 1fr" gap="0.8em" valign="center">
        <DoctoImage src={imageDoctor} alt={doctorName} />
        <Grid gap="4px">
          <DoctorName>{doctorName}</DoctorName>
          <Title
            fontSize="extraSmall"
            level={5}
            fontWeight="regular"
            color={{ type: 'grayscale', position: 1 }}
            hoverColor={{ type: 'grayscale', position: 1 }}
          >
            {hospitalName}
          </Title>
        </Grid>
      </Grid>
      <Grid gap="6px">
        <Title
          level={4}
          fontSize="medium"
          fontWeight="semiBold"
          color={{ type: 'grayscale', position: 0 }}
          hoverColor={{ type: 'grayscale', position: 0 }}
        >
          Surgeon
        </Title>
        <Title
          fontSize="small"
          level={6}
          fontWeight="regular"
          color={{ type: 'grayscale', position: 1 }}
          hoverColor={{ type: 'grayscale', position: 1 }}
        >
          {treatmentName}
        </Title>
      </Grid>
      <Grid column="1fr 1fr">
        <Paragraph
          color={{ type: 'primary', position: 1 }}
          fontWeight="semiBold"
          fontSize="small"
        >
          Date
        </Paragraph>
        <Paragraph
          color={{ type: 'primary', position: 1 }}
          fontWeight="semiBold"
          fontSize="small"
        >
          Time
        </Paragraph>
        <Paragraph
          color={{ type: 'grayscale', position: 0 }}
          fontSize="medium"
        >
          {date}
        </Paragraph>
        <Paragraph
          color={{ type: 'grayscale', position: 0 }}
          fontSize="medium"
        >
          {time}
        </Paragraph>
      </Grid>
      <Flex halign="flex-end" valign="center">
        <Paragraph
          fontSize="large"
          fontWeight="semiBold"
          color={{ type: 'primary', position: 1 }}
          margin="0 12px 0 0"
        >
          See Details
        </Paragraph>
        <Button
          href="#"
          backgroundColor={{ type: 'primary', position: 1 }}
          hoverBackgroundColor={{ type: 'primary', position: 0 }}
        >
          <Icon
            color={{ type: 'grayscale', position: 3 }}
            name="Category"
          />
        </Button>
      </Flex>
    </Grid>
  </Card>
)

TreatmentCard.propTypes = {
  imageDoctor: PropTypes.string.isRequired,
  doctorName: PropTypes.string.isRequired,
  hospitalName: PropTypes.string.isRequired,
  treatmentName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default TreatmentCard
