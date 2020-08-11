import React from 'react'
import { screen, render } from '@testing-library/react'
import AppError from '../AppError'

const OkChild = () => <p>Child OK</p>
const Throw = () => {
  throw new Error('bad')
}

describe('when component is mounted', () => {
  it('render the children if all is ok', () => {
    render(
      <AppError>
        <OkChild />
      </AppError>,
    )

    const elem = screen.getByText('Child OK')
    expect(elem).toBeInTheDocument()
  })

  it('render the error message if Throw unhandled error', async () => {
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => {})

    render(
      <AppError>
        <Throw />
      </AppError>,
    )

    const head = await screen.findByRole('heading', { name: /Erro 500/ })
    expect(head).toBeInTheDocument()

    const mailto = await screen.findByRole('link', {
      name: /suporte@taglivros.com.br/,
    })
    expect(mailto).toBeInTheDocument()

    spy.mockRestore()
  })
})
