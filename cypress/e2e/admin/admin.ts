import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu estou na página principal", () => {
    cy.visit("/");
});

Then("Eu não vejo o link para a seção administrativa", () => {
    cy.get("header", { timeout: 10000 }).should(
        "not.contain.text",
        "Administração"
    );
});

Given("Eu visito a página Administrativa", () => {
    cy.visit("/admin", { failOnStatusCode: false });
});

Then("Eu sou redirecionado para a página Principal", () => {
    cy.location("pathname").should("eq", "/");
});

Then(
    "Eu vejo uma mensagem de erro informando que preciso estar autenticado e ser um administrador",
    () => {
        cy.wait(500);
        cy.get("body")
            .contains(
                "Você precisa ser um administrador para acessar esta página.",
                { timeout: 10000 }
            )
            .should("be.visible");
    }
);

Given(
    "Eu estou autenticado como um usuário sem permissão de administrador",
    () => {
        const username = Cypress.env("username");
        const password = Cypress.env("password");
        cy.loginClerk({ username, password });
    }
);

Given("Eu estou autenticado como um administrador", () => {
    const username = Cypress.env("admin_username");
    const password = Cypress.env("admin_password");
    cy.loginClerk({ username, password });
});

Given("Eu aceeo a seção administrativa a partir da página principal", () => {
    cy.get("header").contains("Administração").click();
});

Then("Eu vejo o título {string}", (title: string) => {
    cy.get("h1").should("have.text", title);
});
