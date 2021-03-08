import homePage from '../pageObjects/homePage'
import signinPage from '../pageObjects/signinPage'
import onlineBankingPage from '../pageObjects/onlineBankingPage'
import accountSummaryPage from '../pageObjects/accountSummaryPage'
import transferFundsPage from '../pageObjects/transferFundsPage'
import feedbackPage from '../pageObjects/feedbackPage'
import common from '../pageObjects/common'
import payBillsPage from '../pageObjects/payBillsPage'

describe('check the different links available at the page',()=>{

    before('signin with valid credentials',()=>{

        homePage.loadhomepage()
        homePage.signinButton().click()
        cy.fixture('signin').then((details)=>{
            cy.login(details.adminuser,details.adminpassword)
        })
        //Go back to Home Page
        common.getHomePage()

    })

    it('Move to Online Banking Page',()=>{

        homePage.getOnlineBankingPage().click()
        onlineBankingPage.getOBheading().should('be.visible')
        .contains('Online Banking')
        .and('have.text','Online Banking')

    })

})