module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel.config.cjs' }]
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)']
};
