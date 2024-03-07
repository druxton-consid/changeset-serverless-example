/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.+(ts|js)", "**/test/**/*.test.+(ts|js)"],
  coverageReporters: ["lcov", "text-summary", "json-summary"],
  moduleFileExtensions: ["js", "ts"],
  projects: [
    "<rootDir>/service-1",
    "<rootDir>/service-2",
    "<rootDir>/service-3",
  ],
};
