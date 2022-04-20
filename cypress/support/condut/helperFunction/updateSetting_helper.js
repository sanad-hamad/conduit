import {updateSettingValue} from "../../../Assert/update-setting/setting_data"
const settingLocator=
                    {
                      profileImage:'input[ng-model="$ctrl.formData.image"]',
                      username:'input[ng-model="$ctrl.formData.username"]',
                      shortBio:'textarea[ng-model="$ctrl.formData.bio"]',
                      updateButton:'button[type="submit"]',
                      logoutButton:'button[ng-click="$ctrl.logout()"]'
                    }
const profileLocator=
                  {
                    username:`h4[ng-bind="::$ctrl.profile.username"]`,
                    shortBio:`p[ng-bind="::$ctrl.profile.bio"]`,
                    profileImage:"img.user-img"
                  }


                    const saveCookies = () => {
                      Cypress.Cookies.defaults({
                        preserve: (cookie) => {
                          return true
                        },
                      })
                    }

const verifyUsernameUpdated=()=>{
  cy.get(profileLocator.username)
    .should('have.text',updateSettingValue[0].username)
}

const verifyShortBioUpdated=()=>{
  cy.get(profileLocator.shortBio)
    .should('have.text',updateSettingValue[1].bio)
}
const verifyProfileImage=()=>{
  cy.get(profileLocator.profileImage)
    .should('have.attr','src',updateSettingValue[2].imageUrl)
}

const verifyprofileIsUpdated=()=>{
  cy.get(profileLocator.username)
    .should('have.text',updateSettingValue[3].username)
  cy.get(profileLocator.shortBio)
    .should('have.text',updateSettingValue[3].bio)
  cy.get(profileLocator.profileImage)
    .should('have.attr','src',updateSettingValue[2].imageUrl)
}
const cleanUp=(locator)=>{
   if(locator=="username")
    {
      cy.get(settingLocator.username)
        .clear()
    }
    else if(locator=="ImgProfile")
    {
      cy.get(settingLocator.profileImage)
        .clear()
    }
    else if(locator=="bio")
    {
      cy.get(settingLocator.shortBio)
        .clear()
    }
}
const cleanUpAll=()=>{
  cy.get(settingLocator.username)
    .clear()
  cy.get(settingLocator.shortBio)
    .clear()
  cy.get(settingLocator.profileImage)
    .clear()
}
export{settingLocator,
       saveCookies,
       verifyUsernameUpdated,
      verifyProfileImage,
      verifyShortBioUpdated,
      verifyprofileIsUpdated,
      cleanUp,
      cleanUpAll
      }