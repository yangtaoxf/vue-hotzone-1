module.exports = {
  roots: ['__tests__'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testURL: 'http://localhost/',
  resetModules: true,
  clearMocks: true,
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text'],
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/directives/**',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
