export default {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  collectCoverageFrom: ["**/src/**/*.{js,ts}", "!src/**/*.d.ts"],
  coverageDirectory: "<rootDir>/test-reports/coverage",
  testMatch: ["**/tests/**/*.test.+(ts|js)", "**/test/**/*.test.+(ts|js)"],
  coverageReporters: ["lcov", "text-summary", "json-summary"],
  moduleFileExtensions: ["js", "ts"],
  transformIgnorePatterns: ["*/node_modules/"],
  preset: "jest-dynalite",
  projects: [
    "<rootDir>/service-1",
    "<rootDir>/dashboard-backend",
    "<rootDir>/dashboard-frontend",
  ],
};
