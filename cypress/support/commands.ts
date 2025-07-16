/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

type LoginCredentials = {
    username: string;
    password: string;
};

Cypress.Commands.add(
    "loginClerk",
    ({ username, password }: LoginCredentials) => {
        cy.visit("/signup");
        // const email = Cypress.env("username");
        cy.get("#identifier-field").type(username);
        cy.get(".cl-signIn-root .cl-formButtonPrimary")
            .contains("Continuar")
            .click();
        // const password = Cypress.env("password");
        cy.get(".cl-signIn-root #password-field").type(password);
        cy.get(".cl-signIn-root .cl-formButtonPrimary")
            .contains("Continuar")
            .click();
    }
);
