const el = require('./elements').ELEMENTS

class EscolherProduto {
    escolhendoProduto(){
        cy.get(el.clicarPrimeiroProduto).click();
        cy.get(el.btncomprar).should(el.validacaopaginacomprar,'Comprar');
        cy.get(el.btncomprar).click();
        cy.get(el.paginacarrinho).should(el.validacaopaginacarrinho,'Carrinho');
    }
    cep(){
        cy.get(el.calcularfrete).clear().type('83709150')
            .should(el.validacaocalcularfrete,'83709150');
    }
    adiocionandoCupom(){
        cy.get('body').then((body) => {
            if (body.find(el.btnapagarcupom).length > 0) {
                cy.get(el.btnapagarcupom).click();
    }
        });
        cy.get(el.campocupom).scrollIntoView().type('FRETEGRATIS');
        cy.get(el.btnusarcupom)
            .should(el.validacaobtnusarcupom,'Usar cupom')
                .click();
        cy.get(el.checksegundaopcao).eq('1').check();
        cy.get(el.valortotal, { timeout: 10000 })
            .should(el.validacaovalortotal,'R$140,00');
    }
    clicarFinalizarCompra(){
        cy.get(el.btnfinalizarcompra).click();
    }
}
export default new EscolherProduto();