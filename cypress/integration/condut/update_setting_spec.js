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

    })
    beforeEach(() => {
       // Preserve cookie in every test
       Cypress.Cookies.preserveOnce('1P_JAR',
                                   '_fbp','ab.storage.deviceId.5791d6db-4410-4ace-8814-12c903a548ba',
                                   '_ga',
                                   '_gid',
                                   '_fbp'
                                   )
    });
    it('verify go to setting', () => {
        cy.getCookies()
    });
    it('verify update username', () => {
        cy.updateSetting({username:"Samer"})
    });
 })