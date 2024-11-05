import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
	sourcemap: true,
	clean: !!options.watch,
	outDir: "dist",
	outExtension({ format }) {
		return {
			js: `.${format}.js`,
		};
	},
	entry: ["src/**/*.ts", "src/**/*.tsx", "!src/**/*.stories.tsx"],
	dts: true,
	format: ["esm", "cjs"],
	external: ["react"],
	minify: true,
	minifySyntax: true,
	minifyWhitespace: true,
	minifyIdentifiers: true,
	target: ["es2020"],
}));
