const el = require('./elements').ELEMENTS

class LoginValido {
    preenchendoEmailLogin(){
        cy.get(el.emailLogin,{ timeout: 1000}).type('marcosgoncavels@gmail.com')
            .should(el.validacaoemailLogin,'marcosgoncavels@gmail.com');
        
    }

    preenchendoSenhaLogin(){
        cy.get(el.senhaLogin).type('marcos123')
            .should(el.validacaosenhaLogin,'marcos123');

    }

}
export default new LoginValido();