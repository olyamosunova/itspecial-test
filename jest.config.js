module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,ts,vue}", "!**/node_modules/**"],
  transformIgnorePatterns: ["/node_modules/(?!bootstrap)"],
};
