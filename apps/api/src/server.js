export const index = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: 'world',
    }),
  }
}

export const users = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      'hello from': 'users',
    }),
  }
}
