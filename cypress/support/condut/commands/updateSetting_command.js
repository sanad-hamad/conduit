import { settingLocator,cleanUp} from "../helperFunction/updateSetting_helper"

Cypress.Commands.add('updateSetting', ({username,bio,imageUrl})=>{
    if(username &&!bio&&!imageUrl)
    {
        cy.get(settingLocator.username)
          .type(username)
        cy.get(settingLocator.updateButton)
          .click()
    }
    if(bio&&!username&&!imageUrl)
    {
        cy.get(settingLocator.shortBio)
          .type(bio)
        cy.get(settingLocator.updateButton)
          .click()
    }
    if(imageUrl&&!bio&&!username)
    {
        cy.get(settingLocator.profileImage)
          .type(imageUrl)
        cy.get(settingLocator.updateButton)
          .click()
    }
    if(username && imageUrl &&bio)
    {
        cy.get(settingLocator.username)
          .type(username)
        cy.get(settingLocator.shortBio)
          .type(bio)
        cy.get(settingLocator.profileImage)
          .type(imageUrl)
        cy.get(settingLocator.updateButton)
          .click()
    }
} );