Cypress.Commands.add("login", (email, password) => {
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

describe("Test logowania na stronie edu.goit.global", () => {
  it("Logowanie użytkownika user888@gmail.com", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.login("user888@gmail.com", "1234567890");

    cy.wait(5000);

    cy.get("#open-navigation-menu-mobile").scrollIntoView().click();

    cy.get(":nth-child(12) > .next-bve2vl")
      .should("be.visible")
      .scrollIntoView()
      .click();

    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});
