describe('Geld over maken naar rekening', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
        cy.get(".login__account").first().click();
    });
    it('Normale overboeking', () => {
        cy.visit('http://localhost:3000/transfer');
        cy.get('.amount-input').type(100);
        // cy.get('Adresboek').select("Sophie de Blaak");
        cy.get('select[name="toaccount"]').select('2'); // Selecteert "Sara Ravestein"
        cy.get("textarea").type("Dit is een overboeking");
        cy.get('button[type="submit"]').click();
        cy.get('.alert').should("be.visible");
    })
    it('overboeking zonder geld', () => {
        cy.visit('http://localhost:3000/transfer');
        cy.get("textarea").type("Dit is een overboeking zonder geld");
        cy.get('.amount-input').type(100000000);
        cy.get('select[name="toaccount"]').select('2'); // Selecteert "Sara Ravestein"
        cy.get('button[type="submit"]').click();
      //  cy.get('.alert').should("be.visible");
    })
    it('overboeking met ander valuta', () => {
        cy.visit('http://localhost:3000/transfer');
        cy.get('select[name="toaccount"]').select('2'); // Selecteert "Sara Ravestein"
        cy.get('select[name="currency"]').select('USD');
        cy.get('.amount-input').type(100);
        cy.get("textarea").type("Dit is een overboeking met een andere valuta");
    cy.get('button[type="submit"]').click();
        cy.get('.alert').should("be.visible");
    })
})