const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const faker = require('faker');

faker.locale = 'pt_BR';
const denunciaPage = client.page.denuncia_page();

Given('O usuário acessa a página de cadastrar denúncia', () => {
  return denunciaPage
    .navigate()
    .assert.title('Enegrecer');
});

When('O usuário preenche os campos para o cadastro da denúncia', () => {
  let dataNasDen = faker.date.between('1960-01-01', '2002-01-01');
  dataNasDen = `${dataNasDen.getDate()}/${dataNasDen.getMonth() + 1}/${dataNasDen.getFullYear()}`;

  return denunciaPage
    .preencherCampoNomeDenunciante(faker.name.firstName())
    .preencherCampoDataNascimentoDenunciante(dataNasDen)
    .selecionarEstadoDenunciante(faker.address.state())
    .preencherCampoTelefoneDenunciante(faker.phone.phoneNumberFormat())
    .preencherCampoEmailDenunciante(faker.internet.email())
    .preencherCampoRacaDenunciante(faker.random.arrayElement(['Preta', 'Parda']))
    .preencherCampoGeneroDenunciante(faker.random.arrayElement(['Feminino', 'Masculino']))
    .preencherCampoNomeVitima(faker.name.firstName())
    .preencherCampoDataNascimentoVitima(dataNasDen)
    .selecionarEstadoVitima(faker.address.state())
    .preencherCampoTelefoneVitima(faker.phone.phoneNumberFormat())
    .preencherCampoRacaVitima(faker.random.arrayElement(['Preta', 'Parda']))
    .preencherCampoGeneroVitima(faker.random.arrayElement(['Feminino', 'Masculino']))
    .preencherCampoDescricaoAgressor(faker.lorem.sentence())
    .selecionarCidadeDenunciante(faker.address.city())
    .selecionarCidadeVitima(faker.address.city());
});

When('O usuário confirma o cadastro da denúncia', () => {
  return denunciaPage.salvarDenuncia();
});

Then('A denúncia é salva com sucesso e o usuário é redirecionado para página "depois-denuncia"', () => {
  return denunciaPage.assert.urlContains('depois-denuncia');
});
