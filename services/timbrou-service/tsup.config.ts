import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
	dts: true,
	sourcemap: true,
	clean: !!options.watch,
	outDir: "dist",
	outExtension({ format }) {
		return {
			js: `.${format}.js`,
		};
	},
	entry: ["src/**/*.ts"],
	format: ["esm"],
	ignore: ["node_modules"],
	minify: true,
	minifySyntax: true,
	minifyWhitespace: true,
	minifyIdentifiers: true,
}));
