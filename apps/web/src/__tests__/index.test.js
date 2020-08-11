import ReactDOM from 'react-dom'
import '..'

jest.mock('react-dom', () => ({
  render: jest.fn(),
}))

describe('test ReactDOM.render', () => {
  it('check the rendered component', () => {
    expect(ReactDOM.render).toHaveBeenCalled()
  })
})
