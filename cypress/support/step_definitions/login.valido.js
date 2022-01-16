/// <reference types="cypress" />

import AcessoCadastro from "../pages/Cadastro/AcessoCadastro";
import AcessoPagina from "../pages/AcessoPagina";
import LoginValido from "../pages/Login/LoginValido";
import ClicarParaLogin from "../pages/Login/ClicarParaLogin";
import LogadoSucesso from "../pages/Login/LogadoSucesso";

/* global Then, When, Given */

Given('Estou navegando na loja', () => {
    AcessoPagina.acessarPagina();
    AcessoPagina.validarPagina();
    
    
})
When('preencho os dados de login com usuario valido',() => {
    AcessoCadastro.acessarPaginaCadastro();
    LoginValido.preenchendoEmailLogin();
    LoginValido.preenchendoSenhaLogin();
})

And('clico para realizar login', () => {
    ClicarParaLogin.clicarProsseeguir();
})

Then ('o sistema realiza o meu login com sucesso', () => {
    LogadoSucesso.sucessoLogin();
})