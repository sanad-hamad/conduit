import {dataSetToUpdateSetting} from "../../../Assert/update-setting/setting_data"
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

const verifyUpdatedSettings=(object)=>{
  if(object.username){
    cy.get(profileLocator.username)
      .should('have.text',object.username)
  }
  if(object.bio){
    cy.get(profileLocator.shortBio)
    .should('have.text',object.bio)
  }
  if(object.imageUrl){
    cy.get(profileLocator.profileImage)
    .should('have.attr','src',object.imageUrl)
  }
}
export{settingLocator,
       verifyUpdatedSettings,
      }