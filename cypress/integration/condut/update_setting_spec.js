/// <reference types="cypress" />
/// <reference types="cypress" />
import {validLoginCase} from "../../Assert/login/login_data"
import {updateSettingValue} from "../../Assert/update-setting/setting_data"
import {saveCookies,
        verifyProfileImage,
        verifyShortBioUpdated,
        verifyUsernameUpdated
       } from "../../support/condut/helperFunction/updateSetting_helper"
describe('first', () => { 
    before(()=>{
        cy.visit('/login')
         cy.login(validLoginCase)
         cy.wait(7000)
       cy.saveLocalStorage()
    })
    beforeEach(() => {
        // get the val of localstorge  jwt
      cy.restoreLocalStorage()
      cy.visit('/settings')
    });
    afterEach(()=>{
        // after test is done save jwt token
        cy.saveLocalStorage()
    })
    it('verify go to setting', () => {
        cy.getLocalStorage('jwtToken').should('exist')
    });
    it('second',()=>{
         cy.getLocalStorage('jwtToken').should('exist')
    })
 })