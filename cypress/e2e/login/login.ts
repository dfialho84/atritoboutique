import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu visito a página {string}", (url: string) => {
    cy.visit(url);
});

Then("Eu vejo o texto {string}", (text: string) => {
    cy.contains(text).should("be.visible");
});
