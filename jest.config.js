module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'JSDOM',
  roots: ["<rootDir>/src"],
  transform: {
  "^.+\\.tsx?$": "ts-jest"
},
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.tsx'],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
};