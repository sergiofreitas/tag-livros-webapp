describe('Not Found Page', () => {
  it('Check the components on Not Found', () => {
    cy.visit('/asdf')

    cy.contains('Página não encontrada')
  })
})