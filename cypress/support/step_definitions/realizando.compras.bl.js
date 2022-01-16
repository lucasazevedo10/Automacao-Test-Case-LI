/// <reference types="cypress" />

import EscolherProduto from "../pages/RealizarComprasBoleto/EscolherProduto";
import RealizarPagamentoBl from "../pages/RealizarComprasBoleto/RealizarPagamentoBoleto";

/* global Then, When, Given */

And('seleciona produto para comprar adicionando novo cupom de desconto', () => {
    EscolherProduto.escolhendoProduto();
    EscolherProduto.cep();
    EscolherProduto.adiocionandoCupom();
    EscolherProduto.clicarFinalizarCompra();
})

Then ('realiza o pagamento via boleto finalizando a compra com sucesso', () => {
    RealizarPagamentoBl.enderecoEntrega();
    RealizarPagamentoBl.validacao();
    RealizarPagamentoBl.formaPagamento();
    RealizarPagamentoBl.finalizarCompra();
})