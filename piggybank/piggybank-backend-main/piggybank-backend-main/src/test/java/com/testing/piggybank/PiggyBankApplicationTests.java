package com.testing.piggybank;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PiggyBankApplicationTests {

	@Test
	describe('Geld over maken naar rekening', () => {
		beforeEach(()=>{
				cy.visit('http://localhost:3000/')
				cy.get(".login__account").first().click();
});

		it('Normale overboeking', () => {
				cy.visit('http://localhost:3000/transfer');
		cy.get("textarea").type("Dit is een overboeking");
		cy.get('.to-account').select("Sara Ravestein");
		cy.get('.amount-input').type(100);
		cy.get("[data-test-id='overboeken-button']").click();
		cy.get('.alert').should("be.visible");
  })
	})

}
