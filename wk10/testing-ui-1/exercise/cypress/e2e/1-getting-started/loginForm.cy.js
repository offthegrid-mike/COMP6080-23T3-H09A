/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should logs the user in when fill in the correct details', () => {
    cy.get("#email").focus().type("soorria@email.com")
    cy.get("#password").focus().type("super secure password{enter}")

    cy.get("h1").then(component => {
      expect(component.text()).to.contains("You\'re logged in!")
    })
  })

  it('should logs the user in when fill in the correct details with should have', () => {
    cy.get("#email").focus().type("soorria@email.com")
    cy.get("#password").focus().type("super secure password{enter}")

    cy.get("h1").should("have.text", "You\'re logged in!")
  })

  it('should return error when the email is invalid', () => {
    cy.get("#email").focus().type("wrong@email.com")
    cy.get("#password").focus().type("super secure password{enter}")

    cy.get("#login-email-error").should("have.text", "User does not exist")
  })
})
