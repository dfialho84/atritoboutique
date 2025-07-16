declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to login via Clerk
         * @param credentials - Object containing username and password
         */
        loginClerk(credentials: {
            username: string;
            password: string;
        }): Chainable<void>;
    }
}
