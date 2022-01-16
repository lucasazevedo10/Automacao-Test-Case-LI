Feature: Cadastro de Usuario

    Usuário como consumidor deseja realizar cadastro no site para que possa realizar compras

    Scenario: Cadastrar usuario valido
    Given o cliente esta navegando na loja
    When Clica para realizar o cadastro
     And Informa o email para cadastro
     And Preenche todos os dados do cadastro
    Then O sistema realiza o cadastro com sucesso