const defaultConfig = require('./nightwatch.conf');

const browserstackConfig = {
  selenium: {
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': 'brunagonalves3',
        'browserstack.key': 'n5c6Ay3MqPpNPpxj567q',
        'browserstack.local': true
      },
      globals: defaultConfig.test_settings.default.globals
    },
    ie: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'IE',
        browser_version: '11.0'
      }
    },
    edge: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'edge',
        browser_version: '17.0'
      }
    },
    safari: {
      desiredCapabilities: {
        os: 'OS X',
        os_version: 'High Sierra',
        browser: 'safari',
        browser_version: '11.0'
      }
    },
    firefox: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'firefox'
      }
    },
    chrome: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'chrome',
        browser_version: '70.0'
      }
    }
  }
};

const nightwatchConfig = Object.assign({}, defaultConfig, browserstackConfig);

Object.keys(nightwatchConfig.test_settings).forEach((key) => {
  const config = nightwatchConfig.test_settings[key];

  config.selenium_host = nightwatchConfig.selenium.host;
  config.selenium_port = nightwatchConfig.selenium.port;
  config.desiredCapabilities = Object.assign(
    {},
    nightwatchConfig.test_settings.default.desiredCapabilities,
    config.desiredCapabilities,
  );
});

module.exports = nightwatchConfig;
