const { ProvidePlugin } = require("webpack");

module.exports = function (config, env) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /.(m?js|ts|tsx)$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      }),
    ],
    resolve: {
      ...config.resolve,
      fallback: {
        fs: require.resolve("browserify-fs"),
        // url: require.resolve("url/"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
        // console: require.resolve("console-browserify"),
        // assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        os: require.resolve("os-browserify/browser"),
        zlib: require.resolve('browserify-zlib'),
        console: false,
        tls: false,
      },
    },
    ignoreWarnings: [/Failed to parse source map/],
  };
};
