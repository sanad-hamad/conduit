/// <reference types="cypress" />
/// <reference types="cypress" />
const clearUpParameter={username:"username",bio:"bio",ImgProfile:"ImgProfile"}
import {validLoginCase} from "../../Assert/login/login_data"
import {dataSetToUpdateSetting} from "../../Assert/update-setting/setting_data"
import {
        cleanUpAll,
        cleanUp,
        verifyProfileImage,
        verifyShortBioUpdated,
        verifyUsernameUpdated,
        verifyProfileIsUpdated,
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
    it('verify update username', () => {
        cleanUp(clearUpParameter.username)
        cy.updateSetting(dataSetToUpdateSetting[0]);
         verifyUsernameUpdated()
    });
    it('verify update short bio',()=>{
        cleanUp(clearUpParameter.bio)
        cy.updateSetting(dataSetToUpdateSetting[1])
        verifyShortBioUpdated();
    })
    it('verify update profile picture', () => {
        cleanUp(clearUpParameter.ImgProfile)
        cy.updateSetting(dataSetToUpdateSetting[2])
        verifyProfileImage();
    });
    it('verify update profile', () => {
        cleanUpAll();
     cy.updateSetting(dataSetToUpdateSetting[3])
     verifyProfileIsUpdated()
    });
 })