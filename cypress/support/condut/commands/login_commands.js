import {loginLocator,verifyInvalidLoginMsg} from "../helperFunction/login_helper"
import{loginBlankMsg,cleanUp,username} from "../../../Assert/login/login_data"
Cypress.Commands.add('login', ({email="blank",password="blank"})=>{

if(email!="blank" && password=="blank")
{
 cy.get(loginLocator.email)
   .type(email)
 cy.get(loginLocator.signInButton)
   .click()
}
if(email=="blank" && password!="blank")
{
    cy.get(loginLocator.password)
      .type(password)
    cy.get(loginLocator.signInButton)
      .click()
}
if(email!="blank" && password!="blank")
{
    cy.get(loginLocator.email)
      .type(email)
    cy.get(loginLocator.password)
      .type(password)
    cy.get(loginLocator.signInButton)
      .click()
}
} );