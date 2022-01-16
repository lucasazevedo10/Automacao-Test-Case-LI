/// <reference types="cypress" />

import AcessoPagina from "../pages/AcessoPagina";
import AcessoCadastro from "../pages/Cadastro/AcessoCadastro";
import LoginValido from "../pages/Login/LoginValido";
import ClicarParaLogin from "../pages/Login/ClicarParaLogin";
import LogadoSucesso from "../pages/Login/LogadoSucesso";
import PaginaProdutos from "../pages/RealizandoCompras/PaginaProdutos";
import SelecaoProdutos from "../pages/RealizandoCompras/SelecaoProdutos";
import RealizarPagamento from "../pages/RealizandoCompras/RealizarPagamento";

/* global Then, When, Given */

Given('Estou navegando na loja logado', () => {
    AcessoPagina.acessarPagina();
    AcessoPagina.validarPagina();
    AcessoCadastro.acessarPaginaCadastro();
    LoginValido.preenchendoEmailLogin();
    LoginValido.preenchendoSenhaLogin();
    ClicarParaLogin.clicarProsseeguir();
    LogadoSucesso.sucessoLogin();
    
})

When('estou na pagina de produtos', () => {
    PaginaProdutos.clicarStore();
})

And('seleciono produtos para comprar adicionando cupons de desconto', () => {
    SelecaoProdutos.selecionarProdutos();
    SelecaoProdutos.selecionarOutroProduto();
    SelecaoProdutos.validacaoCep();
    SelecaoProdutos.removerProduto();
    SelecaoProdutos.adiocionarCupom();
    SelecaoProdutos.clicarFinalizarCompra();


})

Then('realizo o pagamento com cartão de crédito finalizando a compra com sucesso', () => {
    RealizarPagamento.validandoCampos();
    
})