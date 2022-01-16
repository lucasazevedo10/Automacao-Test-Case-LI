const el = require('./elements').ELEMENTS

class PreencherEmail {
    preenchendoEmail(){
        cy.get(el.id).type('marcos2358@gmail.com')
        .should(el.email, 'marcos2358@gmail.com');
    
    }
    clicandoCadastrar(){
        cy.contains(el.btncadastrar).click()
            .should(el.validação,'botao principal');
    }
   }   
export default new PreencherEmail();