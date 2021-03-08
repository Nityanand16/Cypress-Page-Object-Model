class accountSummaryPage{

    static getAccountSummaryheading() {
        return cy.get('.offset2 > :nth-child(1)');
    }

    static getAccountActivity() {
        return cy.get('span[id="account_activity_link"]');
    }

    // static getTransferFunds() {
    //     return cy.get('span[id="transfer_funds_link"]');
    // }

    static getPayBills() {
        return cy.get('span[id="pay_bills_link"]');
    }

    static getMyMoneyMap() {
        return cy.get('span[id="money_map_link"]');
    }

    static getOnlineStatements() {
        return cy.get('span[id="online_statements_link"]');
    }

    static getUsernameDropNDown(){
        return cy.get('a[class="dropdown-toggle"]').eq(1)
    }

    static getLogoutSign(){
        return cy.get('a[id="logout_link"]')
    }

}

export default accountSummaryPage;
