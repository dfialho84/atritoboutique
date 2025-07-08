import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu visito a página {string}", (url: string) => {
    cy.visit(url);
});

Given("Eu clico no link {string}", (linkText: string) => {
    cy.contains(linkText).click();
});

Then("Eu sou redirecionado para a página de registro", () => {
    cy.url().should("include", "/signup");
});

Then("Eu vejo o título {string}", (titulo: string) => {
    cy.contains(titulo).should("be.visible");
});
