import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
    e2e: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async setupNodeEvents(on: any, config: any) {
            await addCucumberPreprocessorPlugin(on, config);

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
    } as any, // eslint-disable-line @typescript-eslint/no-explicit-any
});
