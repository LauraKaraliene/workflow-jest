describe("en.wikipedia.org", () => {
    it("can search for Oslo", () => {
      cy.visit("https://en.wikipedia.org");
      cy.get("input#searchInput").type("Oslo{enter}", { delay: 500 });
      cy.url().should('include', '/wiki/Oslo');
      cy.get('h1').should('contain', 'Oslo');
      //cy.get('p').contains("Norway");
    })
  })