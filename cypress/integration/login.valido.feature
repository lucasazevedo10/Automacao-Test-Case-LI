Feature: Logar na conta

    Eu como cliente ja possuo cadastro desejo fazer login para efetuar compras
    
    Scenario: Login com usuario valido
    Given Estou navegando na loja
    When preencho os dados de login com usuario valido
     And clico para realizar login
    Then o sistema realiza o meu login com sucesso