const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  trailingSlash: true,
  assetPrefix: isProd ? 'https://vlasakh.github.io/test-nextjs-report' : '',
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
