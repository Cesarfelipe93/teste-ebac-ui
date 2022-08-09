/// <reference types="cypress" />

describe('Funcionalidade de páginas de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/?product_cat=men&s=&post_type=product')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Vulcan Weightlifting Tank')
            .click()


    });

    it.only('Deve selecionar um produto no carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Vulcan Weightlifting Tank').click()
            cy.get('.button-variable-item-M').click()
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade +  ' × “Vulcan Weightlifting Tank” foram adicionados no seu carrinho')
    });

});