import homePage from "../pageObjects/homePage";
import signinPage from "../pageObjects/signinPage";
import onlineBankingPage from "../pageObjects/onlineBankingPage";
//import transferFundsPage from '../pageObjects/transferFundsPage'
import feedbackPage from "../pageObjects/feedbackPage";

describe("Check the link of the Home Page", () => {
  beforeEach("load Home Page", () => {
    homePage.loadhomepage();
    //homePage.getHomePageheading().should('be.visible')
  });

  it("verify the Home Page", () => {
    homePage.getHomePageheading().should("be.visible");
  });

  it("verify the Online Banking Page", () => {
    homePage.getOnlineBankingPage().click();
    onlineBankingPage
      .getOBheading()
      .should("be.visible")
      .contains("Online Banking")
      .and("have.text", "Online Banking");
  });

  it("verify the Feedback Page", () => {
    homePage.getFeedbackPage().click();
    feedbackPage
      .getFBheading()
      .should("be.visible")
      .contains("Feedback")
      .and("have.text", "Feedback");
  });

  it("verify the Signin Button", () => {
    homePage.signinButton().click();
    signinPage.getSignInheading().should("be.visible");
  });

  it.only("Verify the Search Button", () => {
    homePage
      .getSearch()
      .should("be.visible")
      .should("be.enabled")
      .clear()
      .type("zero{enter}");
    cy.contains("Zero - FAQ - Frequently Asked Questions").should(
      "have.text",
      "Zero - FAQ - Frequently Asked Questions"
    );
    cy.get('div[class="top_offset"]>ul>li>a').each(($el, index, $list) => {
        
        cy.log(index);
      if ($el.index[2] == "Zero - FAQ - Frequently Asked Questions")
        cy.wrap($el).click()
    })
  })
})
