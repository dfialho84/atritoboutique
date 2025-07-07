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

Cypress.Commands.add("loginClerk", () => {
    cy.log("Logging in with Clerk...");
    cy.request({
        method: "POST",
        url: "https://api.clerk.dev/v1/sessions",
        headers: {
            Authorization: "Bearer sk_test_xxxxxxxxxxxxxxxxxxxxxx",
            "Content-Type": "application/json",
        },
        body: {
            user_id: "",
        },
    })
        .then((response) => {
            const sessionId = response.body.id;
            const clientUat = String(response.body.expire_at);
            cy.log("Session created:", response.body);
            cy.setCookie("clerk_active_context", sessionId, {
                domain: "localhost",
                secure: false, // se estiver rodando em http
                httpOnly: false, // Clerk precisa ver o cookie no client
            });
            cy.setCookie("__client_uat", clientUat, {
                domain: "localhost",
                secure: false, // se estiver rodando em http
                httpOnly: false, // Clerk precisa ver o cookie no client
            });

            return cy.request({
                method: "POST",
                url: `https://api.clerk.dev/v1/sessions/${sessionId}/tokens`,
                headers: {
                    Authorization: "Bearer sk_test_xxxxxxxxxxxxxxxxxxxxxxxxx",
                    "Content-Type": "application/json",
                },
            });
        })
        .then((response) => {
            cy.log(response.body);
            const jwtToken = response.body.jwt;
            cy.log("JWT Token:", jwtToken);
            cy.visit("http://localhost:3000");
            cy.setCookie("__session", jwtToken, {
                domain: "localhost",
                secure: false, // se estiver rodando em http
                httpOnly: false, // Clerk precisa ver o cookie no client
            });
            cy.reload();
        });
});
