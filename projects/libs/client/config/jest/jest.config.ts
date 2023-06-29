export default {
	rootDir: '../../',
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [],
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
};
