import homePage from '../pageObjects/homePage'
import signinPage from '../pageObjects/signinPage'
import onlineBankingPage from '../pageObjects/onlineBankingPage'
import accountSummaryPage from '../pageObjects/accountSummaryPage'
import transferFundsPage from '../pageObjects/transferFundsPage'
import feedbackPage from '../pageObjects/feedbackPage'
import common from '../pageObjects/common'
import payBillsPage from '../pageObjects/payBillsPage'

describe('Check the credentials at Signin Page',()=>{

    const randomEmailId = `${Math.floor(Math.random() * 100) + 'Nitya' + '@gmail.com'}`
    
    beforeEach('load Home Page',()=>{
        homePage.loadhomepage()
        homePage.getHomePageheading().should('be.visible')
    //})

    //it('verify the Signin Button',()=>{

        homePage.signinButton().click()
        signinPage.getSignInheading().should('be.visible')
    })

    it('verify with invalid credentials',()=>{

        cy.fixture('signin').then((details)=>{
            cy.login(details.invaliduser,details.invalidpassword)
            cy.contains('Login and/or password are wrong.')
            signinPage.getInvalidCredentialsAlert().should('be.visible')
        })//cy.login comes from support/command.js file
    })

    it('verify with valid credentials',()=>{

        cy.fixture('signin').then((details)=>{
            cy.login(details.adminuser,details.adminpassword)
            cy.log(details.adminuser);
            cy.log(details.adminpassword);
            accountSummaryPage.getAccountSummaryheading().should('be.visible')
            cy.url().should('include','account')
        })
    })
    
    it('Verify the Forgot Password Link',()=>{

        //Click on Forget Password Link & Assert
        signinPage.getForgetPassword().should('be.visible').click()

        //Click on Email & Assert
        signinPage.getForgetPasswordEmail().should('be.visible')
        .should('be.enabled').type(randomEmailId)

        //Click on Send Password Button & Assert
        signinPage.getFPSendPassword().should('be.visible').click()

        //Alert Assert
        signinPage.getFPEmailSend().should('be.visible')
    })

})



