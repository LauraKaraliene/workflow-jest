describe("no.wikipedia.org", () => {
    it("can search for Norway", () => {
      cy.visit("https://no.wikipedia.org");
      cy.get("input#searchInput").type("Norway{enter}", { delay: 500 });
      cy.url().should('include', '/wiki/Norway');
      cy.get('h1').should('contain', 'Norway');
      //cy.get('p').contains("Norway");
    })
  })