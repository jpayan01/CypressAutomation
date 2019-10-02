class LoginPage 
{

    //methods go here!
    getUsername()
    {
        return cy.get("input[id='id_username']")
    }

    getPassword()
    {
        return cy.get("input[id='id_password']")            
    }

    getLoginButton()
    {
        return cy.get("input[value='Login']")
    }
}

export default LoginPage