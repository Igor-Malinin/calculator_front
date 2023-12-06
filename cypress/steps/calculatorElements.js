import {When, Then} from "cypress-cucumber-preprocessor/steps"

When("I visiting the Calculator page {string}", (url) => {
  cy.visit(url)
})
Then("I see inputs, buttons, and dropdowns", () => {
  // cy.mount(<the-input/>)
  // cy.contains('input', '')
  cy.get("input").should("exist")
  cy.get("#get-result").should("exist")
  cy.get("select").should("exist")
})