describe('Home Page', () => {
  it('finds the content "type"', () => {
    cy.visit('/')

    cy.contains('7000').should('contain', 'the env http://localhost:7000')
  })
})
