// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['detectBrowsers','jasmine', '@angular-devkit/build-angular'], //Adicion inicial
    // configuration
    detectBrowsers: {
      // enable/disable, default is true
      enabled: true,

      // enable/disable phantomjs support, default is true
      usePhantomJS: true,

      // use headless mode, for browsers that support it, default is false
      preferHeadless: true,

      // post processing of browsers list
      // here you can edit the list of browsers used by karma
      postDetection: function(availableBrowsers) {
        /* Karma configuration with custom launchers
          customLaunchers: {
            IE9: {
              base: 'IE',
              'x-ua-compatible': 'IE=EmulateIE9'
            }
          }
        */

          //Add IE Emulation
          var result = availableBrowsers;

          if (availableBrowsers.indexOf('IE')>-1) {
            result.push('IE9');
          }

          //Remove PhantomJS if another browser has been detected
          if (availableBrowsers.length > 1 && availableBrowsers.indexOf('PhantomJS')>-1) {
            var i = result.indexOf('PhantomJS');

            if (i !== -1) {
              result.splice(i, 1);
            }
          }

          return result;
        }
    },
    customLaunchers:{
      HeadlessChrome:{
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    //frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [ //Adicion inicial
      require('karma-firefox-launcher'),
      require('karma-detect-browsers'), //Adicion Final
      require('karma-jasmine'),
      //require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['junit', 'progress', 'kjhtml'],
    junitReporter: {
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
