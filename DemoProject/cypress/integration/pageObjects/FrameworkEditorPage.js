class FrameworkEditorPage 
{

    //Click error exclamation icon to map framework
    clickExclamationIcon()
    {
        return cy.get('[data-model-id="2"] > :nth-child(6) > .error-exclamation');
    }

    clickHighlightSection()
    {
        return cy.get('a.btn-light-blue')
    }
}

export default FrameworkEditorPage