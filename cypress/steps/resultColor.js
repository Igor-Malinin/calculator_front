import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("I visiting the Calculator page {string}", (url) => {
  cy.visit(url)
})

When ("I choosing system {string} and typing numbers {string} and {string} and choosing operation {string} and clicking getResult", (system, fn, sn, operation) => {
  cy.get('#system-select').select(system)
  cy.get('#first-num').type(fn)
  cy.get('#second-num').type(sn)
  cy.get('#operation-select').select(operation)
  cy.get('#get-result').click()
})
Then ("I should see the result {string} in {string} color", (result, color) => {
  cy.get('.calculator__result').contains(result)
  cy.get('.calculator__result').should("have.css", 'color', color)
  cy.get('#clear').click()
})

And ("I typing numbers {string} and {string} and choosing operation {string} and clicking getResult", (fn, sn, operation) => {
  cy.get('#first-num').type(fn)
  cy.get('#second-num').type(sn)
  cy.get('#operation-select').select(operation)
  cy.get('#get-result').click()
})
And ("I should see the result {string} in {string} color", (result, color) => {
  cy.get('.calculator__result').contains(result)
  cy.get('.calculator__result').should("have.css", 'color', color)
  cy.get('#clear').click()
})

And ("I typing numbers {string} and {string} and and clicking getResult", (fn, sn) => {
  cy.get('#first-num').type(fn)
  cy.get('#second-num').type(sn)
  cy.get('#get-result').click()
})
And ("I should see the result {string} in {string} color", (result, color) => {
  cy.get('.calculator__result').contains(result)
  cy.get('.calculator__result').should("have.css", 'color', color)
})