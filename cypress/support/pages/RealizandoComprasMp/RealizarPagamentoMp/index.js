const el = require('./elements').ELEMENTS

class RealizarPagamentoMp {
    enderecoEntrega(){
        cy.get(el.checkendereco).first().click();
        cy.get(el.checkendereco).should('be.checked');
    }

    validandoCampos(){
        cy.get(el.checkfretegratis).should(el.validacaocheckfretegratis);
        cy.get(el.precofrete).should(el.validacaoprecofrete,'R$0,00');
        cy.get(el.valortotal).should(el.validacaovalortotal,'R$140');
        cy.get(el.selecaomercadopago, {timeout:2000}).click();
        cy.wait(2000);
        cy.get(el.selecaomercadopago)
            .should(el.validacaoselecaomercadopago);
        cy.get(el.btnfinalizarcompra)
            .should(el.validacaobtnfinalizarcompra,'Finalizar Compra')
                .click();
        
    }
    

}
export default new RealizarPagamentoMp();