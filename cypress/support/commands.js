Cypress.Commands.add("getFailRequest", (url) => {
  cy.request({
    method: "GET",
    url: url,
    failOnStatusCode: false
  });
});
