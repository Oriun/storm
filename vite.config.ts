import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    dir: "tests",
    include: ["**/*.spec.ts"],
    environment: "node",
    passWithNoTests: true,
    watch: false
  },
});
