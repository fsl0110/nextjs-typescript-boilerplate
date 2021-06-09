describe('Feedback Test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display headings', () => {
    cy.get('h1').should('be.visible').and('contain', 'Welcome to Next.js!');
    cy.get('.main')
      .should('be.visible')
      .and('contain', 'Get started by editing');
    cy.get('h2').should('be.visible').and('contain', 'Documentation');
    cy.get('h2').should('be.visible').and('contain', 'Learn');
    cy.get('h2').should('be.visible').and('contain', 'Examples');
    cy.get('h2').should('be.visible').and('contain', 'Deploy');
    cy.get('.footer').should('be.visible').and('contain', 'Powered by');
  });
});
