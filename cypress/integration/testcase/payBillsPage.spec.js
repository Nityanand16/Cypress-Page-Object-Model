import homePage from '../pageObjects/homePage'
import signinPage from '../pageObjects/signinPage'
import onlineBankingPage from '../pageObjects/onlineBankingPage'
import accountSummaryPage from '../pageObjects/accountSummaryPage'
import transferFundsPage from '../pageObjects/transferFundsPage'
import feedbackPage from '../pageObjects/feedbackPage'
import common from '../pageObjects/common'
import payBillsPage from '../pageObjects/payBillsPage'

describe('check the different links available at the PayBills page',()=>{

    const UniqueNumber = `${Math.floor(Math.random() * 100)}`
    const randomtext = `${Math.floor(Math.random() * 100) + 'Cypress'}`
    const randomName = `${Math.floor(Math.random() * 100) + 'Nitya'}`
    const randomAddress = `${Math.floor(Math.random() * 100) + 'Nitya, 2860, Gladsaxe, Denmark'}`

    beforeEach('signin with valid credentials',()=>{

        homePage.loadhomepage()
        homePage.signinButton().click()
        cy.fixture('signin').then((details)=>{
            cy.login(details.adminuser,details.adminpassword)
        })
        //Click PayBills Page and Assert
        common.getPayBills().click()
        payBillsPage.getAssertPayBillsPage().should('have.text','Make payments to your saved payees')

        // cy.fixture('commondata').then((random) {
        //     let number = random.UniqueNumber
        //     let text = random.randomtext
        // })

    })

    it('Move to PayBills Page, Pay Saved Payee and check all the links',()=>{

        //In Pay Saved Payee, click at Payee and select the option
        payBillsPage.getPayee().select('Bank of America').should('have.value','bofa')

        //Click at Account and Select the Option
        payBillsPage.getAccount().select('Checking').should('have.value','2')

        //Click at Amount and Pass the Random number
        payBillsPage.getamount().should('be.visible')
        .should('be.enabled').type(UniqueNumber)

        //Select the Date in Calender
        payBillsPage.getDate().click().select
        payBillsPage.getCalender()
            .each(($el,index,$list)=>{
                let datename = $el.text()
                if(datename == '14'){
                    cy.wrap($el).click()
                }
            })

        //Select the Description and Pass the Random message
        payBillsPage.getDescription().should('be.visible')
        .should('be.enabled').type(randomtext)

        //Click at Pay Button
        payBillsPage.getPayButton().should('be.visible').click()

        //Assert the Alert Message after Pay click
        payBillsPage.getAlertMessge().should('have.text','The payment was successfully submitted.')
    })

    it('Move to Add New Payee and test all the links',()=>{

        //Click at Pay Bills Page and Assert
        payBillsPage.getAddNewPayee().click()
        payBillsPage.getaddNewPayeePageheading().should('have.text','Who are you paying?')

        //Click at Payee Name and pass the Random name
        payBillsPage.getPayeeName().should('be.visible')
        .should('be.enabled').type(randomName)

        //Click at Payee Address and Pass the Random Address
        payBillsPage.getPayeeAddress().should('be.visible')
        .should('be.enabled').type(randomAddress)

        //Click at Payee Account and Pass the Account
        payBillsPage.getANPAccount().should('be.visible')
        .should('be.enabled').type(UniqueNumber)

        //Click at the Payee Details and Pass the Payee Details
        payBillsPage.getPayeeDetails().should('be.visible')
        .should('be.enabled').type(randomName)

        //Click at the Add Button and Add the Payee
        payBillsPage.getAddButton().click()

        //Confirm the Alert of Payee Created
        payBillsPage.getAlertConfirmation().contains('was successfully created.')
        .should('be.visible')

    })

    it('Move to Purchase Foreign Currency Page and test all the links',()=>{

        //Click at Purchase Foreign Currency Page and Assert
        payBillsPage.getPurchaseForeignCurrency().click()
        payBillsPage.getPurchaseForeignCurrencyheading().should('have.text','Purchase foreign currency cash')

        //Click at Currency and Select from Drop Down
        payBillsPage.getCurrency().select('Denmark (krone)').should('have.value','DKK')

        //Click at Amount and Pass the Random Amount
        payBillsPage.getPFCAmount().should('be.visible')
        .should('be.enabled').type(UniqueNumber)

        //Check the USD Radio Button, it should be visible and not checked
        payBillsPage.getUSDRadiobutton().should('be.visible')
        .should('not.be.checked').click()

        //Check the Selected Currency Button, it shoud be visible and not checked
        payBillsPage.getSelectedCurrency().should('be.visible')
        .should('not.be.checked').click()

        //Click the Calculated Costs Button
        payBillsPage.getCalculateCostButton().should('be.visible').click()

        //Check the Conversion Amount Message
        payBillsPage.getConversionAmountMessage().contains('U.S. dollar (USD)')
        .should('be.visible')

        //Click at Purchase Button
        payBillsPage.getPurchaseButton().should('be.visible').click()

        //Assert Purchase Foreign Currency Alert
        payBillsPage.getPFCAlert().should('have.text','Foreign currency cash was successfully purchased.')
        

        
    })

})



