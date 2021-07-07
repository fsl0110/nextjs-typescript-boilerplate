describe('Header Test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('select should display correct language', () => {
    cy.get('select').select('en').should('have.value', 'en');
    cy.get('select').select('de').should('have.value', 'de');
  });
});
