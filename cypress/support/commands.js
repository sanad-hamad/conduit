// ***********************************************
// This example commands.js shows you how to
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

// -- This can be access on any spec file and login

Cypress.Commands.add("typeLogin", (userName, password) => {
  cy.get('input[data-test="username"]').type(userName);
  cy.get('input[data-test="password"]').type(password);
  cy.get('input[data-test="login-button"]').click();
});

// this command to logout
Cypress.Commands.add("logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

Cypress.Commands.add("addToChart", () => {
  cy.get('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get("#shopping_cart_container").click();
  cy.get(".cart_item").as("cart").should("have.length", 2);
});

Cypress.Commands.add("removeFromChart", () => {
  cy.get("#shopping_cart_container").click();
  cy.get('button[data-test="remove-sauce-labs-backpack"]').click();
  cy.get('button[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
  cy.get(".cart_item").should("have.length", 0);
});

Cypress.Commands.add("orderByPriceDesc", () => {
  cy.get('select[data-test="product_sort_container"]').select(
    "Price (high to low)"
  );
  cy.get("div.inventory_item_price").first().should("contain", "49");
});

Cypress.Commands.add("orderByPriceAsd", () => {
  cy.get('select[data-test="product_sort_container"]').select(
    "Price (low to high)"
  );
});
