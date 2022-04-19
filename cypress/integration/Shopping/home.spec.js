/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.typeLogin("standard_user", "secret_sauce");
  });
  it("check login successfully", () => {
    cy.url().should("include", "/inventory.html");
  });
  //   Cardinal
  it("verify add to chart", () => {
    cy.addToChart();
  });

  it("verify remove from chart", () => {
    cy.addToChart();
    cy.removeFromChart();
  });
  it("verify price high to low", () => {
    cy.orderByPriceDesc();
  });
});
