import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'dc5n5d',
  e2e: {
    setupNodeEvents(on, config) {
      // Handle environment variables
      const environment = config.env.ENV || 'dev'; // Default to 'dev' if ENV is not set

      // Define base URLs for different environments
      const baseUrls: { [key: string]: string } = {
        dev: 'http://localhost:3000',
        staging: 'http://staging.example.com',
        prod: 'https://aluveapp.co.za',
      };

      // Set the baseUrl based on the environment
      config.baseUrl = baseUrls[environment];

      return config;
    },
  }
});
