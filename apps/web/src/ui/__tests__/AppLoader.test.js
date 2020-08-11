import React from 'react'
import { screen, render } from '@testing-library/react'
import AppLoader from '../AppLoader'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<AppLoader />)

    const progress = screen.getByRole('progressbar')
    expect(progress).toBeInTheDocument()
  })
})
