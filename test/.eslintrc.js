module.exports = {
    extends: '../.eslintrc.js',
    env: {
        mocha: true
    },

    globals: {
        assert: false,
        sinon: false,
        enzyme: false,
        expect: false
    }
};
