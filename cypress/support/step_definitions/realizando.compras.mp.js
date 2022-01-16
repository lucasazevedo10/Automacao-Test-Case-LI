/// <reference types="cypress" />

import EscolherProduto from "../pages/RealizandoComprasMp/EscolherProduto";
import RealizarPagamentoMp from "../pages/RealizandoComprasMp/RealizarPagamentoMp";

/* global Then, When, Given */

And('seleciona produto para comprar adicionando cupom de desconto', () => {
    EscolherProduto.escolhendoProduto();
    EscolherProduto.cep();
    EscolherProduto.adiocionandoCupom();
    EscolherProduto.clicarFinalizarCompra();
})

Then ('realiza o pagamento via mercado pago finalizando a compra com sucesso', () => {
    RealizarPagamentoMp.enderecoEntrega();
    RealizarPagamentoMp.validandoCampos();
})