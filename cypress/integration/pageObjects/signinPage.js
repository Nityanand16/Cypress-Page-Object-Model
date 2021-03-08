class signinPage{

    static getSignInheading(){
        return cy.get('div[class="page-header"]>h3')
    }
    
    static getLogin(){
        return cy.get('input[id="user_login"]')
    }

    static getPassword(){
        return cy.get('input[id="user_password"]')
    }

    static getSubmit(){
        return cy.get('input[name="submit"]')
    }

    static getForgetPassword(){
        return cy.get('a[tabindex="5"]')
    }

    static getForgetPasswordEmail(){
        return cy.get('#user_email')
    }

    static getFPSendPassword(){
        return cy.get('.btn')
    }

    static getFPEmailSend(){
        return cy.get('.offset3')
    }

    static getBackToSafetyButton(){
        return cy.get('button[id="primary-button"]')
    }

    static getMoveToHomePage(){
        return cy.get('a[class="brand"]')
    }

    static getInvalidCredentialsAlert(){
        return cy.get('div[class="alert alert-error"]')
    }
    
    

}

export default signinPage;
