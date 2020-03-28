import React from 'react'
import TreatmentList from '@organisms/TreatmentList'
import DefaultTemplate from '@templates/DefaultTemplate'

const list = [
  {
    date: '26 Aug 2019',
    doctors: [
      {
        imageDoctor: 'https://placeimg.com/640/480/people',
        doctorName: 'Dr. Isabella Bowers',
        hospitalName: 'California Hospital Medical Center',
        treatmentName: 'Spinal pain',
        date: '26 Aug 2019',
        time: '12:45 AM',
      },
      {
        imageDoctor: 'https://placeimg.com/640/480/people',
        doctorName: 'Dr. Mok Kwang-Hyun',
        hospitalName: 'Local Hospital, CA',
        treatmentName: 'Spinal pain',
        date: '28 Aug 2019',
        time: '12:45 AM',
      },
    ],
  },
  {
    date: '28 Aug 2019',
    doctors: [
      {
        imageDoctor: 'https://placeimg.com/640/480/people',
        doctorName: 'Dr. Tom Vasquez',
        hospitalName: 'Local Hospital, CA',
        treatmentName: 'Cold',
        date: '28 Aug 2019',
        time: '12:45 AM',
      },
    ],
  },
]

const HomePage = () => (
  <DefaultTemplate
    header="Header Aqui"
    list={<TreatmentList list={list} />}
  >
    Conteudo da página
  </DefaultTemplate>
)

export default HomePage
