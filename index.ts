export default {
  cache: true,
  clearMocks: true,
  collectCoverage: true,
  maxWorkers: 1,
  coverageProvider: 'babel',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  slowTestThreshold: 1,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  verbose: false,
};
