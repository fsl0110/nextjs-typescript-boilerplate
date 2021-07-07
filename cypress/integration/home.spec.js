describe('Homepage Test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display content in current language', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Welcome to my Next.js TypeScript Boilerplate website');
    cy.get('select').select('de');
    cy.get('h1')
      .should('be.visible')
      .and(
        'contain',
        'Willkommen auf meiner Next.js TypeScript Boilerplate Webseite',
      );
  });
});
