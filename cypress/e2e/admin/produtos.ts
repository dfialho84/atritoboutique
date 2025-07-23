import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu estou autenticado como um administrador", () => {
    const username = Cypress.env("admin_username");
    const password = Cypress.env("admin_password");
    cy.loginClerk({ username, password });
});

Given("Eu acesso a seção administrativa a partir da página principal", () => {
    cy.get("header").contains("Administração").click();
});

// When("Eu acesso a seção de produtos na área administrativa", () => {});

// Then('Eu vejo o título "Gerenciar Produtos"', () => {});

// Then("Eu vejo a lista de produtos cadastrados", () => {});
