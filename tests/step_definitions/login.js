const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const { TIMEOUT } = require('../utils/syntaxSugar');

const loginPage = client.page.login_page();
const moderadorPage = client.page.moderador_page();

Given('que o usuário moderador acessa a página de login', () => {
  return loginPage
    .navigate()
    .assert.title('Enegrecer');
});

When('o usuário faz login no sistema', () => {
  const login = 'moderador@enegrecer.com';
  const password = '$VerdadeSejaDita!';

  return loginPage
    .preencherCampoLoginModerador(login)
    .preencherCampoSenhaModerador(password)
    .loginClick();
});

Then('o usuário é redirecionado para página painel', () => {
  moderadorPage.waitForElementVisible('@painelModerador', TIMEOUT);
  return loginPage.assert.urlContains('/moderador/painel');
});
