describe('Change Password Test' , () => {
     it('Password Change' , () => { 
          // First Sign 
        cy.visit("http://localhost:3000/SignUp");
        cy.get('#firstName').type("Hello@123");
        cy.get('#lastName').type("Hello@123");
        cy.get("#email").type("abcd@gmail.com");
        cy.contains("REGISTER").should("be.enabled")
        cy.get('#mobile').type("1236547890");
        cy.contains("REGISTER").should("be.enabled")
        cy.get('#password').type("Hello@123");
        cy.contains("REGISTER").should("be.enabled")
        cy.get('#conformPassword').type("Hello@123");
        cy.contains("REGISTER").should("be.enabled").click();

        // Login With the Register Account
        cy.visit("http://localhost:3000/");
        cy.get("#email").type("abcd@gmail.com");
        cy.get('#password').type("Hello@123");
        cy.get('#login-submit').submit();

        // Click on the Edit User Profile Button
        cy.get('#edit-user-profile').click();

        //Click on the Change Password Button
          cy.get('#change-password').click();
    
       // Fill the Current and Updated Password
       cy.get('#currentPassword').type('Hello@123');
       cy.get('#password').type('Hello@1234');
       cy.get('#confirmPassword').type('Hello@1234');

       // Click On Submit Button
       cy.contains('SUBMIT').should("be.enabled").click();

     })
})