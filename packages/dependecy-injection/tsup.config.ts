import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  dts: true,
  sourcemap: false,
  outDir: 'dist',
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  entry: ['src/**/*.ts', "!src/__tests__/**", "!src/**/*.test.*"],
  format: ['esm', 'cjs'],
  minify: true,
  minifySyntax: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  ignore: ['src/**/*.test.ts'],
}));
