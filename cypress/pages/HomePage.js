export class HomePage {
  constructor() {
    this.navigationMenuButton = "#open-navigation-menu-mobile";
    this.logoutButton = ":nth-child(8) > .next-bve2vl";
  }

  openNavigationMenu() {
    cy.get(this.navigationMenuButton).scrollIntoView().click();
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).should("be.visible").scrollIntoView().click();
  }
}
