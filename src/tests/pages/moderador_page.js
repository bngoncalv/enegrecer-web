const { TIMEOUT } = require('../utils/syntaxSugar');

module.exports = {
  elements: {
    painelModerador: 'div[class=painel-moderador]',
    logoutButton: 'input[id=logout]',
    botaoExpandiRetrair: 'input[name=toggleBtn]',
    descricaoDenunciaRow: 'tr[class=descricao-denuncia-row]'
  },
  commands: [
    {
      logoutClick() {
        return this
        .waitForElementVisible('@logoutButton', TIMEOUT)
        .click('@logoutButton');
      },
      expandirRetrairClick(){
        return this
        .waitForElementVisible('@botaoExpandiRetrair', TIMEOUT)
        .click('@botaoExpandiRetrair');
      } 
    }
  ] 
};
