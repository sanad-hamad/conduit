/// <reference types="cypress" />
import { cleanUp,
         navigateToSignUpPage,
         verifyLoginLink,
         clickSignUpButton,
         verifyInvalidSignUpMsg
       } from "../../support/condut/helperFunction/signup_helper"
// data set on fields
import{dataSet} from "../../Assert/signup/signup_data"
let invalidSignUp="email can't be blank"

describe("Sign Up", () => {
 before(() => {
  cy.visit("/")
 })

 beforeEach(() => {
   navigateToSignUpPage()
   cleanUp();
 })

 it("Verify the link “have an account?” have attribute “href” with value “#login” and navigate to sign-in page", () => {
  verifyLoginLink();
 })

 it("Verify invalid registration when all fields are blank", () => {
  clickSignUpButton();
  verifyInvalidSignUpMsg(invalidSignUp)
 })

 it("Verify invalid registration with blank userName", () => {
  cy.signup(dataSet[0])
 })

 it("Verify invalid registration with blank Email", () => {
  cy.signup(dataSet[2])
 })

 it("Verify invalid registration with a blank password", () => {
  cy.signup(dataSet[1]);
 })

 it("Verify valid registration with all fields has correct data", () => {
   cy.signup(dataSet[3])
 })
})
