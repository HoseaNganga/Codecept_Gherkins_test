exports.config = {
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://www.kilimall.co.ke",
      show: true,
      windowSize: "1200x900",
      waitForNavigation: ["load", "domcontentloaded", "networkidle0"],
      waitForTimeout: 10000,
    },
  },
  include: {
    I: "./steps_file",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step_definitions/steps.ts"],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    retryTo: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./*_test.ts",
  name: "Codecept",
};
