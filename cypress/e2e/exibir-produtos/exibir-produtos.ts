import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu visito a página {string}", (url: string) => {
    cy.visit(url);
});

Then("Eu vejo alguns produtos", () => {
    cy.contains("Nome do Produto").should("be.visible");
});
