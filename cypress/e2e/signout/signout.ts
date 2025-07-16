import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu faço o login no sistema", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    cy.loginClerk({ username, password });
});

When("Eu clico no meu avatar no topo da tela", () => {
    cy.get(".cl-userButtonBox > .cl-avatarBox > .cl-avatarImage").click();
});

When("Eu clico no link Sair", () => {
    cy.get(".cl-userButtonPopoverActions").contains("Sair").click();
});

Then("Eu sou redirecionado para a página inicial", () => {
    cy.url().should("eq", Cypress.config("baseUrl") + "/");
});

Then("Eu vejo o link {string}", (link: string) => {
    cy.contains(link).should("be.visible");
});
