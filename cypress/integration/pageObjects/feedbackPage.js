class feedbackPage {

    static getFBheading(){
        return cy.get('h3[id="feedback-title"]').should('be.visible')
    }

    static getFAQLink(){
        return cy.get('span[id="faq-link"]')
    }
    static getFAQHeading(){
        return cy.get('div[class="page-header"]>h3')
    }

    static getYourName(){
        return cy.get('input[id="name"]')
    }
    
    static getYourEmailAddress(){
        return cy.get('input[id="email"]')
    }

    static getSubject(){
        return cy.get('input[id="subject"]')
    }

    static getAskYourQuestionsHere(){
        return cy.get('textarea[id="comment"]')
    }

    static getSendMessage(){
        return cy.get('input[name="submit"]')
    }

    static getClear(){
        return cy.get('input[name="clear"]')
    }

    static getCustomerServiceMessage(){
        return cy.get('#feedback-title')
    }

}

export default feedbackPage;
