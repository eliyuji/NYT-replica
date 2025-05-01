// cypress.config.cjs
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',  // Match this to your Svelte dev server URL
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
    setupNodeEvents(on, config) {
      // Add any additional node event listeners here if necessary
    },
  },
});