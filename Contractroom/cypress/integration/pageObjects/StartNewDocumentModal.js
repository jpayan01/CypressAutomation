class StartNewDocumentModal
{
    //Function create a js randon number
    getRandomNumber = function (start, range) {
        let createRandomNunber = Math.floor(Math.Random()* range) + start;
    
        while (createRandomNunber > range) {
            createRandomNunber = Math.floor(Math.Random()* range) + start;
        }
        
        return createRandomNumber;
    }

    createRandomNumber(start, range){
        var number = function(){
            let createNumber = Math.floor(Math.Random()* range) + start;
    
            while (createNumber > range) {
                createNumber = Math.floor(Math.Random()* range) + start;
            }
        
            return createNumber;
        }
    }

    //Enter Document Title
    enterDocumentTitle() 
    {
        return cy.get('input[id=id_name]');
    }

    //Enter Document Description
    enterDocumentDescription()
    {
        return cy.get('textarea[id=id_description]');
    }

    //Select Document source
    selectDocumentSource()
    {
        return cy.get('select[id=id_document_source]');
    }

    //Enter Counterparty Lega Entity
    enterCPLegalEntity()
    {
        return cy.get('input[id=cp_company_name]');
    }

    //Click Next button
    clickNextButton()
    {
        return cy.get('input[value=Next]');
    }

    //Verify Browse link is displayed
    verifyBrowseLinkIsPresent()
    {
        return cy.get('span.btn-browse');
    }

    clickBrowseLink()
    {
        return cy.get('span.btn-browse');
    }

}

export default StartNewDocumentModal

