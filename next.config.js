// ./frontend/next.config.js

const { withSentryConfig } = require("@sentry/nextjs");
/** @type {import('next').NextConfig} */

const nextConfig = {


  staticPageGenerationTimeout: 400,

// sentry: {
//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Transpiles SDK to be compatible with IE11 (increases bundle size)
//     transpileClientSDK: true,

//     // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
//     tunnelRoute: "/monitoring",

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,
//   },
  images: {
    domains: ["content-stage.skollege.com", "localhost", "cms-staging.skollege.com", "skollege-cms-staging.s3.ap-south-1.amazonaws.com"],
    //   remotePatterns: [
    //     {
    //       protocol: 'http',
    //       hostname: '',
    //       port: '1337',
    //       pathname: '/uploads/**',
    //     },
    //     {
    //       protocol: 'https',
    //       hostname: 'images.pexels.com',
    //     }
    //   ],
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore

    silent: true,
    org: "skollege",
    project: "javascript-nextjs",
  
  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

 module.exports = nextConfig;
//module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);

// module.exports = withSentryConfig(
//   module.exports,
//   {
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options

//     // Suppresses source map uploading logs during build
//     silent: true,
//     org: "skollege",
//     project: "javascript-nextjs",
//   },
//   {
//     // For all available options, see:
//     // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Transpiles SDK to be compatible with IE11 (increases bundle size)
//     transpileClientSDK: true,

//     // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
//     tunnelRoute: "/monitoring",

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,
//   }
// );
