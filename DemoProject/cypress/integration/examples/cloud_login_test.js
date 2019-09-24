/// <reference types="Cypress" />

describe('DXC login and create an agreement', function() {
    it('Complete an Agreement', function() {
        cy.window().clearCookies()
        cy.clearLocalStorage()
    
        cy.visit('https://demo.contractroom.com/login/')
        //Login to Cloud
        cy.get('#id_username').type('rfcontroller@rf.com')
        cy.get('#id_password').type('R@inforest1234')
        cy.get("input[value='Login']").click()

        //Close walk-me pop up
        cy.get('.walkme-action-destroy-1').click()

        //Log back out from Cloud
        cy.get(':nth-child(6) > .dropdown-toggle').click()
        cy.get("a[href='/users/account/logout/']").click()
    })

})
