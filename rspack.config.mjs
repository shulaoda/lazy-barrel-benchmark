import { defineConfig } from "@rspack/cli";

export default defineConfig({
  entry: "./index.js",
  plugins: [
    {
      apply(compiler) {
        compiler.hooks.done.tap("count-modules", (stats) => {
          console.log("Modules count:", stats.compilation.builtModules.size);
        });
      },
    },
  ],
  devtool: false,
  experiments: {
    lazyBarrel: true,
  },
});
