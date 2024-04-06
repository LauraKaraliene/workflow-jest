//describe("en.wikipedia.org", () => {
   // it("can search for Oslo", () => {
    //  cy.visit("https://en.wikipedia.org");
    //  cy.get("input#searchInput").type("Oslo{enter}", { delay: 500 });
    //  cy.url().should('include', '/wiki/Oslo');
     // cy.get('h1').should('contain', 'Oslo');
    //  //cy.get('p').contains("Norway");
  //  })
 // })

 describe("en.wikipedia.org", () => {
  it("can search for Oslo", () => {
      cy.visit("https://en.wikipedia.org");
      // Target the input, type the search term
      cy.get("input#searchInput").type("Oslo");
      // Submit the form directly
      //cy.get('form').submit();
      cy.get('form').eq(0).submit(); // .eq(0) selects the first form

      // Proceed with your assertions
      cy.url({ timeout: 10000 }).should('include', '/wiki/Oslo');
      cy.get('h1 > span').should('contain', 'Oslo');
  });
});


