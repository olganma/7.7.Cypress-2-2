const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "nydc2c",
    baseUrl: 'https://petstore.swagger.io/v2',
    setupNodeEvents(on, config) {
    },
  },
});
