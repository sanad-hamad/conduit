/// <reference types="cypress" />
const clearUpParameter={username:"username",bio:"bio",ImgProfile:"ImgProfile"}
import {validLoginCase} from "../../Assert/login/login_data"
import {dataSetToUpdateSetting} from "../../Assert/update-setting/setting_data"
import {
        cleanUpAll,
        cleanUp,
        verifyUpdatedSettings
       } from "../../support/condut/helperFunction/updateSetting_helper"
describe('verify update profile', () => {
    let jwtToken="";
    before(()=>{
        cy.visit('/login')
         cy.login(validLoginCase)
         cy.wait(7000)
        cy.then(()=>{
            jwtToken=localStorage.getItem('jwtToken')
            cy.log(jwtToken)
        })
    })

    beforeEach(() => {
        // get the val of localstorge  jwt
      window.localStorage.setItem('jwtToken',jwtToken)
      cy.visit('/settings')
    });

    dataSetToUpdateSetting.map((dataToUpdate)=>{
       it(dataToUpdate.testName, () => {
        cy.updateSetting(dataToUpdate)
        verifyUpdatedSettings(dataToUpdate)
       });
    })
 })