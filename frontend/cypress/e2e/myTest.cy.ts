
//reference https://docs.cypress.io/app/get-started/why-cypress#End-to-end-Testing
//https://docs.cypress.io/app/references/configuration
//
describe('Responsive layout checks', () => {
  const url = 'http://localhost:5173'; // Adjust to your dev server

  it('Phone view: columns should each span 1', () => {
    cy.viewport(767, 10000); //height set to 10000 because we only care about the width
    cy.visit(url);

    ['.column1', '.column2', '.column3'].forEach((selector: string) => {
      cy.get(selector)
        .should('have.css', 'grid-column')
        .and((value: string) => {
          expect(value).to.include('span 1');
        });
    });
  });

  it('Tablet view: columnContainer should have 2fr 1fr layout', () => {
    cy.viewport(768, 10000);
    cy.visit(url);

    cy.get('.columnContainer')
    .should('have.css', 'grid-template-areas')
    .and('include', '"c2 c3"')
    .and('include', '"c2 c1"');
      });

  it('Desktop view: columnContainer should have 3 columns', () => {
    cy.viewport(1024, 10000);
    cy.visit(url);

    cy.get('.columnContainer')
      .should('have.css', 'grid-template-columns')
      .then((columns: string) => {
        const columnCount = columns.trim().split(/\s+/).length;
        expect(columnCount).to.eq(3); // e.g. '1fr 2fr 1fr'
      });
  });
});
