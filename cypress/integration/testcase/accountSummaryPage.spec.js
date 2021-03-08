import homePage from '../pageObjects/homePage'
import signinPage from '../pageObjects/signinPage'
import onlineBankingPage from '../pageObjects/onlineBankingPage'
import accountSummaryPage from '../pageObjects/accountSummaryPage'
import transferFundsPage from '../pageObjects/transferFundsPage'
import feedbackPage from '../pageObjects/feedbackPage'
import common from '../pageObjects/common'

describe('check the different links available at the page',()=>{

    beforeEach('signin with valid credentials',()=>{

        homePage.loadhomepage()
        homePage.signinButton().click()
        cy.fixture('signin').then((details)=>{
            cy.login(details.adminuser,details.adminpassword)
        })

    })

        it('assert the account summary page',()=>{

            accountSummaryPage.getAccountSummaryheading().should('be.visible')
            cy.url().should('include','account')
            
        })

        it('Test the Logout Button',()=>{
            
            //Click on Username & Assert
            accountSummaryPage.getUsernameDropNDown().should('be.visible').click()
            
            //Click on Logout Button & Assert
            accountSummaryPage.getLogoutSign().should('be.visible').click()

            //Come back to Home Page & Assert Logout
            homePage.getHomePageheading().should('be.visible')
        })

})