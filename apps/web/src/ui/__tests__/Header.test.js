import React from 'react'
import { screen, render } from '@testing-library/react'
import { useLocation, MemoryRouter } from 'react-router-dom'
import Header from '../Header'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}))

describe('when component is mounted', () => {
  it('check the rendered component in home', async () => {
    useLocation.mockImplementation(() => ({
      pathname: '/',
    }))

    render(
      <MemoryRouter>
        <Header title="The Title" />
      </MemoryRouter>,
    )

    const elem = screen.getByRole('heading', { name: 'The Title' })
    expect(elem).toBeInTheDocument()

    const button = await screen.queryByRole('button')
    expect(button).toBeNull()
  })

  it('check the rendered component in another page', () => {
    useLocation.mockImplementation(() => ({
      pathname: '/detail/12345',
    }))

    render(
      <MemoryRouter>
        <Header title="The Title" />
      </MemoryRouter>,
    )

    const elem = screen.getByRole('heading', { name: 'The Title' })
    expect(elem).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
