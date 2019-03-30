const { URL, TIMEOUT } = require('../utils/syntaxSugar');

module.exports = {
  url: `${URL}denunciar/`,
  elements: {
    nomeDenunciante: 'input[name=nomeDenunciante]',
    emailDenunciante: 'input[name=emailDenunciante]',
    descricaoAgressor: 'input[name=descricaoAgressor]',
    enviarDenuncia: 'button[name=action]',
    dataNascimentoDenunciante: 'input[name=dataNascimentoDenunciante]',
    estadoDenunciante = 'input[name=estadoDenunciante]',
    cidadeDenunciante = 'input[name=cidadeDenunciante]',
    telefoneDenunciante = 'input[name=telefoneDenunciante]',
    racaDenunciante = 'input[name=racaDenunciante]',
    generoDenunciante = 'input[name=generoDenunciante]',
    nomeVitima = 'input[name=nomeVitima]',
    dataNascimentoVitima = 'input[name=dataNascimentoVitima]',
    estadoVitima = 'input[name=estadoVitima]',
    cidadeVitima = 'input[name=cidadeVitima]',
    telefoneVitima = 'input[name=telefoneVitima]',
    racaVitima = 'input[name=racaVitima]',
    generoVitima = 'input[name=generoVitima]',
    descricaoAgressao = 'input[name=descricaoAgressao]',
  },
  commands: [
    {
      preencherCampoNomeDenunciante (string) {
        this
          .waitForElementVisible('@nomeDenunciante', TIMEOUT)
          .setValue('@nomeDenunciante', string);
        return this;
      },

      preencherCampoDataNascimentoDenunciante (string) {
        this
          .waitForElementVisible('@dataNascimentoDenunciante', TIMEOUT)
          .setValue('@dataNascimentoDenunciante', string);
        return this;
      },

      selecionarEstadoDenunciante: (string) => {
        this
          .waitForElementVisible('@estadoDenunciante', TIMEOUT)
          .setValue('@estadoDenunciante', string);
        return this;
      },

      selecionarCidadeDenunciante: (string) => {
        this
          .waitForElementVisible('@cidadeDenunciante', TIMEOUT)
          .setValue('@cidadeDenunciante', string);
        return this;
      },

      preencherCampoTelefoneDenunciante: (string) => {
        this
          .waitForElementVisible('@telefoneDenunciante', TIMEOUT)
          .setValue('@telefoneDenunciante', string);
        return this;
      },

      preencherCampoEmailDenunciante: (string) => {
        this
          .waitForElementVisible('@emailDenunciante', TIMEOUT)
          .setValue('@emailDenunciante', string);
        return this;
      },

      preencherCampoRacaDenunciante: (string) => {
        this
          .waitForElementVisible('@racaDenunciante', TIMEOUT)
          .setValue('@racaDenunciante', string);
        return this;
      },

      preencherCampoGeneroDenunciante: (string) => {
        this
          .waitForElementVisible('@generoDenunciante', TIMEOUT)
          .setValue('@generoDenunciante', string);
        return this;
      },

      preencherCampoNomeVitima: (string) => {
        this
          .waitForElementVisible('@nomeVitima', TIMEOUT)
          .setValue('@nomeVitima', string);
        return this;
      },

      preencherCampoDataNascimentoVitima: (string) => {
        this
          .waitForElementVisible('@nomeVitima', TIMEOUT)
          .setValue('@nomeVitima', string);
        return this;
      },

      selecionarEstadoVitima: (string) => {
        this
          .waitForElementVisible('@nomeVitima', TIMEOUT)
          .setValue('@nomeVitima', string);
        return this;
      },

      selecionarCidadeVitima: (string) => {
        this
          .waitForElementVisible('@cidadeVitima', TIMEOUT)
          .setValue('@cidadeVitima', string);
        return this;
      },

      preencherCampoTelefoneVitima: (string) => {
        this
          .waitForElementVisible('@telefoneVitima', TIMEOUT)
          .setValue('@telefoneVitima', string);
        return this;
      },

      preencherCampoRacaVitima: (string) => {
        this
          .waitForElementVisible('@racaVitima', TIMEOUT)
          .setValue('@racaVitima', string);
        return this;
      },

      preencherCampoGeneroVitima: (string) => {
        this
          .waitForElementVisible('@generoVitima', TIMEOUT)
          .setValue('@generoVitima', string);
        return this;
      },

      preencherCampoDescricaoAgressor: (string) => {
        this
          .waitForElementVisible('@descricaoAgressor', TIMEOUT)
          .setValue('@descricaoAgressor', string);
        return this;
      },

      salvarDenuncia: () => {
        this
          .waitForElementVisible('@enviarDenuncia', TIMEOUT)
          .click('@enviarDenuncia');
        return this;
      }
    }
  ]
};
