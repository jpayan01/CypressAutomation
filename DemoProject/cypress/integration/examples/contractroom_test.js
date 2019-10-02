/// <reference types="Cypress" />

import LoginPage from "../pageObjects/LoginPage"

     
describe('User login happy path', () => {
    loginPage = new LoginPage();
 
    it('enter valid login credentials',() => {
        

        //Navigate to DXC login page
        cy.visit("https://dxc-staging.contractroom.com")
        //Enter username
        loginPage.getUsername().type('rfcontroller@rf.com')
        //Enter password
        loginPage.getPassword().type('R@inforest1234')
 
    
    }) //end it block

}) //end describe block