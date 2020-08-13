import React from 'react'
import { screen, render } from '@testing-library/react'
import DetailSkeleton from '../DetailSkeleton'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<DetailSkeleton />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
