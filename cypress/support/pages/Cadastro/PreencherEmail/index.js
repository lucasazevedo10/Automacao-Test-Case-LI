const el = require('./elements').ELEMENTS

class PreencherEmail {
    preenchendoEmail(){
        cy.get(el.id).type('marcos1023@gmail.com')
        .should(el.email, 'marcos1023s@gmail.com');
    
    }

    clicandoCadastrar(){
        cy.contains(el.btncadastrar).click()
            .should(el.validação,'botao principal');
    }

   }   

export default new PreencherEmail();