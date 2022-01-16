Feature: Cadastro de Usuario

    Eu como consumidor desejo realizar cadastro no site para que eu possa realizar minhas compras

    @focus
    Scenario: Cadastrar usuario valido
    Given Estou navegando na loja
    When Clico para realizar o cadastro
     And Informo meu email para cadastro
     And Preencho todos os dados do cadastro
    Then O sistema realiza o meu cadastro com sucesso