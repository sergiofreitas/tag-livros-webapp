export const index = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: 'world',
    }),
  }
}

export const searchByIsbn = async (event) => {
  try {

    return {
      statusCode: 200,
      body: JSON.stringify(event),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message,
      }),
    }
  }
}
