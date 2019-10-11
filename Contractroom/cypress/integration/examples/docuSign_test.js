/// <reference types="Cypress" />

//imports
import LoginPage from "../pageObjects/LoginPage";
import ActivityListingPage from "../pageObjects/ActivityListingPage";
import StartNewDocumentModal from "../pageObjects/StartNewDocumentModal";
import FileUploadModal from "../pageObjects/FileUploadModal";
import FrameworkListingPage from "../pageObjects/FrameworkListingPage";
import HowWillYouWorkModal from "../pageObjects/HowWillYouWorkModal";
import FrameworkEditorPage from "../pageObjects/FrameworkEditorPage";
     
describe('User login happy path', () => {
  
    beforeEach(function () {
        //Get data from example file to access users
        cy.fixture('example')
          .then((users) => {
            this.users = users
          })
      })
    
    it('enter valid login credentials',function () {
        //instantiate Page Objects
        const loginPage = new LoginPage();
        const activityListingPage = new ActivityListingPage();
        const startNewDocumentModal = new StartNewDocumentModal();
        const fileUploadModal = new FileUploadModal();
        const frameworkListingPage = new FrameworkListingPage();
        const howWillYouWork = new HowWillYouWorkModal();
        const frameworkEditorPage = new FrameworkEditorPage();

        //Navigate to DXC login page
        cy.visit("https://dxc-staging.contractroom.com/login/?next=%2Fanalytics%2F%3F");
        //Enter username
        loginPage.enterUsername().type(this.users.rfcontroller);
        //Enter password
        loginPage.enterPassword().type(this.users.password);
        //Click Login buttn
        loginPage.clickLoginButton().click();

        //Verify Activity Page
        activityListingPage.verifyPageTitle();
        //Clikc New Agreement button
        activityListingPage.clickNewAgreementButton().click();
        //Verify Document is present
        activityListingPage.verifyDocumentButtonIsDisplayed().should('have.text', 'Document');
        //Click Document button 
        activityListingPage.clickDocumentButton().click();

        //*** */START NEW DOCUMENT MODAL***//
        //Enter Document Title
        startNewDocumentModal.enterDocumentTitle().type(this.users.TSTDocument + '0003');
        //Enter Document Description
        startNewDocumentModal.enterDocumentDescription().type('Test Document');
        //Select Upload MS Word or text file
        startNewDocumentModal.selectDocumentSource().select('Upload MS Word or text file');
        //Enter CP Legal Entity
        startNewDocumentModal.enterCPLegalEntity().type('Test');
        //Click Next button
        startNewDocumentModal.clickNextButton().click();
        //Verify FrameworkListing Page is diplayed
        startNewDocumentModal.verifyBrowseLinkIsPresent().should('have.text', 'browse');
        //Click Browse link
        startNewDocumentModal.clickBrowseLink().click();
        //Upload a File
        fileUploadModal.uploadTXTFile('Attachment.txt');
        //Click Next button
        fileUploadModal.clickNextButton().click();
        
        //Verify Framework Listing label is present
        frameworkListingPage.verifyFrameworkPageLabel().should('contain.text', 'Select Framework for Document');
        //Click Docusign Framework
        frameworkListingPage.selectDocusignFramework().click();

        //Collaboration Settings Modal
        //Click Next button
        howWillYouWork.clickNextButton().click();

        //FRAMEWORK EDITOR PAGE
        frameworkEditorPage.clickExclamationIcon()
          .should('be.visible')
          .click();

        //Click Highlight section
        frameworkEditorPage.clickHighlightSection().click()
        //Highlight text in editor
        //frameworkEditorPage.highlightEditorText().type('{selectall}');
        frameworkEditorPage.highlightEditorText()
        .click()
        .type('{selectall}{rightarrow}{rightarrow}')

    
    }) //end it block

}) //end describe block