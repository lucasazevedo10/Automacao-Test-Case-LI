const el = require('./elements').ELEMENTS

class RealizarPagamentoBl {
    enderecoEntrega(){
        cy.get(el.checkendereco).first().click();
        cy.get(el.checkendereco).should('be.checked');
    }
    validacao(){
        cy.get(el.valordesconto).should(el.validacaovalordesconto, 'R$6,00');
        cy.get(el.valorfinal).should(el.validacaovalorfinal, 'R$54,00');
    }
    formaPagamento(){
        cy.wait(2000);
        cy.get(el.checkboleto).last().click();
        cy.get(el.checkboleto).should(el.validacaocheckboleto);
    }
    finalizarCompra(){
        cy.get(el.btnfinalizarcompra)
            .should(el.validacaobtnfinalizarcompra,'Finalizar Compra').click();
        cy.get(el.txtboletopronto).should(el.validacaotxtboletopronto,'BOLETO PRONTO');
    }
}
export default new RealizarPagamentoBl();