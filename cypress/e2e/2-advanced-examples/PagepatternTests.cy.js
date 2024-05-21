import { LoginPage } from "../../pages/Login";
import { HomePage } from "../../pages/HomePage";

describe("Test logowania na stronie edu.goit.global", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it("Logowanie użytkownika testowyqa@qa.team", () => {
    loginPage.visit();
    loginPage.login("testowyqa@qa.team", "QA!automation-1");
    cy.wait(5000);
    homePage.openNavigationMenu();
    homePage.clickLogoutButton();
    cy.url().should("eq", loginPage.url);
  });
});
