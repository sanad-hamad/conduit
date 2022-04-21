let user="Sanad"
const loginLocator={
  email:"input[ng-model='$ctrl.formData.email']",
  password:"input[ng-model='$ctrl.formData.password']",
  signInButton:'button[type$="submit"]',
  username:`a[href='#/@${user}']`,
  signUpLink:`a[ng-show$="$ctrl.authType === 'login'"]`

}

const cleanUp=()=>{
    cy.get(loginLocator.email)
      .clear()
    cy.get(loginLocator.password)
      .clear()
}

const verifyInvalidLoginMsg=(msg)=>{
    cy.contains(msg)
      .should('be.visible')
}
const clickLoginButton=()=>{
    cy.get(loginLocator.signInButton)
      .click()
}
const verifySignUpLink=()=>{
   cy.get(loginLocator.signUpLink)
     .should('have.attr',"href","#/register")
}
const clickLoginInButton=()=>{
    cy.get(loginLocator.signInButton)
      .click()
}
const verifySuccessfullyLogin=()=>{
  cy.get(loginLocator.username)
    .contains(user)
    .should('have.attr','href',`#/@${user}`)
    .and('contain',user)
}
export{cleanUp,
       loginLocator,
       verifyInvalidLoginMsg,
       clickLoginButton,
       verifySignUpLink,
       clickLoginInButton,
       verifySuccessfullyLogin
      }