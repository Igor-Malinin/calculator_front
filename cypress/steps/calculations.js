import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given("I visiting the Calculator page {string}", (url) => {
  cy.visit(url)
})

When ("I using operation {string} on {string} and {string} in {string} system", (operation, fn, sn, system) => {
  cy.get('#system-select').select(system)
  cy.get('#first-num').type(fn)
  cy.get('#second-num').type(sn)
  cy.get('#operation-select').select(operation)
  cy.get('#get-result').click()
})
Then ("I get result {string}", (result) => {
  cy.get('.calculator__result').contains(result)
  cy.get('#clear').click()
})

And ("I using operation {string} on {string} and {string} in {string} system", (operation, fn, sn, system) => {
  cy.get('#system-select').select(system)
  cy.get('#first-num').type(fn)
  cy.get('#second-num').type(sn)
  cy.get('#operation-select').select(operation)
  cy.get('#get-result').click()
})
And ("I get result {string}", (result) => {
  cy.get('.calculator__result').contains(result)
  cy.get('#clear').click()
})

And ("I using operation {string} on {string} on {string} in {string} system", (operation, fn, sn, system) => {
  cy.get('#system-select').select(system)
  cy.get('#first-num').type(fn)
  cy.get('#second-num').type(sn)
  cy.get('#operation-select').select(operation)
  cy.get('#get-result').click()
})
And ("I get result {string}", (result) => {
  cy.get('.calculator__result').contains(result.toLowerCase())
  cy.get('#clear').click()
})

And ("I using operation {string} on {string} from {string} in {string} system", (operation, fn, sn, system) => {
  cy.get('#system-select').select(system)
  cy.get('#first-num').type(fn)
  cy.get('#second-num').type(sn)
  cy.get('#operation-select').select(operation)
  cy.get('#get-result').click()
})
And ("I get result {string}", (result) => {
  cy.get('.calculator__result').contains(result)
})