class homePage{

    static loadhomepage(){
        return cy.visit('http://zero.webappsecurity.com/')
    }//baseurl is stored in env and called from cypress.json file
    
    static getHomePageheading(){
        return cy.get('a[class="brand"]')//.should('be.visible')
    }
    
    static getOnlineBankingPage(){
        return cy.get('#onlineBankingMenu > div')
    }

    static getFeedbackPage(){
        return cy.get('li[id="feedback"]')         
    }

    static signinButton(){
        return cy.get('button[id="signin_button"]')
    }

    static getSearch(){
        return cy.get('input[id=searchTerm]')   
    }

    
}

export default homePage;
