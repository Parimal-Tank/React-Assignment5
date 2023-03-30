describe('Product Page Test', () => {
    it('Product', () => {
        cy.visit("http://localhost:3000/SignUp");
        cy.get('#firstName').type("Hello@123");
        cy.get('#lastName').type("Hello@123");
        cy.get("#email").type("abcd@gmail.com");
        cy.get('#mobile').type("1236547890");
        cy.get('#password').type("Hello@123");
        cy.get('#conformPassword').type("Hello@123");
        cy.contains("REGISTER").should("be.enabled").click();

        cy.visit("http://localhost:3000/");
        cy.get("#email").type("abcd@gmail.com");
        cy.get('#password').type("Hello@123");
        cy.get('#login-submit').submit()

        cy.get('#show-product').click()
    })
  })