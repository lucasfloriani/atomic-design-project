import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@atoms/Grid'
import Paragraph from '@atoms/Paragraph'
import Title from '@atoms/Title'
import TreatmentCard from '@molecules/TreatmentCard'

const TreatmentList = ({ list }) => {
  return (
    <Grid width="400px" margin="auto">
      <Title
        color={{ type: 'primary', position: 1 }}
        hoverColor={{ type: 'primary', position: 0 }}
        fontSize="extraLarge"
        fontWeight="regular"
      >
        Your Treatment
      </Title>
      {list.map((item) => (
        <>
          <Paragraph color={{ type: 'grayscale', position: 1 }} fontSize="normal">
            {item.date}
          </Paragraph>
          {item.doctors.map((doctor) => (
            <TreatmentCard
              imageDoctor={doctor.imageDoctor}
              doctorName={doctor.doctorName}
              hospitalName={doctor.hospitalName}
              treatmentName={doctor.treatmentName}
              date={doctor.date}
              time={doctor.time}
            />
          ))}
        </>
      ))}
    </Grid>
  )
}

TreatmentList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      doctors: PropTypes.arrayOf(
        PropTypes.shape({
          imageDoctor: PropTypes.string.isRequired,
          doctorName: PropTypes.string.isRequired,
          hospitalName: PropTypes.string.isRequired,
          treatmentName: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,

}

export default TreatmentList
