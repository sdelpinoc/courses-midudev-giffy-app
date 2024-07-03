module.exports = {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": [
    "./jest.setup.js"
  ],
  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  "moduleNameMapper": {
    '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
  },
};