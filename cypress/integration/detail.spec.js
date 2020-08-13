describe('Detail Page', () => {
  it('Check the components on Detail', () => {
    cy.visit('/detail/9788535928983')

    cy.contains('Tag Livros Web App')
    cy.get('.MuiInputBase-input')

    cy.contains('O Leopardo')
  })

  it('search for a book when fill the search input and press the search button', () => {
    cy.visit('/detail/9788535928983')

    cy.get('.MuiInputBase-input').type('9788')
    cy.get(':nth-child(2) > .MuiButtonBase-root').click()

    cy.url().should('include', '/search?term=9788')
  })

  it('search for a book when fill the search input and press enter', () => {
    cy.visit('/detail/9788535928983')

    cy.get('.MuiInputBase-input').type('9788{enter}')

    cy.url().should('include', '/search?term=9788')
  })
})
