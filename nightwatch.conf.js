const chromedriver = require('chromedriver');

module.exports = {
    src_folders: ['tests'],

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515
    },

    screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'tests_output/'
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    }
}