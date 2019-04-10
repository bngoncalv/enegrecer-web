const { URL, TIMEOUT } = require('../utils/syntaxSugar');

module.exports = {
  url: `${URL}login/`,
  elements: {
    loginModerador: 'input[name=loginModerador]',
    senhaModerador: 'input[name=senhaModerador]',
    loginButton: 'button',
  },
  commands: [
    {
      preencherCampoLoginModerador (string) {
        this
          .waitForElementVisible('@loginModerador', TIMEOUT)
          .setValue('@loginModerador', string);
        return this;
      },
      preencherCampoSenhaModerador (string) {
        this
          .waitForElementVisible('@senhaModerador', TIMEOUT)
          .setValue('@senhaModerador', string);
        return this;
      },
      loginClick() {
        this
          .waitForElementVisible('@loginButton', TIMEOUT)
          .click('@loginButton');
        return this;
      },
    }
  ]
};
