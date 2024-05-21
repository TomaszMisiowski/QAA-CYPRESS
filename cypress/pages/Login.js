export class LoginPage {
  constructor() {
    this.url = "https://www.edu.goit.global/account/login";
    this.emailInput = 'input[name="email"]';
    this.passwordInput = 'input[name="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  visit() {
    cy.visit(this.url);
  }

  fillEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  submitLoginForm() {
    cy.get(this.submitButton).click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submitLoginForm();
  }
}
