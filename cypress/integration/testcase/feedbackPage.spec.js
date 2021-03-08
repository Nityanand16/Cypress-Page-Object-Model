import homePage from '../pageObjects/homePage'
import signinPage from '../pageObjects/signinPage'
import onlineBankingPage from '../pageObjects/onlineBankingPage'
import accountSummaryPage from '../pageObjects/accountSummaryPage'
import transferFundsPage from '../pageObjects/transferFundsPage'
import feedbackPage from '../pageObjects/feedbackPage'
import common from '../pageObjects/common'
import payBillsPage from '../pageObjects/payBillsPage'

describe('check the different links available at the page',function (){

    const UniqueNumber = `${Math.floor(Math.random() * 100)}`
    const randomtext = `${Math.floor(Math.random() * 100) + 'Cypress'}`
    const randomName = `${Math.floor(Math.random() * 100) + 'Nitya'}`
    const randomAddress = `${Math.floor(Math.random() * 100) + 'Nitya, 2860, Gladsaxe, Denmark'}`
    const randomEmailId = `${Math.floor(Math.random() * 100) + 'Nitya' + '@gmail.com'}`
    
    beforeEach('signin with valid credentials',function (){

        homePage.loadhomepage()
        homePage.signinButton().click()
        cy.fixture('signin').then((details)=>{
            cy.login(details.adminuser,details.adminpassword)
        })
        
        common.getHomePage()

    })
    

    it('Move to Feedback Page',()=>{

        //Click at Feedback Page & Assert
        homePage.getFeedbackPage().click()
        feedbackPage.getFBheading().should('be.visible')
        .contains('Feedback')
        .and('have.text','Feedback')
        
        //Click at Frequentlly Asked Question Link & Assert
        feedbackPage.getFAQLink().click()
        feedbackPage.getFAQHeading().should('be.visible')
        .should('have.text','Frequently Asked Questions')
        
        //Come Back to Feedback Page
        cy.go('back')

        //Click at Your Name & write the Random name & Assert
        feedbackPage.getYourName().should('be.visible')
        .should('be.enabled').type(randomName)

        //Click at Your Email Address & write the Random Emmail Address & Assert
        feedbackPage.getYourEmailAddress().should('be.visible')
        .should('be.enabled').type(randomEmailId)

        //Click at Subject & Pass the Random Text & Assert
        feedbackPage.getSubject().should('be.visible')
        .should('be.enabled').type(randomtext)

        //Click at Type Your Questions Here & Pass the Random Text & Assert
        feedbackPage.getAskYourQuestionsHere().should('be.visible')
        .should('be.enabled').type(randomtext)

        //Click at Send Message Button & Assert
        feedbackPage.getSendMessage().should('be.enabled').click()

        //Assert Customer Service Message
        feedbackPage.getCustomerServiceMessage().contains('Feedback')
        .should('be.visible').should('have.text','Feedback')

    })

})



