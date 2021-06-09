describe('Homepage Test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display content', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Welcome to Next.js TypeScript Boilerplate');
  });
});
