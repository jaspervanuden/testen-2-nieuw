describe('in en uit loggen', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });
    it('in en uitloggen', () => {
        cy.visit('http://localhost:3000/login');
        cy.get(".login__account").first().click();
        cy.get(".app__logout").click();
    })
})