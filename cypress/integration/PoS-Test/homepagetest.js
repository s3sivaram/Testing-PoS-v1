/// <reference types='cypress'/>
it("homepage", () => {
  cy.visit("https://jovial-khorana-553d04.netlify.app/");
  cy.get(".MuiGrid-container > :nth-child(1) > .MuiPaper-root").click();
  cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click();
});
