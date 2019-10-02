class LoginPage 
{

    //methods go here!
    getUsername()
    {
        cy.get("input[id='id_username']")
    }

    getPassword()
    {
        cy.get("input[id='id_password']")            
    }

    getLoginButton()
    {
        cy.get("input[value='Login']")
    }
}

export default LoginPage