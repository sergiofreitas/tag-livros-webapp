import sortBooks from '../sortBooks'

const mockBooks = [
  {
    objectId: '4MQrahe9Fk',
    author: 'Fiódor Dostoiévski',
    createdAt: '2017-01-24T13:39:30.147Z',
    updatedAt: '2017-07-01T00:17:35.086Z',
    name: 'Duas Narrativas Fantásticas',
    isbn: '9788573262711',
    pages: 128,
    cover: {
      __type: 'File',
      name: 'e40b34d22e66980bd2125f5250be5e39_695243.jpg',
      url:
        'https://static2.taglivros.com/e40b34d22e66980bd2125f5250be5e39_695243.jpg',
    },
    edition: 'Março de 2015',
    curator: 'Luiz Felipe Pondé',
    blocked: false,
    numRatings: 44,
    totalRatings: 189,
  },
  {
    objectId: '1WHexRrC5v',
    pages: 336,
    createdAt: '2017-02-15T17:36:00.537Z',
    updatedAt: '2017-07-03T10:47:08.299Z',
    author: 'Jhumpa Lahiri',
    name: 'O Xará',
    isbn: '9788525063557',
    curator: 'Martha Medeiros',
    cover: {
      __type: 'File',
      name: '8d7bd45d8ec66ddba8534765fadff35e_oxara.jpg',
      url:
        'https://static2.taglivros.com/8d7bd45d8ec66ddba8534765fadff35e_oxara.jpg',
    },
    edition: 'Fevereiro de 2017',
    blocked: false,
    numRatings: 863,
    totalRatings: 3785,
  },
  {
    objectId: '4trWWVgkZU',
    name: 'O Casamento',
    createdAt: '2017-01-24T13:58:16.763Z',
    updatedAt: '2017-07-03T12:59:29.868Z',
    author: 'Nelson Rodrigues',
    isbn: '9788520926499',
    pages: 272,
    curator: 'Heloisa Seixas',
    cover: {
      __type: 'File',
      name:
        '2ff2ea7fe950b7e5ee5d32f65510d249_0b7738a0-4470-483e-9373-7a8581472359.jpg',
      url:
        'https://static2.taglivros.com/2ff2ea7fe950b7e5ee5d32f65510d249_0b7738a0-4470-483e-9373-7a8581472359.jpg',
    },
    edition: 'Agosto de 2016',
    blocked: false,
    numRatings: 506,
    totalRatings: 1938,
  },
]

describe('sort books', () => {
  it('sort books by edition date', () => {
    const sortedBooks = sortBooks(mockBooks)

    expect(sortedBooks[0]).toBe(mockBooks[1])
  })
})
