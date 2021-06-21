module.exports = {
  cacheDirectory: './node_modules/.cache/jest',
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  coverageDirectory: '.testreports',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '^.*\\.d\\.ts$',
    '/components/index.ts',
    '/app/index.ts',
    '/tests/',
  ],
  coverageThreshold: {
    'global': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './src/pages/': {
      branches: 0,
      statements: 0,
    },
    './src/components/': {
      branches: 0,
      statements: 0,
    },
    './src/utils': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coverageReporters: ['html', 'text'],
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|.next|.testreports|.storybook)[/\\\\]',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$':
      '<rootDir>/src/app/utils/test/__mocks__/fileMock.js',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
};
