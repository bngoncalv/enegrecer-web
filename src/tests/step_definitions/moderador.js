const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const { TIMEOUT } = require('../utils/syntaxSugar');

const { setDefaultTimeout } = require('cucumber');
const loginPage = client.page.login_page();
const moderadorPage = client.page.moderador_page();

setDefaultTimeout(20 * 1000);

Given('que O usuário moderador está na página painel moderador', () => {
  return loginPage.assert.urlContains('/moderador/painel');  
});

When('O usuário clica no botão expandir retrair', () => {
  return moderadorPage
    .expandirRetrairClick()
});

Then('O usuário visualiza os detalhes da denuncia', () => {
  return moderadorPage
    .waitForElementVisible('@descricaoDenunciaRow', TIMEOUT);
});

When('O usuário clica no botão de sair', () =>  {
  return moderadorPage
    .logoutClick()
});

Then('O usuário é redirecionado para página de login', () => {
  loginPage.waitForElementVisible('@loginForm', TIMEOUT);
  return loginPage.assert.urlContains('/login');  
});
