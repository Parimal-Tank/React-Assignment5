describe('Signup Test', () => {
    it('Signup', () => {
       cy.visit("http://localhost:3000/SignUp");
       cy.get('#firstName').type("Hello@123");
       cy.get('#lastName').type("Hello@123");
       cy.get("#email").type("abcd@gmail.com");
       cy.get('#mobile').type("1236547890");
       cy.get('#password').type("Hello@123");
       cy.get('#conformPassword').type("Hello@123");
      //  cy.get('#signup-submit').submit()
       cy.contains("REGISTER").should("be.enabled").click();
    })
  })