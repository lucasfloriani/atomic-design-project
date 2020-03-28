import Title from './index'
import React from 'react'
import { render } from '@testing-library/react'

describe('Title component', () => {
  it('should render the component', () => {
    const { container, getByText } = render(<Title>Titulo</Title>)
    expect(getByText(/Titulo/)).toBeInTheDocument()
    expect(container.querySelector('h1')).toBeInTheDocument()
  })

  it('should render diferent levels', () => {
    const { container } = render(
      <>
        <Title level={1}>Título H1</Title>
        <Title level={2}>Título H2</Title>
        <Title level={3}>Título H3</Title>
        <Title level={4}>Título H4</Title>
        <Title level={5}>Título H5</Title>
        <Title level={6}>Título H6</Title>
      </>,
    )
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(container.querySelector('h2')).toBeInTheDocument()
    expect(container.querySelector('h3')).toBeInTheDocument()
    expect(container.querySelector('h4')).toBeInTheDocument()
    expect(container.querySelector('h5')).toBeInTheDocument()
    expect(container.querySelector('h6')).toBeInTheDocument()
  })
})
