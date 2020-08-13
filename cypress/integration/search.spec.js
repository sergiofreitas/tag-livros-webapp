describe('Search Page', () => {
  it('Check the components on Search', () => {
    cy.visit('/search')

    cy.contains('Tag Livros Web App')
    cy.get('.MuiInputBase-input')

    cy.contains('Nenhum resultado encontrado')
  })

  it('when the search doesnt find a result', () => {
    cy.visit('/search?term=9019283')

    cy.contains('Tag Livros Web App')
    cy.get('.MuiInputBase-input')

    cy.contains('Nenhum resultado encontrado')
  })

  it('search for a book when fill the search input and press the search button', () => {
    cy.visit('/search')

    cy.get('.MuiInputBase-input').type('9788')
    cy.get(':nth-child(2) > .MuiButtonBase-root').click()

    cy.url().should('include', '/search?term=9788')
    cy.contains('Resultado da busca por "9788"')
  })

  it('search for a book when fill the search input and press enter', () => {
    cy.visit('/search')

    cy.get('.MuiInputBase-input').type('9788{enter}')

    cy.url().should('include', '/search?term=9788')
    cy.contains('Resultado da busca por "9788"')
  })
})
