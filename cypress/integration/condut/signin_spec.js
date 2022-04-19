import {
       cleanUp,
       clickLoginInButton,
       verifySignUpLink,
       verifyInvalidLoginMsg,
       verifySuccessfullyLogin
       } from "../../support/condut/helperFunction/login_helper"
import {invalidLoginCase,validLoginCase,username} from "../../Assert/login/login_data"
describe('Sign In', () => {
 beforeEach(() => {
     cy.visit("/login")
     cleanUp();
 });
 it("Verify sign up link work correctly", () => {
    verifySignUpLink()
 })
 it("Verify invalid login with a blank (password and email)", () => {
     clickLoginInButton()
 })

 invalidLoginCase.map((testCase)=>{
      it(testCase.testCaseName, () => {
            cy.login(testCase)
            verifyInvalidLoginMsg(testCase.loginBlankMsg)

      });
   })
   it("Verify valid login with a valid email and password", () => {
       cy.login(validLoginCase)
       verifySuccessfullyLogin()
   });
 })