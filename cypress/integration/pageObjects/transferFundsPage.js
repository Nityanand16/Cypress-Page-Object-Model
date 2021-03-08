class transferFunds{

    static getTFPageheading(){
        return cy.get('h2[class="board-header"]')//.contains('Transfer Money & Make Payments')
    }

    static getFromAccount(){
        return cy.get('select[id="tf_fromAccountId"]')
        //cy.get('#tf_fromAccountId')
    }

    static getToAccount(){
        return cy.get('select[id="tf_toAccountId"]')
    }

    static getAmount(){
        return cy.get('input[id="tf_amount"]')
    }

    static getDescription(){
        return cy.get('input[id="tf_description"]')
    }

    static getContinueButton(){
        return cy.get('button[id="btn_submit"]')
    }

    static getVerificationMessage(){
        return cy.get('h2[class="board-header"]')
    }

    static getVerificationMessage(){
        return cy.get('h2[class="board-header"]')
    } 
    
    static getSubmitButton(){
        return cy.get('button[id="btn_submit"]')
    }

    static getCancelButton(){
        return cy.get('a[id="btn_cancel"]')
    }

    static getConfirmationMessage(){
        return cy.get('h2[class="board-header"]')
    }





}

export default transferFunds;
