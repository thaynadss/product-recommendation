module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  modulePaths: ["<rootDir>/src"],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    '^@types$': '<rootDir>/src/types/index.ts',
    '^@mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
}
