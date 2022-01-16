Feature: Logar na conta

    Usuário como cliente possui cadastro deseja fazer login para efetuar compras
    
    Scenario: Login com usuario valido
    Given o cliente esta navegando na loja
    When preenche os dados de login com usuario valido
     And clica para realizar login
    Then o sistema realiza o login com sucesso