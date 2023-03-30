describe('Edit User Profile', () => {
    it('Edit User Checked', () => {

        // First Sign 
        cy.visit("http://localhost:3000/SignUp");
        cy.get('#firstName').type("Hello@123");
        cy.get('#lastName').type("Hello@123");
        cy.get("#email").type("abcd@gmail.com");
        cy.get('#mobile').type("1236547890");
        cy.get('#password').type("Hello@123");
        cy.get('#conformPassword').type("Hello@123");
        cy.contains("REGISTER").should("be.enabled").click();

        // Login With the Register Account
        cy.visit("http://localhost:3000/");
        cy.get("#email").type("abcd@gmail.com");
        cy.get('#password').type("Hello@123");
        cy.get('#login-submit').submit();

        // Click on the Edit User Profile Button
        cy.get('#edit-user-profile').click();

        //First Clear the Input Filed and update the first name same as below code
        cy.get('#firstName').focus().clear();
        cy.get('#firstName').type('Hello');

        cy.get('#lastName').focus().clear();
        cy.get('#lastName').type('Hello');

        cy.get('#email').focus().clear();
        cy.get('#email').type('hello@gmail.com');

        cy.get('#mobile').focus().clear();
        cy.get('#mobile').type('09876456321');

        // Submit the Updated Value
        cy.contains('SUBMIT').should("be.enabled").click()

    })
})