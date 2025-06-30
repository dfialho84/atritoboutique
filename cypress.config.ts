import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            const pluginConfig = {
                ...config,
                stepDefinitions: "cypress/e2e/[filepath].js",
            } as any;
            await addCucumberPreprocessorPlugin(on, pluginConfig);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            return config;
        },
        specPattern: "cypress/e2e/**/*.feature",
        baseUrl: "http://localhost:3000",
    },
});
