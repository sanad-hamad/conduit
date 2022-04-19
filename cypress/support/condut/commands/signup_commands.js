import {SignUpLocator,verifyInvalidSignUpMsg} from '../helperFunction/signup_helper'
let [emailBlank,passwordBlank,usernameBlank]=
[
 "email can't be blank",
 "password can't be blank",
 "username can't be blank"
]
Cypress.Commands.add('signup',({username="blank",email="blank",password="blank"})=>{
    if(username=="blank" && email!="blank" &&password!="blank")
      {
       cy.get(SignUpLocator.email)
         .type(email);
       cy.get(SignUpLocator.password)
         .type(password)
       cy.get(SignUpLocator.signUpButton)
         .click()
       verifyInvalidSignUpMsg(usernameBlank)
      }
      else if(email=="blank"&&username!="blank" && password!="blank")
      {
        cy.get(SignUpLocator.userName)
          .type(username)
        cy.get(SignUpLocator.password)
          .type(password)
        cy.get(SignUpLocator.signUpButton)
          .click()
        verifyInvalidSignUpMsg(emailBlank)
      }
      else if(password=="blank" && username!="blank"&&email!="blank")
      {
        cy.get(SignUpLocator.email)
          .type(email)
        cy.get(SignUpLocator.userName)
          .type(username)
        cy.get(SignUpLocator.signUpButton)
          .click()
        verifyInvalidSignUpMsg(passwordBlank)
      }
      else if(username!="blank"&&password!="blank"&&email!="blank")
      {
        cy.get(SignUpLocator.email)
          .type(email)
        cy.get(SignUpLocator.password)
          .type(password)
        cy.get(SignUpLocator.userName)
          .type(username)
        cy.get(SignUpLocator.signUpButton)
          .click()
      }
 });
