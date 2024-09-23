import { defineConfig } from "tsup";
export default defineConfig({
	entry: {
		index: "./src/index.ts",
		social: "./src/social-providers/index.ts",
		types: "./src/types/index.ts",
		client: "./src/client/index.ts",
		cli: "./src/cli/index.ts",
		react: "./src/client/react.ts",
		vue: "./src/client/vue.ts",
		svelte: "./src/client/svelte.ts",
		solid: "./src/client/solid.ts",
		plugins: "./src/plugins/index.ts",
		api: "./src/api/index.ts",
		utils: "./src/utils/index.ts",
		"client/plugins": "./src/client/plugins/index.ts",
		"svelte-kit": "./src/integrations/svelte-kit.ts",
		access: "./src/plugins/organization/access/index.ts",
		"solid-start": "./src/integrations/solid-start.ts",
		"next-js": "./src/integrations/next-js.ts",
		node: "./src/integrations/node.ts",
	},
	splitting: false,
	sourcemap: true,
	format: ["esm"],
	dts: true,
	external: [
		"react",
		"svelte",
		"solid-js",
		"$app/environment",
		"next",
		"mysql2",
		"pg",
		"typescript",
		"oslo",
		"@node-rs/argon2",
		"@node-rs/bcrypt",
		"better-sqlite3",
		"@babel/core",
		"commander",
		"chalk",
		"@babel/preset-typescript",
		"@babel/preset-react",
	],
	noExternal: ["arctic", "oslo"],
	skipNodeModulesBundle: true,
	target: "es2022",
});
