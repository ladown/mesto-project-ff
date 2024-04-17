const presets = [
    [
        '@babel/preset-env',
        {
            corejs: {
                proposals: true,
                version: '3.37.0',
            },
            targets: {
                chrome: '64',
                edge: '17',
                firefox: '50',
                ie: '11',
                safari: '11.1',
            },
            useBuiltIns: 'entry',
        },
    ],
];

module.exports = { presets };
