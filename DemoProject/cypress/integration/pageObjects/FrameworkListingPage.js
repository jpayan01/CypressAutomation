class FrameworkListingPage 
{

    //Verify Framework Page label is present
    verifyFrameworkPageLabel()
    {
        return cy.get('h3.pull-left');
    }

    //Select Framework by Name
    selectDocusignFramework()
    {
        return cy.get('[action-query-id="188641"] > :nth-child(1)');
    }
}

export default FrameworkListingPage