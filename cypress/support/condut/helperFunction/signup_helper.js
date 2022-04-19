// locator

let SignUpLocator = {
  userName: 'input[placeholder="Username"]',
  email: 'input[placeholder="Email"]',
  password: 'input[placeholder="Password"]',
  signUpLink: 'a[href="#/register"]',
  signUpButton: 'button[type="submit"]',
  loginLink: 'a[href="#/login"]',
}

const cleanUp=()=>{
  cy.get(SignUpLocator.email)
    .clear()
  cy.get(SignUpLocator.password)
    .clear()
  cy.get(SignUpLocator.userName)
    .clear()
}

const verifyInvalidSignUpMsg=(msg)=>{
  cy.contains(msg)
    .should('be.visible');
}

const navigateToSignUpPage=()=>{
  cy.get(SignUpLocator.signUpLink)
    .contains("Sign up")
    .click()
}

const verifyLoginLink=()=>{
  cy.get(SignUpLocator.loginLink)
    .should("have.attr", "href", "#/login")
}

const clickSignUpButton=()=>{
  cy.get(SignUpLocator.signUpButton).click();

}
export { SignUpLocator,
         cleanUp,
         verifyInvalidSignUpMsg,
         navigateToSignUpPage,
         verifyLoginLink,
         clickSignUpButton
        };
