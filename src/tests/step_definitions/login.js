const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const { TIMEOUT } = require('../utils/syntaxSugar');

const { setDefaultTimeout } = require('cucumber');
const loginPage = client.page.login_page();
const moderadorPage = client.page.moderador_page();

setDefaultTimeout(20 * 1000);

Given('que O usuário moderador acessa a página de login', () => {
  return loginPage
     .navigate()
     .assert.title('Enegrecer');
});

When('O usuário preenche os campos para de email e senha e clica em entrar', () => {
  const login = 'moderador@enegrecer.com';
  const password = '$VerdadeSejaDita!';

  return loginPage
    .preencherCampoLoginModerador(login)  
    .preencherCampoSenhaModerador(password)
    .loginClick()
});

Then('O usuário é redirecionado para página painel', () => {
  moderadorPage.waitForElementVisible('@painelModerador', TIMEOUT);
  return loginPage.assert.urlContains('/moderador/painel');  
});
