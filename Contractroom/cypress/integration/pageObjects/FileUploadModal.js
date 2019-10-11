class FileUploadModal 
{
    //Upload File
    uploadTXTFile(nameOfFile)
    {
        const fileName = nameOfFile;
 
        cy.fixture(fileName).then(fileContent => {
        return cy.get('input.fileUpload').upload({ fileContent, fileName, mimeType: 'text/plain' });
        });
    }

    clickNextButton()
    {
        return cy.get('input[value=Next]');
    }
}

export default FileUploadModal