module.exports = {
    'collectCoverage': true,
    'coverageThreshold': {
        'global': { 'statement': 90 },
    },

    'transform': {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },

    'moduleNameMapper': {
        '^~/(.*)$': '<rootDir>/client/$1',
    },
    modulePaths: ['./src']
};
