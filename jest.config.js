module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	moduleNameMapper: {
		'@styles/(.*)': '<rootDir>/src/styles/$1'
	}
};