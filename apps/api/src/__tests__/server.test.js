import { index } from '../server'

describe('testing the http methods', () => {
  it('check the response', async () => {
    const response = await index()

    expect(response).toEqual({
      body: '{"hello":"world"}',
      statusCode: 200,
    })
  })
})
