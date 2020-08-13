describe('Home Page', () => {
  it('Check the components on Home', () => {
    cy.visit('/')

    cy.contains('Tag Livros Web App')
    cy.get('.MuiInputBase-input')

    cy.contains('Últimas edições')
  })

  it('Click on book card', () => {
    cy.visit('/')

    cy.contains('Limonov').click()
    cy.url().should('include', '/detail/')
  })

  it('search for a book when fill the search input and press the search button', () => {
    cy.visit('/')

    cy.get('.MuiInputBase-input').type('9788')
    cy.get(':nth-child(2) > .MuiButtonBase-root').click()

    cy.url().should('include', '/search?term=9788')
  })

  it('search for a book when fill the search input and press enter', () => {
    cy.visit('/')

    cy.get('.MuiInputBase-input').type('9788{enter}')

    cy.url().should('include', '/search?term=9788')
  })
})
