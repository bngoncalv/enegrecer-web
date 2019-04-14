const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const { TIMEOUT } = require('../utils/syntaxSugar');

const loginPage = client.page.login_page();
const moderadorPage = client.page.moderador_page();

Given('que o usuário moderador está na página painel moderador', () => {
  return loginPage.assert.urlContains('/moderador/painel');
});

When('o usuário clica no botão expandir retrair', () => {
  return moderadorPage
    .expandirRetrairClick();
});

Then('o usuário visualiza os detalhes da denuncia', () => {
  return moderadorPage
    .waitForElementVisible('@descricaoDenunciaRow', TIMEOUT);
});

When('o usuário clica no botão de sair', () => {
  return moderadorPage
    .logoutClick();
});

Then('o usuário é redirecionado para página de login', () => {
  loginPage.waitForElementVisible('@loginForm', TIMEOUT);
  return loginPage.assert.urlContains('/login');
});
