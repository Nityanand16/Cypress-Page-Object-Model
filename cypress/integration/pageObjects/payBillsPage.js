class payBillsPage{

    static getAssertPayBillsPage(){
        return cy.get('h2[class="board-header"]')
    }

    //Elments of Pay Saved Payee
    static getPayee(){
        return cy.get('select[id="sp_payee"]')
    }
    // static allDropdown(){
    //     cy.get('select[id="sp_payee"]')
    // }

    static getAccount(){
        return cy.get('select[id="sp_account"]')
    }

    static getamount(){
        return cy.get('input[id="sp_amount"]')
    }

    static getDate(){
        return cy.get('input[id="sp_date"]')
    }

    static getCalender(){
        return cy.get('td > a')
    }

    static getDescription(){
        return cy.get('input[id="sp_description"]')
    }

    static getPayButton(){
        return cy.get('input[id="pay_saved_payees"]')
    }

    static getAlertMessge(){
        return cy.get('div[id="alert_content"]')
    }

    static getAlertAddNewPayee(){
        return cy.get('div[id="alert_container"]')
    }

    //Elements of Add New Payee

    static getAddNewPayee(){
        return cy.get('a[href="#ui-tabs-2"]')
    }
    
    static getaddNewPayeePageheading(){
        return cy.get('div[id="ui-tabs-2"]>h2')
    }

    static getPayeeName(){
        return cy.get('input[id="np_new_payee_name"]')
    }

    static getPayeeAddress(){
        return cy.get('textarea[id="np_new_payee_address"]')
    }

    static getANPAccount(){
        return cy.get('input[id="np_new_payee_account"]')
    }

    static getPayeeDetails(){
        return cy.get('input[id="np_new_payee_name"]')
    }

    static getAddButton(){
        return cy.get('input[id="add_new_payee"]')
    }

    static getAlertConfirmation(){
        return cy.get('#alert_content')
    }

    //Elements of Purchase Foreign Currency

    static getPurchaseForeignCurrency(){
        return cy.get('a[href="#ui-tabs-3"]')
    }
    
    static getPurchaseForeignCurrencyheading(){
        return cy.get('div[id="ui-tabs-3"]>h2')
    }

    static getCurrency(){
        return cy.get('select[id="pc_currency"]')
    }

    static getPFCAmount(){
        return cy.get('input[id="pc_amount"]')
    }

    static getUSDRadiobutton(){
        return cy.get('input[id="pc_inDollars_true"]')
    }

    static getSelectedCurrency(){
        return cy.get('input[id="pc_inDollars_false"]')
    }

    static getCalculateCostButton(){
        return cy.get('input[id="pc_calculate_costs"]')
    }

    static getConversionAmountMessage(){
        return cy.get('label[id="pc_conversion_amount"]')
    }

    static getPurchaseButton(){
        return cy.get('input[id="purchase_cash"]')
    }

    static getPFCAlert(){
        return cy.get('#alert_content')
    }


}

export default payBillsPage;