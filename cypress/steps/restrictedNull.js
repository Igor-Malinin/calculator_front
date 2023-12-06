import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("I visiting the Calculator page {string}", (url) => {
  cy.visit(url)
})

When ("I choosing operation {string} and typing {string} in second input", (operation, number) => {
  cy.get("#operation-select").select(operation)
  cy.get("#second-num").type(number)
})
Then ("I see empty value in second input", () => {
  cy.get("#second-num").should("have.value", '')
})