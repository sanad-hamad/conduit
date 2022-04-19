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
    .should('have.text',updateSettingValue.username)
}

const verifyShortBioUpdated=()=>{
  cy.get(profileLocator.shortBio)
    .should('have.text',updateSettingValue.bio)
}
const verifyProfileImage=()=>{
  cy.get(profileLocator.profileImage)
    .should('have.attr','src',updateSettingValue.imageUrl)
}
export{settingLocator,
       saveCookies,
       verifyUsernameUpdated,
      verifyProfileImage,
      verifyShortBioUpdated
      }