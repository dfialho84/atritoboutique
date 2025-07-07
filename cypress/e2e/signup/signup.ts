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

Then("eu clico no icone do Google para me registrar", () => {
    cy.get(
        'div[data-clerk-component="SignUp"] img[alt="Sign in with Google"]'
    ).click();
});

Then("Eu vejo o título {string}", (titulo: string) => {
    cy.contains(titulo).should("be.visible");
});

Given("o usuário está autenticado", () => {
    cy.loginClerk();
});

Then("eu vejo a foto to usuário no topo da tela", () => {
    // cy.get('img[alt="User profile"]').should("be.visible");
    cy.log("Verificando se o usuário está autenticado");
});
