/// <reference types='cypress'/>
it("homepage", () => {
  cy.visit("https://jovial-khorana-553d04.netlify.app/");
  cy.get(".MuiGrid-container > :nth-child(1) > .MuiPaper-root").click();
  cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click();
  cy.contains("Home").click();
  cy.get("#combo-box-demo").click().type("{downarrow}{enter}");
  cy.get('[data-testid="DeleteForeverIcon"] > path').click();
});

it.only("html test", () => {
  cy.visit("http://127.0.0.1:5500/cypress/first.html");
  cy.get("[type = 'text']").type("sivaram");
  cy.get("button").click();
});
