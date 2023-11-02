export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {},
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest'
  // }
};
