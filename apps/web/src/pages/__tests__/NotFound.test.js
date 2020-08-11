import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import NotFoundPage from '../NotFound'

describe('when component is mounted', () => {
  it('check the rendered component', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    )

    const providerElem = screen.getByText(/Página não encontrada/)
    expect(providerElem).toBeInTheDocument()
  })
})
