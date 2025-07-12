import { defineConfig } from "vitest/config";

//this file will be called before each and every test
export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setup'
    }
})