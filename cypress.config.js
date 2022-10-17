const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 4000,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on('task', { downloadFile })
        },
    },
});
