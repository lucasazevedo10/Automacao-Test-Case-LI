/// <reference types="cypress" />

import EscolherProduto from "../pages/RealizandoComprasMp/EscolherProduto";
import RealizarPagamentoMp from "../pages/RealizandoComprasMp/RealizarPagamentoMp";

/* global Then, When, Given */


And('seleciono produto para comprar adicionando cupom de desconto', () => {
    EscolherProduto.escolhendoProduto();
    EscolherProduto.cep();
    EscolherProduto.adiocionandoCupom();
    EscolherProduto.clicarFinalizarCompra();

})

Then ('realizo o pagamento via mercado pago finalizando a compra com sucesso', () => {
    RealizarPagamentoMp.enderecoEntrega();
    RealizarPagamentoMp.validandoCampos();
})