import Title from './index'
import React from 'react'

export default { title: 'Title' }

export const Default = () => (
  <Title>Título</Title>
)

export const WithLevel = () => (
  <>
    <Title level={1}>Título H1</Title>
    <Title level={2}>Título H2</Title>
    <Title level={3}>Título H3</Title>
    <Title level={4}>Título H4</Title>
    <Title level={5}>Título H5</Title>
    <Title level={6}>Título H6</Title>
  </>
)
