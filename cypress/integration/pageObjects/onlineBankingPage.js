class onlineBankingPage {
  
    static getOBheading() {
      return cy.get('div[class="span6"]>h1')//.should('be.visible')
    }

    static getAccountSummary() {
        return cy.get('span[id="account_summary_link"]');
    }

}

export default onlineBankingPage;
