module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 100,
      lines: 95,
      statements: 95
    }
  },
  coveragePathIgnorePatterns: [
    '.stories.js'
  ],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    './setupTests.js'
  ]
}
