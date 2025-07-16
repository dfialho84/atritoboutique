import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu visito a página {string}", (url: string) => {
    cy.visit(url);
});

Given("Eu clico no link {string}", () => {
    cy.contains("Entrar / Registrar-se").click();
});

Then("Eu sou redirecionado para a página de login", () => {
    cy.url().should("include", "/signup");
});

Then("Eu vejo o fomrulário de login", () => {
    cy.get(".cl-signIn-root > .cl-cardBox > .cl-card").should("be.visible");
});

When("Eu preencho o campo Email", () => {
    const email = Cypress.env("username");
    cy.get("#identifier-field").type(email);
});

When("Eu clico em continuar", () => {
    cy.get(".cl-signIn-root .cl-formButtonPrimary")
        .contains("Continuar")
        .click();
});

When("Eu preencho o campo Senha", () => {
    const password = Cypress.env("password");
    cy.get(".cl-signIn-root #password-field").type(password);
});

Then("Eu sou redirecionado para a página principal", () => {
    const baseUrl = Cypress.config("baseUrl");
    cy.url().should("eq", baseUrl + "/");
});

Then("Eu clico avatar no topo da tela", () => {
    cy.get(".cl-userButtonBox > .cl-avatarBox > .cl-avatarImage").click();
});

Then("Eu vejo o meu nome", () => {
    cy.get(".cl-userPreview").should("contain.text", "diego");
});
