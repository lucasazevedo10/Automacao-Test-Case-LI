Feature: Finalizar compras

    Usuário como cliente ja possui cadastro desejo efetuar compras com sucesso independente da forma de pagamento utitlizando cupons de desconto

    Scenario: efetuar compras com cartão de crédito
    Given o cliente esta navegando na loja logado
    When esta na pagina de produtos
     And seleciona produtos para comprar adicionando cupons de desconto
    Then realiza o pagamento com cartão de crédito finalizando a compra com sucesso
    
    Scenario: efetuar compras com mercado pago
    Given o cliente esta navegando na loja logado
    When esta na pagina de produtos
     And seleciona produto para comprar adicionando cupom de desconto
    Then realiza o pagamento via mercado pago finalizando a compra com sucesso
    
    Scenario: efetuar compras via boleto
    Given o cliente esta navegando na loja logado
    When esta na pagina de produtos
     And seleciona produto para comprar adicionando novo cupom de desconto
    Then realiza o pagamento via boleto finalizando a compra com sucesso


