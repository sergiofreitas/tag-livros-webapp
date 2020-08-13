import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

jest.mock('core/providers', () => ({ children }) => (
  <div title="Providers">{children}</div>
))

jest.mock('pages/index', () => () => <p>Index page</p>)
jest.mock('pages/Detail', () => () => <p>Detail page</p>)
jest.mock('pages/NotFound', () => () => <p>Not Found page</p>)
jest.mock('pages/Search', () => () => <p>Search page</p>)

describe('when component is mounted', () => {
  it('render the initial route', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    const elem = await screen.findByText(/Index page/)
    expect(elem).toBeInTheDocument()
  })

  it('render the detail route', async () => {
    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <App />
      </MemoryRouter>,
    )

    const elem = await screen.findByText(/Detail page/)
    expect(elem).toBeInTheDocument()
  })

  it('render the not found route', async () => {
    render(
      <MemoryRouter initialEntries={['/this-route-not-exists']}>
        <App />
      </MemoryRouter>,
    )

    const elem = await screen.findByText(/Not Found page/)
    expect(elem).toBeInTheDocument()
  })

  it('render the search route', async () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <App />
      </MemoryRouter>,
    )

    const elem = await screen.findByText(/Search page/)
    expect(elem).toBeInTheDocument()
  })
})
