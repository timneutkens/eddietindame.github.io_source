module.exports = {
    setupFiles: ['<rootDir>/__tests__/jest.setup.js'],
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/',
        '<rootDir>/__tests__/jest.setup.js'
    ],
    testURL: 'http://localhost',
    moduleNameMapper: {
         "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
         "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
}
