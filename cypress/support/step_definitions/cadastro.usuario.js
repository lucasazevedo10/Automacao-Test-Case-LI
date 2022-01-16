/// <reference types="cypress" />

import AcessoPagina from "../pages/AcessoPagina";
import AcessoCadastro from "../pages/Cadastro/AcessoCadastro";
import PreencherEmail from "../pages/Cadastro/PreencherEmail";
import PreencherCadastro from "../pages/Cadastro/PreencherCadastro";
import CadastradoSucesso from "../pages/Cadastro/CadastradoSucesso";

/* global Then, When, Given */

Given('Estou navegando na loja', () => {
    AcessoPagina.acessarPagina();
    AcessoPagina.validarPagina();
})

When('Clico para realizar o cadastro', () => {
    AcessoCadastro.acessarPaginaCadastro();
})

And('Informo meu email para cadastro', () => {
    PreencherEmail.preenchendoEmail();
    PreencherEmail.clicandoCadastrar();    
})

And('Preencho todos os dados do cadastro', () => {
    PreencherCadastro.preenchendoCadastro();
})

Then('O sistema realiza o meu cadastro com sucesso', () => {
    CadastradoSucesso.clicarCriarConta();
    CadastradoSucesso.usuarioCadastrado();

})