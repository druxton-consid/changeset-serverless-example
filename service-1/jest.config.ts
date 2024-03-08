export default {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    uuid: require.resolve("uuid"),
  },
  collectCoverageFrom: ["src/**/*.{js,ts}", "!src/**/*.d.ts"],
  coverageDirectory: "<rootDir>/test-reports/coverage",
  setupFiles: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>**/*.test.+(ts|js)", "<rootDir>**/*.spec.+(ts|js)"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text-summary", "json-summary"],
  moduleFileExtensions: ["js", "ts"],
  transformIgnorePatterns: ["./node_modules/*"],
  preset: "jest-dynalite",
};
