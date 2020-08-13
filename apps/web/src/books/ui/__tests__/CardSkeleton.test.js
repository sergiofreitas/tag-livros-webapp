import React from 'react'
import { screen, render } from '@testing-library/react'
import CardSkeleton from '../CardSkeleton'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(<CardSkeleton />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})
