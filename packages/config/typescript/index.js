// This file is just a placeholder to ensure the package can be imported.
// TypeScript configurations are meant to be extended directly in tsconfig.json files.
module.exports = {
  configs: {
    base: require.resolve("./base/tsconfig.json"),
    react: require.resolve("./react/tsconfig.json"),
    reactNative: require.resolve("./react-native/tsconfig.json"),
    node: require.resolve("./node/tsconfig.json"),
  },
};
