module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    './setupTests.js'
  ]
}
