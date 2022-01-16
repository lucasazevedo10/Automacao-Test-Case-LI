

const el = require('./elements').ELEMENTS


class PreencherCadastro {
    preenchendoCadastro(){
        cy.get(el.idconfirmacaoemail).type('marcos1023@gmail.com')
            .should(el.validacaoemail,'marcos1023@gmail.com');
        cy.get(el.senha).type('marcos1021');
        cy.get(el.confirmacaosenha).type('marcos1023');
        cy.get(el.checkpf).click();
        cy.get(el.nome).type('Marcos Almeida Gonçalves')
            .should(el.validacaonome,'Marcos Almeida Gonçalves');
        cy.get(el.cpf).type('791.692.750-09')
            .should(el.validacaocpf,'791.692.750-09');
        cy.get(el.celular).type('41974236885')
            .should(el.validacaocelular,'41974236885');
        cy.get(el.telefone).type('4133589625')
            .should(el.validacaotelefone,'4133589625');
        cy.get(el.sexo).select('Masculino')
        .should(el.validacaosexo,'Masculino');
        cy.get(el.datadenascimento).type('10101994')
            .should(el.validacaodatadenascimento,'10101994');
        cy.get(el.cep).type('83709150')
            .should(el.validacaocep,'83709150');
        cy.get(el.endereco).type('Rua Carlos Vicente Zapxon')
            .should(el.validacaoendereco,'Rua Carlos Vicente Zapxon');
        cy.get(el.numeroresidencial).type('1300')
            .should(el.validacaonumeroresidencial,'1300');
        cy.get(el.complemento).type('Casa 244')
            .should(el.validacaocomplemento,'Casa 244');
        cy.get(el.referencia).type('Próximo ao mercado bordum')
            .should(el.validacaoreferencia,'Próximo ao mercado bordum');
        cy.get(el.bairro).should(el.validacaobairro,'Costeira');
        cy.get(el.cidade).should(el.validacaocidade,'Araucaria');
        cy.get(el.estado).select('Paraná')
            .should(el.validacaoestado,'Paraná');
    }
}
export default new PreencherCadastro();