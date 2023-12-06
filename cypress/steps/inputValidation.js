import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given("I visiting the Calculator page {string}", (url) => {
  cy.visit(url)
})

When("I choosing system {string} and typing {string} in first input", (system, number) => {
  cy.get("#system-select").select(system)
  cy.get("#first-num").type(number)
})

Then("In input I see only {string}", (number) => {
  cy.get("#first-num").should("have.value", number)
})

And ("I choosing system {string} and typing {string} in second input", (system, number) => {
  cy.get("#system-select").select(system)
  cy.get("#second-num").type(number)
})

And ("I should see only {string} in first input and {string} in second input", (fn, sn) => {
  cy.get("#first-num").should("have.value", fn)
  cy.get("#second-num").should("have.value", sn)
  cy.get('#clear').click()
})

And ("I choosing system {string} and typing {string} in first input", (system, number) => {
  cy.get("#system-select").select(system)
  cy.get("#first-num").type(number)
})
And ("I should see only {string} in first input", (number) => {
  cy.get("#first-num").should("have.value", number)
})