class FrameworkEditorPage 
{

    //Click error exclamation icon to map framework
    clickExclamationIcon()
    {
        return cy.get('[data-model-id="2"] > :nth-child(6) > .error-exclamation');
    }

    //Click Hightlight button
    clickHighlightSection()
    {
        return cy.get('a.btn-light-blue');
    }

    //Highlight editor text
    highlightEditorText()
    {
        return cy.get('div.cke_editable_inline p ');
    }
}

export default FrameworkEditorPage