class common {

    static getHomePage(){
        return cy.go('back')
    }

    static getAddNewPayee(){
        return cy.get('a[href="#ui-tabs-2"]')
    }

    static getPurchaseNewPayee(){
        return cy.get('a[href="#ui-tabs-3"]')
    }

    static getTransferFunds() {
        return cy.get('#transfer_funds_tab > a')
    }

    static getPayBills() {
        return cy.get('li[id="pay_bills_tab"]>a')
    }








}

export default common;
