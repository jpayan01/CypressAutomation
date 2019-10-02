/// <reference types="Cypress" />

//imports
import LoginPage from "../pageObjects/LoginPage"

     
describe('User login happy path', () => {

    before(()=>{
        cy.fixture('example').then((data) => {
            this.data = data
        })

    })


    it('enter valid login credentials',() => {
        //instantiate Page Objects
        const loginPage = new LoginPage()

        //Navigate to DXC login page
        cy.visit("https://dxc-staging.contractroom.com")
        //Enter username
        loginPage.getUsername().type(this.data.rfController)
        //Enter password
        loginPage.getPassword().type(this.data.password)
 
    
    }) //end it block

}) //end describe block