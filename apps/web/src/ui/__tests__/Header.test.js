import React from 'react'
import { screen, render } from '@testing-library/react'
import Header from '../Header'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<Header title="The Title" />)

    const elem = screen.getByRole('heading', { name: 'The Title' })
    expect(elem).toBeInTheDocument()
  })
})
