Feature: Finalizar compras

    Eu como cliente ja possuo cadastro desejo efetuar compras com sucesso independente da forma de pagamento utitlizando cupons de desconto

    
    Scenario: efetuar compras com cartão de crédito
    Given Estou navegando na loja logado
    When estou na pagina de produtos
     And seleciono produtos para comprar adicionando cupons de desconto
    Then realizo o pagamento com cartão de crédito finalizando a compra com sucesso
 
    Scenario: efetuar compras com mercado pago
    Given Estou navegando na loja logado
    When estou na pagina de produtos
     And seleciono produto para comprar adicionando cupom de desconto
    Then realizo o pagamento via mercado pago finalizando a compra com sucesso

    Scenario: efetuar compras via boleto
    Given Estou navegando na loja logado
    When estou na pagina de produtos
     And seleciono produto para comprar adicionando novo cupom de desconto
    Then realizo o pagamento via boleto finalizando a compra com sucesso


