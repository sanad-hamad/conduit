import { settingLocator,cleanUp} from "../helperFunction/updateSetting_helper"

Cypress.Commands.add('updateSetting', ({username,bio,imageUrl})=>{
    if(username)
    {
        cy.get(settingLocator.username)
          .clear()
          .type(username)
    }
    if(bio)
    {
        cy.get(settingLocator.shortBio)
          .clear()
          .type(bio)
    }
    if(imageUrl)
    {
        cy.get(settingLocator.profileImage)
          .clear()
          .type(imageUrl)

    }
    cy.get(settingLocator.updateButton)
      .click()
} );