import homePage from '../pageObjects/homePage'
import signinPage from '../pageObjects/signinPage'
import onlineBankingPage from '../pageObjects/onlineBankingPage'
import accountSummaryPage from '../pageObjects/accountSummaryPage'
import transferFundsPage from '../pageObjects/transferFundsPage'
import feedbackPage from '../pageObjects/feedbackPage'
import common from '../pageObjects/common'
import payBillsPage from '../pageObjects/payBillsPage'

describe('check the different links available at the page',()=>{

    const UniqueNumber = `${Math.floor(Math.random() * 100)}`
    const randomtext = `${Math.floor(Math.random() * 100) + 'Cypress'}`

    before('signin with valid credentials',()=>{

        homePage.loadhomepage()
        homePage.signinButton().click()
        cy.fixture('signin').then((tfdetails)=>{
            cy.login(tfdetails.adminuser,tfdetails.adminpassword)
        })

    })

        it('Move to Transfer Funds Page & test all the elements of the Page',()=>{

            //Click at the Transfer Funds and Assert
            common.getTransferFunds().click()
            transferFundsPage.getTFPageheading().should('be.visible')

            //Click & Select at From Account
            transferFundsPage.getFromAccount().select('3')
            
            //Click at the To Account & Select from the Drop Down
            transferFundsPage.getToAccount().select('Loan(Avail. balance = $ 780)').should('have.value','4')
            
            //Click at Amount & Pass the Random Amount
            transferFundsPage.getAmount().should('be.visible')
            .should('be.enabled').type(UniqueNumber)

            //Click at Description & Pass the Random Text
            transferFundsPage.getDescription().should('be.visible')
            .should('be.enabled').type(randomtext)
            
            //Click at Continue Button
            transferFundsPage.getContinueButton().should('be.visible').click()
            
            //Assert the Verification Message
            transferFundsPage.getVerificationMessage().should('have.text','Transfer Money & Make Payments - Verify')
            
            //Click at Submit Button
            transferFundsPage.getSubmitButton().should('be.visible').click()

            //Assert the Confirmation Message
            transferFundsPage.getConfirmationMessage().should('have.text','Transfer Money & Make Payments - Confirm')
            
        })

})



