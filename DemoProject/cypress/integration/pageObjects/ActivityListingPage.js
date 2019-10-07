class ActivityListingPage 
{

    //methods go here!
    //Verify Page name
    verifyPageTitle()
    {
        return cy.get('.pull-left').should('have.text', 'Activity')
    }

    //New Agreement button
    clickNewAgreementButton()
    {
        return cy.get('button[id=dropdownMenu1]')
    }

    //Validate menu options are available for Document 
    verifyDocumentButtonIsDisplayed()
    {
       return cy.get('.dropdown-menu > :nth-child(1) > .btn')
    }

    //Click Document button 
    clickDocumentButton()
    {
        return cy.get('.dropdown-menu > :nth-child(1) > .btn')
    }
}

export default ActivityListingPage