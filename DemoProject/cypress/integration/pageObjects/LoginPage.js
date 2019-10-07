class LoginPage 
{

    //methods go here!
    enterUsername()
    {
        return cy.get("input[id='id_username']")
    }

    enterPassword()
    {
        return cy.get("input[id='id_password']")            
    }

    clickLoginButton()
    {
        return cy.get("input[value='Login']")
    }
}

export default LoginPage