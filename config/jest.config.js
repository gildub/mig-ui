module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/', '/helpers/'],
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'scss'],
  moduleNameMapper: {
    '\\.(css|sass|module)$': 'identity-obj-proxy',
  },
};
