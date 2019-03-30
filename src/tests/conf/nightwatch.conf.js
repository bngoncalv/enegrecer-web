const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'test/step_definitions',
    '--require', 'test/support_files/hooks.js',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:test/reports/cucumber.json',
    'test/features']
});

module.exports = {
  output_folder: 'test/reports',
  page_objects_path: 'test/pages',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8087',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      screenshots: {
        enabled: true,
        path: 'test/reports/',
        on_failure: true,
        on_error: true,
        on_success: true
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--lang=en', 'start-fullscreen']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    chromeMobile: {
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true,
        browserName: 'chrome',
        chromeOptions: {
          args: ['window-size=375,667']
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path
        }
      }
    }
  }
};
